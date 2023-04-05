import {FaCaretDown, FaThemeisle} from 'react-icons/fa'
import {IoMdHeartEmpty} from 'react-icons/io'
import {RxCaretDown} from 'react-icons/rx'
import {SiCodeproject} from 'react-icons/si'
import {HiCircleStack} from 'react-icons/hi2'

export default function Navbar() {
  return (
    <div className='sticky top-0 mb-2 shadow-lg text-neutral-content bg-neutral-focus rounded-box flex justify-between items-center p-4 font-semibold md:px-10'>
      <p className='text-[1.5rem]'>Aydot</p>
      <nav className='hidden md:flex'>
        <ul className='flex gap-6'>
            <a href='' className='flex items-center gap-2 cursor-pointer hover:rounded-lg hover:bg-accent-content p-2'>
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
            <button className='flex items-center gap-2 cursor-pointer hover:rounded-lg hover:bg-accent-content p-2'>
                <i><FaThemeisle /></i>
                <p>Change Theme</p>
                <i><RxCaretDown /></i>
            </button>
        </ul>
      </nav>
    </div>
  )
}
