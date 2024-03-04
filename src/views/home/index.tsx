import { getSelectedHotSearch } from "@api/chat"
import { Icon } from "@iconify/react/dist/iconify.js"
import { HotSearch } from "@/types/Apichat"
import { useEffect, useState } from "react"
import { Button } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import { generateRandomString } from "@utils/randomStr"
import Logo from '@/assets/logo.svg'

const Home = () => {
    const [hotSearch, setHotSearch] = useState<HotSearch[]>([])
    const navigate = useNavigate()
    const getSelectedHotSearchRequest = async () => {
        const { data } = await getSelectedHotSearch()
        setHotSearch(data)
    }
    const clickHotSearch = (item: HotSearch) => {
        navigate(`/search/${item.uuid}?isGetUserRecord=true`)
    }
    useEffect(() => {
        getSelectedHotSearchRequest()
    }, [])

    const [issuse, setIssuse] = useState('')
    return <div className="bg-white   flex-col   lg:h-screen  h-[calc(100vh-100px)] w-full   gap-6  flex items-center justify-center">
        <div className=" w-full   items-center justify-center gap-1 lg:flex hidden">
            <img className="w-8 h-10" src={Logo} />
            <span className="text-[#828282] font-bold text-2xl ">AskAsk AI</span>
        </div>
        <div className="text-[#606060] font-bold text-2xl">有不懂，就问问AI</div>
        <div className="border-[3px] border-[#828282] rounded-2xl lg:w-[646px] w-4/5 lg:min-h-[196px] min-h-[100px] py-4 px-3 flex justify-between gap-2 items-center">
            <div className="flex flex-col lg:min-h-[166px] min-h-[100px]   w-full  justify-between relative">
                <textarea value={issuse} onChange={(e) => setIssuse(e.target.value)} placeholder="输入你想了解的" className="resize-none text-xl text-[#828282DB] pr-2 focus:outline-none absolute left-0 bottom-10 top-0 w-full  h-[100%]" ></textarea>
                {/* <div className="absolute bottom-0 left-0 flex gap-1 items-center">
                    <span>Pro</span>
                    <Switch defaultSelected aria-label="Automatic updates" size="sm" />
                </div> */}
            </div>
            <Button onClick={() => {
                const randomStr = generateRandomString()
                navigate(`/search/${randomStr}?question=${issuse}`)
            }} isDisabled={issuse.length == 0} variant="light" isIconOnly>
                <Icon icon='material-symbols-light:bubble-chart' width={58} height={58} color="#828282"></Icon>
            </Button>
        </div>
        <div className="justify-center lg:flex lg:flex-wrap lg:items-center lg:gap-y-2 lg:gap-x-10 mt-5 grid gap-3  grid-cols-1 place-items-center lg:px-0 px-10">
            <div className="flex gap-1 items-center text-center justify-center"><Icon icon='mingcute:fire-fill' width={24} height={24} color="#828282" /> <span className="text-[#828282] text-lg  font-bold">热门问题：</span></div>
            {
                hotSearch.map((item) => <div key={item.uuid} className="text-[#828282] text-center  underline border-[#828282] hover:text-gray-800 text-lg cursor-pointer" onClick={() => clickHotSearch(item)}>{item.prompt}</div>)
            }
        </div>
    </div>
}

export default Home
