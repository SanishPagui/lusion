import React, { useState } from 'react'
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/all'

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
    <div className='fixed flex p-4 z-[999] h-[8%] w-full justify-between'>
      <div className='text-xl font-semibold'>
        LUSION
      </div>
      <div onClick={toggleMenu} className='dots bg-[#e1e3ea] cursor-pointer w-8 h-8 space-x-[2px] rounded-full flex justify-center items-center'>
        <div onClick={handleOnClick} className='dot1 w-[5px] h-[5px] bg-black rounded-full'></div>
        <div onClick={handleOnClick} className='dot2 w-[5px] h-[5px] bg-black rounded-full'></div>
      </div>
      <div className='fixed'>

      </div>
    </div>
  )
}

export default Navbar