import { describe, it, expect } from "vitest";

describe("vitest test", () => {
    it("test fetch", async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        expect(res.status).toBe(200)
    });
})
