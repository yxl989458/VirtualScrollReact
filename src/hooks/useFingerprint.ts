export const useFingerprintId = async () => {
    let visitorId = ""
    await import("@modules/fingerprint").then(async ({ load }) => {
        const fpPromise = await load();
        const result = await fpPromise.get()
        visitorId = result.visitorId
    })
    return visitorId
}
