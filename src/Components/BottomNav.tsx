import {FaThemeisle} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'
import Themes from './Themes'
import { useAppContext } from '../AppContext'
import ShortNav from './ShortNav'

export default function BottomNav() {

    const {themeModal, dispatch, shortNav} = useAppContext()

    function setThemeModal(){
        dispatch({
            type: 'setNoModals'
        })
        if(themeModal){
            dispatch({
                type: 'setThemeModalFalse',
            }) 
        }else {
            dispatch({
                type: 'setThemeModalTrue',
            })
        }
    }

    function setShortNav(){
        dispatch({
            type: 'setNoModals'
        })
        if(shortNav){
            dispatch({
                type: 'setShortNavFalse'
            })
        }else {
            dispatch({
                type: 'setShortNavTrue'
            })
        }
    }

    console.log(shortNav)

    return (
       <>
        <div className='fixed z-[99999999] bottom-0 left-0 rounded-box flex items-center gap-10 bg-base-200 px-10 py-4'>
            <div onClick={(e)=>{e.stopPropagation(); setShortNav();}} className='text-[1.5rem] btn btn-primary'>
                <GoThreeBars />
            </div>
            <div onClick={(e)=>{e.stopPropagation(); setThemeModal()}} className='flex items-center gap-3 text-primary text-[1.1rem] btn btn-ghost'>
                <FaThemeisle />
                <p className='font-semibold'>Change Theme</p>
            </div>
            {themeModal && <div className='transition-all ease-linear delay-150 absolute bottom-20 left-[150px]'><Themes /></div>}
            {shortNav && <div className='transition-all ease-linear delay-150 absolute bottom-20 left-0'><ShortNav /></div>}
        </div>
       </>
    )
}
