"use client"
import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Lenis from 'lenis'

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

raf()

const page = () => {
  return (
    <div className='w-full h-full bg-[#F0F1FA]'>
      <Navbar/>
      <Hero/>
      <div className='w-full h-full bg-black '>

      </div>
    </div>
  )
}

export default page