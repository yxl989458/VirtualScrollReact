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
        //随机数据并只显示八条数据
        const dataSplice = data.sort(() => Math.random() - 0.5).splice(0, 8)
        setHotSearch(dataSplice)
    }
    const clickHotSearch = (item: HotSearch) => {
        navigate(`/search/${item.uuid}?isGetUserRecord=true`)
    }
    useEffect(() => {
        getSelectedHotSearchRequest()
    }, [])
    function InputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        e.target.style.height = 'auto'
        setIssuse(e.target.value)
        e.target.style.height = e.target.scrollHeight + 'px'
    }

    const [issuse, setIssuse] = useState('')
    return <div className="bg-white   flex-col justify-between   lg:h-screen  xxs:h-[calc(100vh-200px)] w-full   gap-6 py-10  flex items-center  lg:justify-center lg:gap-20">
        <div className="flex flex-col gap-10">
            <div className=" w-full   items-center justify-center gap-1 lg:flex hidden">
                <img className="w-8 h-10" src={Logo} />
                <span className="text-[#828282] font-bold text-2xl ">AskAsk AI</span>
            </div>
            <div className="text-[#606060] font-bold text-2xl">有不懂，就问问AI</div>
        </div>
        <div className="justify-center lg:flex lg:flex-wrap lg:items-center lg:gap-y-2 lg:gap-x-10 mt-5 grid gap-3  grid-cols-1 place-items-center lg:px-0 px-10">
            <div className="flex gap-1 items-center text-center justify-center"><Icon icon='mingcute:fire-fill' width={24} height={24} color="#828282" /> <span className="text-[#828282] text-lg  font-bold">热门问题：</span></div>
            {
                hotSearch.map((item) => <div key={item.uuid} className="text-[#828282] truncate xxs:w-[250px]  text-center  underline border-[#828282] hover:text-gray-800  cursor-pointer" onClick={() => clickHotSearch(item)}>{item.prompt}</div>)
            }
        </div>
        <div className="border-[3px] border-[#828282] rounded-2xl lg:w-[646px] w-4/5  h-auto xxs:max-h-[200px] lg:max-h-[446px]   px-3 flex justify-between gap-2 items-center">
            <div className="flex flex-col h-full  w-full  justify-between relative">
                <textarea value={issuse} onChange={InputChange} placeholder="输入你想了解的" className="resize-none text-xl text-[#828282DB] pr-2 focus:outline-none   leading-10     w-full  h-full " ></textarea>
            </div>
            <Button onClick={() => {
                const randomStr = generateRandomString()
                navigate(`/search/${randomStr}?question=${issuse}`)
            }} isDisabled={issuse.length == 0} variant="light" isIconOnly>
                <Icon icon='material-symbols-light:bubble-chart' width={58} height={58} color="#828282"></Icon>
            </Button>
        </div>
    </div>
}

export default Home
