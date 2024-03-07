import { Icon } from "@iconify/react/dist/iconify.js"
import { HotSearch, UserSearchRecords } from "@/types/Apichat"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSelectedHotSearch } from "@api/chat"
interface listProprs {
    userSearchRecords: UserSearchRecords[]
}
const List = ({ userSearchRecords }: listProprs) => {

    const navigate = useNavigate()

    const [hotSearch, setHotSearch] = useState<HotSearch[]>([])
    const getSelectedHotSearchRequest = async () => {
        const { data } = await getSelectedHotSearch()
        const dataSplice = data.sort(() => Math.random() - 0.5).splice(0, 8)
        setHotSearch(dataSplice)
    }
    useEffect(() => {
        getSelectedHotSearchRequest()
    }, [])



    function searchRecord(item: UserSearchRecords) {
        navigate(`/search/${item.uuid}?isGetUserRecord=true`)
    }
    return (
        <>
            <main className="flex gap-5 flex-col">
                <div className="flex gap-3 items-center cursor-pointer" onClick={() => navigate('/')}>
                    <Icon icon="mdi:home" width={30} height={30} color="#828282" />
                    <span className="text-[#828282] font-bold">首页</span>
                </div>
                <div className="flex gap-3 items-center cursor-pointer">
                    <Icon icon="icon-park-twotone:all-application" width={30} height={30} color="#828282" />
                    <span className="text-[#828282] font-bold">热门搜索</span>
                </div>
                <div className="pl-4 py-1 overflow-auto ">
                    <div className="border-l-2 px-2 border-[#cccccc]  flex flex-col gap-4">
                        {
                            hotSearch.map(item => <p onClick={() => {
                                navigate(`/search/${item.uuid}?isGetUserRecord=true`)
                            }} key={item.uuid} className="text-sm cursor-pointer  truncate text-[#828282]">{item.prompt}</p>)
                        }

                    </div>
                </div>
                <div className="flex gap-3 items-center cursor-pointer">
                    <Icon icon="pepicons-pop:menu" width={30} height={30} color="#828282" />
                    <span className="text-[#828282] font-bold">搜索记录</span>
                </div>
                <div className="pl-4 py-1 overflow-auto xxs:h-[calc(100vh-550px)]">
                    <div className="border-l-2 px-2 border-[#cccccc]    flex flex-col gap-4">
                        {
                            userSearchRecords.map(item => <p onClick={() => searchRecord(item)} key={item.uuid} className="text-sm cursor-pointer  truncate text-[#828282]" >{item.prompt}</p>)
                        }
                    </div>
                </div>
            </main>
        </>
    )

}


export default List
