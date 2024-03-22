
export const useStreamRead = (reader: ReadableStreamDefaultReader<Uint8Array>) => {
    const streamRead = async (callback: (data: string) => void, callbackDone: (done: boolean) => void,) => {
        console.log('isRead',);

        let output: string = ''
        const textDecoder = new TextDecoder();
        let whileFlag = true
        while (whileFlag) {
            const { done, value } = await reader.read();
            if (done) {
                callbackDone && callbackDone(true)
                whileFlag = false
                break
            }
            const chunkText = textDecoder.decode(value);
            output += chunkText;
            callback(output)
        }
    }
    return {
        streamRead
    }
}
