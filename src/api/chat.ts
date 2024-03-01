import { RESPONSEERRORMESSAGE } from "@constants/errMessage"
import type { Source } from "@/types/source"
import { POST, POSTRESPONSE } from "@services/index"
import { UserSearchRecords, searchRecord } from "@/types/Apichat"


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
export const getChatSource = (conversation_uuid: string) => POST<Source[]>("/search_conv_rel_info", { conversation_uuid })


//search_record 获取聊天记录
export const getChatRecord = (conversation_uuid: string, question: string) => POST<searchRecord>("/search_record", { conversation_uuid, question })

//user_search_records
export const getUserSearchRecords = () => POST<UserSearchRecords[]>("/user_search_records")
