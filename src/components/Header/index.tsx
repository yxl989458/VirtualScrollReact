import { Icon } from "@iconify/react/dist/iconify.js"
import { useAppState } from "@stores/modules/app"
import Logo from '@/assets/logo.svg'
const Header = () => {
    const { setSiderCollapsed, siderCollapsed } = useAppState()
    function switchSiderCollapsed() {
        setSiderCollapsed(!siderCollapsed)
    }
    return (
        <>
            <header
                className="sticky transition-shadow block h-[50px] sm:block  xl:hidden  2xl:hidden  md:block lg:hidden -top-0 left-0 right-0 z-30 shadow-sm  dark:border-neutral-800 bg-white/80 dark:bg-black/20 backdrop-blur"
            >
                <div className="flex h-full px-2 items-center justify-between ">
                    <button onClick={switchSiderCollapsed}>
                        <Icon icon={"material-symbols:menu"} width={28} height={28} />
                    </button>
                    <div className="flex items-center gap-1">
                        <img className="w-6 h-7" src={Logo} alt="" />

                        <span>AskAsk AI</span>
                    </div>
                    <Icon icon={"ph:twitch-logo-duotone"} width={28} height={28} />
                </div>
            </header >
        </>
    )
}

export default Header
