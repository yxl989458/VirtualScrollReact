
import { Icon } from '@iconify/react';

type TitleBlockProps = {
    icon: string
    text: string
}
const TitleBlock = ({ icon, text }: TitleBlockProps) => {
    return (
        <>
            <div className='flex items-center gap-2 my-6'>
                <Icon icon={icon} className='text-2xl font-bold' />
                <span className='font-display  text-2xl letter tracking-wide'>{text}</span>
            </div>
        </>
    )
}
export default TitleBlock
