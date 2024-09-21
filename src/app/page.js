"use client"
import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Lenis from 'lenis'

const page = () => {
  const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

raf()

  return (
    <div className='w-full h-full bg-[#F0F1FA]'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default page