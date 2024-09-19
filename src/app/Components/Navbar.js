import React, { useState } from 'react'
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/all'
import Link from 'next/link';

const Navbar = () => {
gsap.registerPlugin(MotionPathPlugin)

  const [menu,setMenu]=useState(false);

  const toggleMenu=()=>{
    setMenu(!menu)
  }
  
  const handleOnClick=()=>{
    if(!menu){
      gsap.
      to('.dot1',{
        motionPath:{
          path:[{x:0,y:-3},{x:4,y:-4}],
          autoRotate:false,
          alignOrigin:[0.5,0.5]
        }
      })
      gsap.
      to('.dot2',{
        motionPath:{
          path:[{x:0,y:3},{x:-3,y:4}],
          autoRotate:false,
          alignOrigin:[0.5,0.5]
        }
      })
    }
    else{
      gsap.
      to('.dot1',{
        motionPath:{
          path:[{x:-0.2,y:-2},{x:-0.3,y:-0.1}],
          autoRotate:false,
          alignOrigin:[0.5,0.5]
        }
      })
      gsap.
      to('.dot2',{
        motionPath:{
          path:[{x:0.2,y:1},{x:0.3,y:-0.1}],
          autoRotate:false,
          alignOrigin:[0.5,0.5]
        }
      })
    }
  }

  return (
    <div className='fixed flex z-[999] h-[8%] w-full justify-between font-semibold'>
      <div onClick={toggleMenu} className={`text-xl font-semibold p-4 z-[999] transition-colors duration-[2s] ${menu?"text-white":"text-black"}`}>
        LUSION
      </div>
      <div className='p-4 z-[999]'>
        <div onClick={toggleMenu} className='dots bg-[#e1e3ea] cursor-pointer w-8 h-8 space-x-[2px] rounded-full flex justify-center items-center'>
          <div onClick={handleOnClick} className='dot1 w-[5px] h-[5px] bg-black rounded-full'></div>
          <div onClick={handleOnClick} className='dot2 w-[5px] h-[5px] bg-black rounded-full'></div>
        </div>
      </div>
      <div onClick={toggleMenu} className={`fixed w-full h-screen transition-opacity duration-[2s] bg-blue-700 ease-in-out ${menu?' opacity-100':'opacity-0'}`}/>
      <div onClick={toggleMenu} className={`fixed w-full h-screen p-1 flex flex-col space-y-2 mt-16 px-3 ${menu?' opacity-100':'opacity-0'}`}>
        <div className={`content-div flex flex-col text-[1.3rem] bg-white rounded-xl p-5 space-y-2`}>
          <Link href={'#'}>HOME</Link>
          <Link href={'#'}>ABOUT US</Link>
          <Link href={'#'}>PROJECTS</Link>
          <Link href={'#'}>CONTACT</Link>
        </div>
        <div className={`subscribe-div bg-white p-5 text-3xl rounded-xl space-y-5 py-7 `}>
          <h1 className=' pr-28'>Subscribe to our newsletter</h1>
          <input className='bg-[#F0F1FA] rounded-xl w-[95%]'></input>
        </div>
        <div className='talking-div flex bg-white rounded-xl p-5 py-4'>
          <div className='text-[1.3rem]'>
            LET'S TALK
          </div>
          <div>

          </div>
        </div>
        <div className='labs-div flex bg-white rounded-xl p-5 py-4'>
          <div></div>
          <div className='text-[1.3rem]'>
            LABS
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar