import { useState } from "react";

export const useFingerprintId = async () => {
    const [visitorId, setVisitorId] = useState<string | null>(null)
    await import("@modules/fingerprint").then(async ({ load }) => {
        const fpPromise = await load();
        const result = await fpPromise.get()
        setVisitorId(result.visitorId)
    })
    return visitorId
}
