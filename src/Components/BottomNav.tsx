import {FaThemeisle} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'
import Themes from './Themes'
import { useAppContext } from '../AppContext'

export default function BottomNav() {

    const {themeModal, dispatch} = useAppContext()

    function setThemeModal(){
        dispatch({
            type: 'setThemeModalTrue',
        })
    }
    
    return (
       <>
        <div className='fixed z-[99999999] bottom-0 left-0 rounded-box flex items-center gap-10 bg-base-200 px-10 py-4'>
            <div className='text-[1.5rem] btn btn-primary'>
                <GoThreeBars />
            </div>
            <div onClick={(e)=>{e.stopPropagation(); setThemeModal()}} className='flex items-center gap-3 text-primary text-[1.1rem] btn btn-ghost'>
                <FaThemeisle />
                <p className='font-semibold'>Change Theme</p>
            </div>
            {themeModal && <div className='transition-all ease-linear delay-150 absolute bottom-20 left-[150px]'><Themes /></div>}
        </div>
       </>
    )
}
