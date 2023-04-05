import {IoMdHeartEmpty} from 'react-icons/io'
import {SiCodeproject} from 'react-icons/si'
import {HiCircleStack} from 'react-icons/hi2'
import {TiContacts} from 'react-icons/ti'

export default function Navbar() {

    return (
        <div className='sticky top-0 z-[999999] mb-2 shadow-lg text-neutral-content bg-neutral-focus rounded-b-box flex justify-between items-center p-4 font-semibold md:px-10'>
            <p className='text-[1.5rem]'>Aydot</p>
            <nav className='hidden md:flex'>
                <ul className='flex gap-6 relative'>
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
            </nav>
        </div>
    )
}
