/// <reference types="mocha" />
/**
 * This is the integration test that make sure the client can make request cross-platform-ly
 * in NodeJS, Chromium and Firefox. This test is written in mocha.
 */
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { S3 } from "../index";
import { Credentials } from "@aws-sdk/types";
chai.use(chaiAsPromised);
const { expect } = chai;
// There will be default values of defaultRegion, credentials, and isBrowser variable in browser tests.
// Define the values for Node.js tests
const region: string | undefined =
  (globalThis as any).defaultRegion || undefined;
const credentials: Credentials | undefined =
  (globalThis as any).credentials || undefined;
const isBrowser: boolean | undefined = (globalThis as any).isBrowser || false;

// this bucket requires enabling CORS:
// AllowedOrigin(*), AllowedMethod(GET, PUT, POST, DELETE, HEAD), ExposeHeader(ETag), AllowedHeader(*)
const Bucket = "aws-sdk-unit-test";
const Key = `${Date.now()}`;

describe("@aws-sdk/client-s3", () => {
  const client = new S3({
    region: region,
    credentials
  });

  const createBuffer = (size: string) => {
    var match;
    var buffer;
    if ((match = size.match(/(\d+)KB/))) {
      buffer = Buffer.alloc(parseInt(match[1]) * 1024);
    } else if ((match = size.match(/(\d+)MB/))) {
      buffer = Buffer.alloc(parseInt(match[1]) * 1024 * 1024);
    } else {
      switch (size) {
        case "empty":
          buffer = Buffer.alloc(0);
          break;
        case "small":
          buffer = Buffer.alloc(1024 * 1024);
          break;
        case "large":
          buffer = Buffer.alloc(1024 * 1024 * 20);
          break;
        default:
          return Buffer.alloc(1024 * 1024);
      }
    }
    buffer.fill("x");
    return buffer;
  };

  describe("PutObject", () => {
    after(async () => {
      await client.deleteObject({
        Bucket,
        Key
      });
    });
    if (isBrowser) {
      const buf = createBuffer("1KB");
      it("should succeed with blob body", async () => {
        const result = await client.putObject({
          Bucket,
          Key,
          Body: new Blob([buf])
        });
        expect(result.$metadata.httpStatusCode).to.equal(200);
      });

      it("should succeed with TypedArray body", async () => {
        const result = await client.putObject({
          Bucket,
          Key,
          Body: buf
        });
        expect(result.$metadata.httpStatusCode).to.equal(200);
      });

      it("should succeed with ReadableStream body", async () => {
        const length = 10 * 1000; // 10KB
        const chunkSize = 10;
        const readableStream = new ReadableStream({
          start(controller) {
            let sizeLeft = length;
            while (sizeLeft > 0) {
              let chunk = "";
              for (let i = 0; i < Math.min(sizeLeft, chunkSize); i++) {
                chunk += "x";
              }
              controller.enqueue(chunk);
              sizeLeft -= chunk.length;
            }
          }
        });
        const result = await client.putObject({
          Bucket,
          Key,
          Body: readableStream
        });
        expect(result.$metadata.httpStatusCode).to.equal(200);
      });
    }

    if (!isBrowser) {
      it("should succeed with Node.js readable stream body", async () => {
        const length = 10 * 1000; // 10KB
        const chunkSize = 10;
        const { Readable } = require("stream");
        let sizeLeft = length;
        const inputStream = new Readable({
          read() {
            if (sizeLeft <= 0) {
              this.push(null); //end stream;
              return;
            }
            let chunk = "";
            for (let i = 0; i < Math.min(sizeLeft, chunkSize); i++) {
              chunk += "x";
            }
            this.push(chunk);
            sizeLeft -= chunk.length;
          }
        });
        inputStream.size = length; // This is required
        const result = await client.putObject({
          Bucket,
          Key,
          Body: inputStream
        });
        expect(result.$metadata.httpStatusCode).to.equal(200);
      });
    }
  });

  describe("ListObjects", () => {
    it("should succeed with valid bucket", async () => {
      const result = await client.listObjects({
        Bucket
      });
      expect(result.$metadata.httpStatusCode).to.equal(200);
    });

    it("should throw with invalid bucket", () =>
      expect(
        client.listObjects({ Bucket: "invalid-bucket" })
      ).to.eventually.be.rejected.and.be.an.instanceOf(Error));
  });

  describe("MultipartUpload", () => {
    let UploadId: string | undefined = undefined;
    let Etag: string | undefined = undefined;
    const multipartObjectKey = `${Key}-multipart`;
    afterEach(async () => {
      if (UploadId) {
        await client.abortMultipartUpload({
          Bucket,
          Key: multipartObjectKey,
          UploadId
        });
      }
      await client.deleteObject({
        Bucket,
        Key: multipartObjectKey
      });
    });

    it("should successfully create, upload list and complete", async () => {
      //create multipart upload
      const createResult = await client.createMultipartUpload({
        Bucket,
        Key: multipartObjectKey
      });
      expect(createResult.$metadata.httpStatusCode).to.equal(200);
      UploadId = createResult.UploadId;
      expect(typeof UploadId).to.equal("string");

      //upload part
      const uploadResult = await client.uploadPart({
        Bucket,
        Key: multipartObjectKey,
        UploadId,
        PartNumber: 1,
        Body: createBuffer("1KB")
      });
      expect(uploadResult.$metadata.httpStatusCode).to.equal(200);
      expect(typeof uploadResult.ETag).to.equal("string");
      Etag = uploadResult.ETag;

      //list parts
      const listPartsResult = await client.listParts({
        Bucket,
        Key: multipartObjectKey,
        UploadId
      });
      expect(listPartsResult.$metadata.httpStatusCode).to.equal(200);
      expect(listPartsResult.Parts?.length).to.equal(1);
      expect(listPartsResult.Parts?.[0].ETag).to.equal(Etag);

      //complete multipart upload
      const completeResult = await client.completeMultipartUpload({
        Bucket,
        Key: multipartObjectKey,
        UploadId,
        MultipartUpload: { Parts: [{ ETag: Etag, PartNumber: 1 }] }
      });
      expect(completeResult.$metadata.httpStatusCode).to.equal(200);

      //validate the object is uploaded
      const headResult = await client.headObject({
        Bucket,
        Key: multipartObjectKey
      });
      expect(headResult.$metadata.httpStatusCode).to.equal(200);
    });

    it("should successfully create, abort, and list upload", async () => {
      //create multipart upload
      const createResult = await client.createMultipartUpload({
        Bucket,
        Key: multipartObjectKey
      });
      expect(createResult.$metadata.httpStatusCode).to.equal(200);
      const toAbort = createResult.UploadId;
      expect(typeof toAbort).to.equal("string");

      //abort multipart upload
      const abortResult = await client.abortMultipartUpload({
        Bucket,
        Key: multipartObjectKey,
        UploadId: toAbort
      });
      expect(abortResult.$metadata.httpStatusCode).to.equal(204);

      //validate multipart upload is aborted
      const listUploadsResult = await client.listMultipartUploads({
        Bucket
      });
      expect(listUploadsResult.$metadata.httpStatusCode).to.equal(200);
      expect(
        listUploadsResult.Uploads?.map(upload => upload.UploadId)
      ).not.to.contain(toAbort);
    });
  });
});
