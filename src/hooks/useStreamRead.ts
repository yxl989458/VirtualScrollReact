import { APIBASEURL } from "@constants/base";
import FetchStream from "@services/FetchStream"

export const useStreamRead = (url:string) => {
    const fetchStream = (params: unknown, callback: (data: string) => void, callbackDone: (done: boolean) => void) => {
        let output: string = ''
        const streamIns = new FetchStream({
            url: APIBASEURL + url,
            requestInit: { // fetch 配置项
                body: JSON.stringify(params),
            },
            onmessage: (content) => {
                output += content
                callback && callback(output)
            },
            undone: () => {
                callbackDone && callbackDone(true)
            },
        });
        return streamIns
    }
    return {
        fetchStream
    }
}
