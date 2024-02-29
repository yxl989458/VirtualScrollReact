
import { Icon } from '@iconify/react';

type TitleBlockProps = {
    icon: string
    text: string
    loading?: boolean
}
const TitleBlock = ({ icon, text, loading }: TitleBlockProps) => {
    return (
        <div className='flex items-center gap-2 my-6'>
            <Icon icon={icon} className={loading ? 'animate-spin' : ''} color='#999' width={28} height={28} />
            <span className='font-display text-[#999]  md:text-xl text-lg  tracking-wide'>{text}</span>
        </div>
    )
}
export default TitleBlock
