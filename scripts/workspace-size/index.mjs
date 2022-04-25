import bytes from "bytes";
import { execa } from "execa";

const { stdout: listResponse } = await execa("yarn", [
  "-s",
  "lerna",
  "list",
  "--json",
  "--no-private",
  "--loglevel=quiet",
]);

const pkgs = JSON.parse(listResponse);
let packageSourceTotal = 0;
let packageInstallTotal = 0;
for (const { name, location } of pkgs) {
  const { stderr: publishResponse } = await execa("npm", ["publish", "--dry-run"], { cwd: location });
  const lastMessage = publishResponse.substring(publishResponse.lastIndexOf(/\W+/));
  const lines = lastMessage.split("\n").map((line) => line.replace("npm notice ", ""));
  const sourceSize = lines.find((line) => line.includes("dist-node-cjs-min/index.js")).split(/\s+/)[0];
  const packageJsonSize = lines.find((line) => line.includes("package.json")).split(/\s+/)[0];
  const unpackedSize = lines
    .find((line) => line.includes("unpacked size"))
    .split(/\s+/)
    .slice(2, 4)
    .join("");
  const packageSource = bytes.parse(sourceSize) + bytes.parse(packageJsonSize);
  const packageInstall = bytes.parse(unpackedSize);
  console.log(`${name}: source size: ${packageSource} | unpackedSize: ${packageInstall}`);
  packageSourceTotal += packageSource;
  packageInstallTotal += packageInstall;
}

console.log(`summary: source total: ${packageSourceTotal} | install total: ${packageInstallTotal}`);
