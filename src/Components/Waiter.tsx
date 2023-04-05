import { FiInfo } from 'react-icons/fi';
import { useAppContext } from '../AppContext';
import { useState } from 'react';

export default function Waiter() {
    const { dispatch } = useAppContext();
    const [isHidden, setIsHidden] = useState(false);
    const [hideOther, setHideOther] = useState(false)
    const [hideone, setHideOne] = useState(true)
    const [hidetwo, setHideTwo] = useState(true)

    function isStarting() {
        setHideOther(true)

        setTimeout(()=>{
            setHideOne(false)
        }, 1000)

        setTimeout(()=>{
            setHideTwo(false)
        }, 2000)

        setTimeout(() => {
            dispatch({
                type: 'setHasStarted',
            });
        setIsHidden(true);
        }, 3000);
    }

    function Circles(){
        return (
            <div className='flex gap-3'>
                <div className="bg-[#d5d5d5b9] rounded-full h-2 w-2"></div>
                <div className="bg-[#d5d5d5b9] rounded-full h-2 w-2"></div>
                <div className="bg-[#d5d5d5b9] rounded-full h-2 w-2"></div>
            </div>
        )
    }

    return (
        <div
        className={`ease-in transition-all duration-200 ${
            isHidden ? 'opacity-0 pointer-events-none' : ''
        }`}
        >
            <div
                onClick={isStarting}
                className="bg-primary mt-36 mx-56 lg:mx-64 min-h-[100px] rounded-box cursor-pointer p-6"
            >
                <Circles /> 
                <div className='flex items-center gap-10 mt-6'>
                    <span className='text-[#d5d5d5b9]'>$</span>
                    <p className='text-neutral-content'>yarn init Aydot</p>
                </div>
                {!hideone && 
                    <div className='flex items-center gap-10 mt-6'>
                        <span className='text-[#d5d5d5b9]'>$</span>
                        <p className='text-accent'>installing</p>
                    </div>
                }
                {!hidetwo && 
                    <div className='flex items-center gap-10 mt-6'>
                        <span className='text-[#d5d5d5b9]'>$</span>
                        <p className='text-success'>done!</p>
                    </div>
                }
            </div>
            <div className={`${hideOther ? 'hidden' : ''} flex items-center gap-2 mx-auto text-center mt-5 w-2/3 lg:w-1/2 bg-secondary rounded-box p-3`}>
                <FiInfo />
                <p>Click/Touch on yarn init to start installation</p>
            </div>
        </div>
    );
}
