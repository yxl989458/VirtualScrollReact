import Logo from '@/assets/logo.svg'
import { Icon } from "@iconify/react/dist/iconify.js"
import List from '../components/List'
import Footer from '../components/Footer'

const PCSider = () => {
    return (
        <div className="fixed transition hidden lg:block  [z-index:99] left-0 top-0  bottom-0 ">
            <aside className=" left-0 px-4 flex flex-col  py-5 top-0 bottom-0 w-[300px] [z-index:100] h-full bg-[#f5f5f5]">
                <div className="flex items-center justify-center gap-1">
                    <img className="w-8 h-10" src={Logo} />
                    <span className="text-[#828282] font-bold text-2xl">AskAsk AI</span>
                </div>
                <Icon icon="mdi:message-plus" width={34} height={34} color="#828282" className="my-6 mx-auto" />
                <section><List /></section>
            </aside>
            <Footer />
        </div>
    )
}

export default PCSider
