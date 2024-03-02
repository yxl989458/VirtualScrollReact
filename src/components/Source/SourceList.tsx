import { useEffect, useState } from "react"
import { Source } from "../../types/source"
import SourceCard from "./SourceCard"
import SourceMore from "./SourceMore"
import { cloneDeep } from 'lodash-es'
type SourceListProps = {
    sourceList: Source[]
}
const SourceList = ({ sourceList }: SourceListProps) => {
    const [cacheSourceList, setCacheSourceList] = useState<Source[]>([])
    const [isShowMore, setIsShowMore] = useState(false)
    const clickSourceMore = () => {
        setIsShowMore(true)
        setCacheSourceList(sourceList)
    }
    useEffect(() => {
        setIsShowMore(false)
        setCacheSourceList(sourceList.slice(0, 3))
    }, [sourceList])
    return (
        <div className="grid lg:grid-cols-1  gap-3  grid-cols-2">
            {
                cloneDeep(cacheSourceList).map(source => (<SourceCard key={source.id} source={source} />))
            }
            {
                sourceList.length > 4 && !isShowMore && <SourceMore moreSourceList={sourceList.slice(3, sourceList.length)} clickSourceMore={clickSourceMore} />
            }
        </div>
    )
}

export default SourceList
