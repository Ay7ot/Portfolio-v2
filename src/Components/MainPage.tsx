import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Projects from './Projects'
import Footer from './Footer'
import BottomNav from './BottomNav'
import TechStack from './TechStack'
import { useState, useEffect } from 'react';
import { useAppContext } from '../AppContext'
import Contact from './Contact'
import useWindowDimensions from '../windowDimensions'
import Waiter from './Waiter'

export default function MainPage() {
    const { theme, hasStarted } = useAppContext()
    const {width} = useWindowDimensions()
    
    const [isVisible, setIsVisible] = useState(false);
    const [showMain, setShowMain] = useState(false)

    useEffect(() => {
        setIsVisible(true);
    }, [hasStarted]);

    useEffect(()=>{
        setTimeout(()=>{
            setShowMain(true)
        },5000)
    },[hasStarted])
    
    return (
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <div data-theme={theme} className='bg-base-300 relative min-h-screen'>
            <Navbar />
            {hasStarted ? 
            <div className={`fade-in ${showMain ? 'visible' : 'invisible'}`}>
                <Header />
                <Projects />
                <TechStack />
                <Contact />
                <Footer />
            </div>: 
            <Waiter />
            }
            <BottomNav />
            </div>
        </div>
    )
}
