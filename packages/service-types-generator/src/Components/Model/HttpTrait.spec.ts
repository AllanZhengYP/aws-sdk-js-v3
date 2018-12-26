import {HttpTrait as HttpTraitDefinition} from "@aws-js-sdk-v3-prerelease/types";
import {HttpTrait} from "./HttpTrait";

describe('HttpTrait', () => {
    it('should return a string representing the HttpTrait object passed in', () => {
        const trait: HttpTraitDefinition = {
            method: 'HEAD',
            requestUri: '/',
        };

        expect((new HttpTrait(trait)).toString().replace(/\s/g, ''))
            .toEqual(`{method:'${trait.method}',requestUri:'${trait.requestUri}',}`);
    });
});
