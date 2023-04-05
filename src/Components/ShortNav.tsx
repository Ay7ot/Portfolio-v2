import React, { useEffect, useRef } from 'react'
import { useAppContext } from '../AppContext';
import { IoMdHeartEmpty } from 'react-icons/io';
import { SiCodeproject } from 'react-icons/si';
import { HiCircleStack } from 'react-icons/hi2';
import { TiContacts } from 'react-icons/ti';

export default function ShortNav() {

    const {dispatch, shortNav} = useAppContext()
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
    }, [modalRef, shortNav]);

   
    return (
        <div ref={modalRef} className='shadow-2xl w-52 rounded-box bg-base-200 text-base-content'>
            <ul className='p-4 flex flex-col'>
                <a href='#header' className='flex items-center gap-2 cursor-pointer hover:rounded-lg hover:bg-accent-content p-2'>
                    <i><IoMdHeartEmpty /></i>
                    <p>Home</p>
                </a>
                <a href='#projects' className='flex items-center gap-2 cursor-pointer hover:rounded-lg hover:bg-accent-content p-2'>
                    <i><SiCodeproject /></i>
                    <p>Projects</p>
                </a>
                <a href='#techstack' className='flex items-center gap-2 cursor-pointer hover:rounded-lg hover:bg-accent-content p-2'>
                    <i><HiCircleStack /></i>
                    <p>TechStack</p>
                </a>
                <a href='#contact' className='flex items-center gap-2 cursor-pointer hover:rounded-lg hover:bg-accent-content p-2'>
                    <i><TiContacts /></i>
                    <p>Contact</p>
                </a>
            </ul>
        </div>
    )
}