import { Icon } from "@iconify/react/dist/iconify.js"
import { Avatar } from "@nextui-org/react"

const Footer = () => {
    return (
        <><footer className="absolute bottom-20 border-t-2 py-5 w-full">
            <div className="flex gap-4 justify-center items-center">
                <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <span className="text-xl font-bold text-[#828282]">西安大胡子</span>
                <Icon icon="ion:ios-settings" width={32} height={32} color="#CCCCCC" />
            </div>
        </footer></>
    )
}

export default Footer
