import { Source } from "../../types/source"
import SourceCard from "./SourceCard"
import SourceMore from "./SourceMore"

type SourceListProps = {
    sourceList: Source[]
    clickSourceMore: () => void
}
const SourceList = ({ sourceList, clickSourceMore }: SourceListProps) => {
    return (
        <div className="grid md:grid-cols-4  gap-3  grid-cols-2">
            {
                sourceList.map((source, index) => (<SourceCard source={source} key={index} />))
            }
            <SourceMore clickSourceMore={clickSourceMore} />
        </div>
    )
}

export default SourceList
