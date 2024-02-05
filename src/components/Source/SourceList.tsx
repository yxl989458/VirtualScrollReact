import { useState } from "react"
import { Source } from "../../types/source"
import SourceCard from "./SourceCard"
import SourceMore from "./SourceMore"
import { cloneDeep } from 'lodash-es'
type SourceListProps = {
    sourceList: Source[]
}
const SourceList = ({ sourceList }: SourceListProps) => {
    const [cacheSourceList, setCacheSourceList] = useState(cloneDeep(sourceList).slice(0, 3))
    const [isShowMore, setIsShowMore] = useState(false)
    const clickSourceMore = () => {
        setIsShowMore(true)
        setCacheSourceList([...cacheSourceList, ...cloneDeep(sourceList).slice(cacheSourceList.length, cacheSourceList.length + 3)])
    }
    return (
        <div className="grid md:grid-cols-4  gap-3  grid-cols-2">
            {
                cacheSourceList.map((source, index) => (<SourceCard source={source} key={index} />))
            }
            {
                sourceList.length > 4 && !isShowMore && <SourceMore moreSourceList={sourceList.slice(3, sourceList.length)}  clickSourceMore={clickSourceMore} />
            }
        </div>
    )
}

export default SourceList
