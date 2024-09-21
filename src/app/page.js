'use client'
import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'


const page = () => {
  return (
    <div className='w-full h-full bg-[#F0F1FA]'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default page