import { useStreamRead } from "@hooks/useStreamRead";
import { POSTRESPONSE } from "@services";
import { v4 } from "uuid";
import { describe, expect, it } from "vitest";


describe("useStreamRead", () => {
    it("useStreamRead to stream", async () => {
        const res = await POSTRESPONSE("http://ekbapi.opencsg.com:9090/api/search_ask", {
            conversation_uuid: v4(),
            ask_type: "single_file",
            llm_type: "1",
            question: "hello"
        })
        const reader = res.body?.getReader()
        const { streamRead } = useStreamRead(reader!)
        await streamRead((str) => {
            expect(str).not.lengthOf(0)
        })
    })
})
