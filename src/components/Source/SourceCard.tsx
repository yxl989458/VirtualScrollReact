import { Source } from "@/types/source"
type SourceCardProps = {
    source: Source
}
const SourceCard = ({ source }: SourceCardProps) => {
    return (
        <div onClick={() => window.open(source.url)} key={source.id} className="bg-gray-500/10 opacity-1 ease-in-out h-[110px]  transition-all duration-200 cursor-pointer mb-3 hover:bg-[#e8e8e3]   group basis-96 grow-1  items-stretch w-full relative p-3 flex flex-col justify-between   gap-4 rounded-md">
            <p className="line-clamp-2 overflow-hidden box-border flex-1 md:text-md  text-base">{source.title}</p>
            <div className=" flex items-center gap-2">
                <img className="w-5 h-5  rounded-full" src={source.icon_url} alt="" />
                <span>{source.site_name}</span> 
            </div>
        </div>
    )
}

export default SourceCard
