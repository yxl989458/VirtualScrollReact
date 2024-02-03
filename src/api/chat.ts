import { RESPONSEERRORMESSAGE } from "@constants/errMessage"
import { POST, POSTRESPONSE } from "@services"
import type{ Source } from "@/types/source"


interface chatQaRequest {
    conversation_uuid: string,
    ask_type: string,
    llm_type: string,
    question: string
}
export const chatQaRequestWithReader = async (params: chatQaRequest) => {
    try {
        const response = await POSTRESPONSE("http://ekbapi.opencsg.com:9090/api/search_ask", params)
        return response.body!.getReader()
    } catch (error) {
        throw new Error(RESPONSEERRORMESSAGE[500])
    }
}


//获取当前Source 

export const getChatSource = async (conversation_uuid: string) => POST<Source[]>("http://ekbapi.opencsg.com:9090/api/search_conv_rel_info", { conversation_uuid })
