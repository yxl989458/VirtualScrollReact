import { Skeleton } from "@nextui-org/react";

export default function SourceListSkeleton() {
    return (
        <div className="grid md:grid-cols-4  gap-3  grid-cols-2 lg:grid-cols-1">
            {
                Array.from({ length: 4 }, (_, index) => <Skeleton key={index} className="rounded-lg">
                    <div className="h-24 rounded-lg bg-[#e8e8e3]"></div>
                </Skeleton>)
            }
        </div>
    )
}
