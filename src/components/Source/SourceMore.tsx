import { Avatar } from "@nextui-org/react"
import { Source } from "src/types/source"

type SourceMoreProps = {
    clickSourceMore: () => void
    moreSourceList: Source[]
}
const SourceMore = ({ clickSourceMore, moreSourceList }: SourceMoreProps) => {

    return (
        (<div onClick={clickSourceMore} className="bg-gray-500/10 transition-all duration-200 cursor-pointer mb-3 hover:bg-[#e8e8e3]  grid grid-rows-3 grid-cols-1 group basis-96 grow-1  items-stretch w-full relative h-[96px] p-3 gap-3 rounded-md">
            <div className="flex w-full flex-wrap gap-3 items-start  row-span-2">
                {
                    moreSourceList.map((source, index) => (<Avatar className="w-5 h-5" src={source.icon_url} key={index} />))
                }
            </div>
            <div className="row-span-1 content-end">View {moreSourceList.length} more</div>
        </div>)

    )
}

export default SourceMore
