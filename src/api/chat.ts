import type { Source } from "@/types/source"
import { GET, POST } from "@services/index"
import { HotSearch, UserSearchRecords } from "@/types/Apichat"



//获取当前Source 
export const getChatSource = (conversation_uuid: string) => POST<Source[]>("/search_conv_rel_info", { conversation_uuid })


//search_record 获取聊天记录
export const getChatRecord = (conversation_uuid: string, question?: string) => POST<UserSearchRecords>("/search_record", { conversation_uuid, question })

//user_search_records 获取用户搜索记录
export const getUserSearchRecords = () => POST<UserSearchRecords[]>("/user_search_records")

//获取选问题 /selected_hot_search

export const getSelectedHotSearch = () => GET<HotSearch[]>("/selected_hot_search")

