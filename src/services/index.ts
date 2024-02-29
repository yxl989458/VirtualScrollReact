//fetch封装
import { APIBASEURL, NODEENV } from "@constants/base";
import { useFingerprintId } from "@hooks/useFingerprint";
interface State<T> {
    code: number,
    data: T,
    msg: string
}
export const fetchIns = async (url: string, options?: RequestInit): Promise<Response> => {
    try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const fingerprintId = await useFingerprintId()
        const urls = NODEENV === 'test' ? url : APIBASEURL + url
        
        const res = await fetch(urls, {
            ...options,
            headers: {
                'authorization': JSON.parse(localStorage.getItem('auth')!)!.state.token,
                'fp': fingerprintId
            }
        })
        if (res.status !== 200) {
            throw new Error(res.statusText)
        }
        return res
    } catch (error) {
        console.log(error)
        throw new Error(error as string)
    }
}

export const fetchJson = async  <T>(url: string, options?: RequestInit): Promise<State<T>> => {
    try {
        const res = await fetchIns(url, options);
        const json = await res.json();
        return json
    } catch (error) {
        throw new Error(error as string)
    }
}

export const GET = <T>(url: string, params: Record<string, string | number> = {}, options: RequestInit = {
    method: 'GET',
}): Promise<State<T>> => {
    const UrlQuery = url + '?' + Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
    return fetchJson(UrlQuery, {
        ...options,
        method: 'GET',
    })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const POST = <T>(url: string, params: Record<string, any> = {}, options: RequestInit = {
    method: 'POST',
}): Promise<State<T>> => {
    return fetchJson(url, {
        ...options,
        method: 'POST',
        body: JSON.stringify(params),
    })
}

export const POSTRESPONSE = (url: string, params: unknown, options: RequestInit = {
    method: 'POST',
}): Promise<Response> => {
    return fetchIns(url, {
        ...options,
        method: 'POST',
        body: JSON.stringify(params),
    })
}
