import { describe, expect, it } from "vitest";
import { load } from '@modules/fingerprint'

describe("fingerprintjs", () => {
    it("is truthy", async () => {
        const fpPromise = await load();
        const result = await fpPromise.get()
        const visitorId = result.visitorId
        expect(visitorId).toMatchInlineSnapshot(`"ada6e6511fb127c2de67464601227273"`)
    });
});
