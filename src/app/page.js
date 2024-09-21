"use client"
import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Lenis from 'lenis'

useEffect(()=>{
  const lenis=new Lenis({
    
    duration:2,
    direction:'vertical',
    smooth: true,
    easing:(t)=>Math.min(1,1.001-Math.pow(2,-10*t)),
    gestureDirection:'vertical',
    smoothTouch:false,
    scrub:10,
  })
  function raf(time){
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  return()=>{
    lenis.destroy()
  }
})

raf()

const page = () => {
  return (
    <div className='w-full h-full bg-[#F0F1FA]'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default page