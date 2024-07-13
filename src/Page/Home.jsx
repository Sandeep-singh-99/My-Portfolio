import React from 'react'
import Hero from './Hero'
import Footer from '../components/Footer'
import Contact from './Contact'

function Home() {
  return (
    <>
    <div className='bg-slate-950 h-screem lg:px-32 lg:pt-32 sm:p-10 '>
        <Hero/>
        <Contact/>
        <Footer/>
    </div>
    </>
  )
}

export default Home