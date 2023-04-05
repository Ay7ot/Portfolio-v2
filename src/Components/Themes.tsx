import React, { useEffect, useRef } from 'react'
import { useName } from '../useName'
import { useAppContext } from '../AppContext';

export default function Themes() {

    const {dispatch, themeModal} = useAppContext()
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            event.stopPropagation()
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                dispatch({
                    type: 'setNoModals'
                })
            }
        }

        window.addEventListener("click", handleClickOutside);
        return () => {
        window.removeEventListener("click", handleClickOutside);
        };
    }, [modalRef, themeModal]);

    const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
   
    return (
        <div ref={modalRef} className='mt-16 shadow-2xl w-52 overflow-y-scroll no-scrollbar rounded-box bg-base-200 text-base-content max-h-[650px] md:max-h-[550px]'>
            <ul className='p-4 flex flex-col'>
                {themes.map(theme=>{
                    return (
                        <div key={theme} className='cursor-pointer'>
                            {useName(theme)}
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}