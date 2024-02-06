import { RESPONSEERRORMESSAGE } from "@constants/errMessage"
import type { Source } from "@/types/source"
import { POST, POSTRESPONSE } from "@services/index"


interface chatQaRequest {
    conversation_uuid: string,
    ask_type: string,
    llm_type: string,
    question: string
}
export const chatQaRequestWithReader = async (params: chatQaRequest) => {
    try {
        const response = await POSTRESPONSE("/search_ask", params)
        return response.body!.getReader()
    } catch (error) {
        throw new Error(RESPONSEERRORMESSAGE[500])
    }
}


//获取当前Source 
export const getchatSource = (conversation_uuid: string) => POST<Source[]>("/search_conv_rel_info", { conversation_uuid })
