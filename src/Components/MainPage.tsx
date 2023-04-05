import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Projects from './Projects'
import Footer from './Footer'
import BottomNav from './BottomNav'
import TechStack from './TechStack'

export default function MainPage() {
  return (
    <div className='bg-base-300 min-h-screen'>
      <Navbar />
      <Header />
      <Projects />
      <TechStack />
      <BottomNav />
      <Footer />
    </div>
  )
}
