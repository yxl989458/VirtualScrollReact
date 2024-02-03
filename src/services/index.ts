//fetch封装

import { APIBASEURL } from "@constants/base";

interface State<T> {
    code: number,
    data: T,
    msg: string
}
export const fetchIns = async (url: string, options?: RequestInit): Promise<Response> => {
    const urls = APIBASEURL + url
    const res = await fetch(urls, options);
    return res
}

export const fetchJson = async  <T>(url: string, options?: RequestInit): Promise<State<T>> => {
    const res = await fetchIns(url, options);
    const json = await res.json();
    return json
}

export const GET = <T>(url: string, params: Record<string, string | number> = {}, options: RequestInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
}): Promise<State<T>> => {
    const UrlQuery = url + '?' + Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
    return fetchJson(UrlQuery, {
        ...options,
        method: 'GET',
    })
}

export const POST = <T>(url: string, params: Record<string, string | number> = {}, options: RequestInit = {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
}): Promise<State<T>> => {
    return fetchJson(url, {
        ...options,
        method: 'POST',
        body: JSON.stringify(params),
    })
}

export const POSTRESPONSE = (url: string, params: unknown, options: RequestInit = {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
}): Promise<Response> => {
    return fetchIns(url, {
        ...options,
        method: 'POST',
        body: JSON.stringify(params),
    })
}
