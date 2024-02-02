import { Source } from "../../types/source"

type SourceCardProps = {
    source: Source
}
const SourceCard = ({ source }: SourceCardProps) => {
    return (
        <div onClick={() => window.open(source.url)} key={source.id} className="bg-offset mb-3 hover:bg-[#e8e8e3]  grid grid-rows-3 grid-cols-1 group basis-96 grow-1  items-stretch w-full relative h-[96px] p-3 gap-4 rounded-md">
            <p className="line-clamp-2 text-ellipsis row-span-2  overflow-hidden box-border flex-1  grow leading-6   text-base  ">{source.desc}</p>
            <div className="row-span-1 flex  items-center gap-2">
                <img className="w-5 h-5  rounded-full" src={source.avatar} alt="" />
                <span>{source.name}</span>
            </div>
        </div>
    )
}

export default SourceCard
