import {FaThemeisle} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'

export default function BottomNav() {
    return (
        <div className='fixed bottom-0 left-0 rounded-box flex items-center gap-10 bg-base-200 px-10 py-4'>
            <div className='text-[1.5rem] btn btn-primary'>
                <GoThreeBars />
            </div>
            <div className='flex items-center gap-3 text-primary text-[1.1rem] btn btn-ghost'>
                <FaThemeisle />
                <p className='font-semibold'>Change Theme</p>
            </div>
        </div>
    )
}
