import {AbortController as IAbortController} from "@aws-js-sdk-v3-prerelease/types";
import {AbortSignal} from "./AbortSignal";

export class AbortController implements IAbortController {
    public readonly signal: AbortSignal = new AbortSignal();

    abort(): void {
        this.signal.abort();
    }
}
