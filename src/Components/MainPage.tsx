import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Projects from './Projects'
import Footer from './Footer'
import BottomNav from './BottomNav'
import TechStack from './TechStack'
import { useAppContext } from '../AppContext'
import Contact from './Contact'

export default function MainPage() {
    const { theme } = useAppContext()
    
    return (
        <div data-theme={theme} className='bg-base-300 relative min-h-screen'>
        <Navbar />
        <Header />
        <Projects />
        <TechStack />
        <Contact />
        <BottomNav />
        <Footer />
        </div>
    )
}
