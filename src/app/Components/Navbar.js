import React, { useEffect, useState } from 'react'
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
      gsap.from(['.content-div'], {
        y:50,
        rotation: 5,
        opacity: 0, 
        duration: 1.5, 
        ease: 'power3.out',
        motionPath:{
          path:[{y:50}],
          alignOrigin:[0.5,0.5],
          duration:1,
        }
      });
      gsap.from(['.subscribe-div','.talking-div' ,'.labs-div'], {
        y: 50,                
        opacity: 0,           
        rotation: -5, 
        duration: 1.5,        
        ease: 'power3.out',   
        motionPath:{
          path:[{y:50}],
          alignOrigin:[0.5,0.5],
          duration:1,
        }
      });
      gsap.to('.fixed.bg-blue-700', {
        opacity: 100,
        duration: 0.5,
      });
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
      gsap.from(['.content-div'], {
        y:0,
        rotation: 5,
        opacity: 0, 
        duration: 10, 
        ease: 'power3.out',
        motionPath:{
          path:[{ y: 0 }, { y: 100 }],
          alignOrigin:[0.5,0.5],
          autoRotate:false,
          duration:20,
        }
      });
      gsap.from(['.subscribe-div','.talking-div' ,'.labs-div'], {  
        y:0,            
        opacity:0,           
        rotation: -5,          
        duration: 10,        
        ease: 'power3.out',   
        motionPath:{
          path:[{ y: 0 }, { y: 100 }],
          alignOrigin:[0.5,0.5],
          autoRotate:false,
          duration:20,
        }
      });
      gsap.to('.fixed.bg-blue-700', {
        opacity: 0,
        duration: 0.5,
      });
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
      <div onClick={toggleMenu} className={`fixed.bg-blue-700 fixed w-full h-screen transition-opacity duration-[1s] bg-[#0016EC] ease-in-out ${menu?' opacity-100':'opacity-0 hidden'}`}/>
      <div className={`fixed w-full h-screen p-1 flex flex-col space-y-2 mt-16 px-3 transition-opacity duration-[.4s] ${menu?' opacity-100':'opacity-0 hidden'}`}>
        <div className={`content-div flex flex-col text-[1.3rem] bg-white rounded-xl p-5 space-y-2`}>
          <Link href={'#'}>HOME</Link>
          <Link href={'#'}>ABOUT US</Link>
          <Link href={'#'}>PROJECTS</Link>
          <Link href={'#'}>CONTACT</Link>
        </div>
        <div className={`subscribe-div bg-white p-5 text-3xl rounded-xl space-y-5 py-7 `}>
          <h1 className=' pr-28'>Subscribe to our newsletter</h1>
          <form className='flex items-center'>
            <input className='bg-[#F0F1FA] rounded-xl w-[95%] text-sm p-4 text-slate-300' type="text"  placeholder={"Your email"}></input>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#000" fill-rule="evenodd" d="M4.11 12.75a.75.75 0 0 1 0-1.5h13.978l-5.036-5.036a.75.75 0 1 1 1.06-1.06l6.316 6.315.53.53-.53.53-6.316 6.317a.75.75 0 0 1-1.06-1.061l5.035-5.035H4.109Z" clip-rule="evenodd"></path></svg>
          </form>
        </div>
        <div className='talking-div flex bg-white rounded-xl p-5 py-4'>
          <div className='text-[1.3rem]'>
            LET'S TALK
          </div>
          <div>

          </div>
        </div>
        <div className='labs-div flex bg-black text-white rounded-xl p-5 py-4 items-enter'>
          <div className='basis-10'>
          <svg id="header-menu-labs-lucy-svg"  className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" width="28" height="38" fill="none" viewBox="0 0 28 38"><path stroke="#fff" stroke-width="5" d="M20.128 29.65C18.584 31.217 16.532 32 13.972 32c-2.56 0-4.612-.783-6.156-2.35C6.272 28.05 5.5 26 5.5 23.5c0-2.5.772-4.533 2.316-6.1 1.544-1.6 3.596-2.4 6.156-2.4 2.56 0 4.612.8 6.156 2.4C21.71 18.967 22.5 21 22.5 23.5c0 2.5-.79 4.55-2.372 6.15Z"></path><path fill="#fff" d="M23.5 4.25a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0ZM11 4.25a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0Z"></path></svg>
          </div>
          <div className='text-[1.25rem] basis-60'>
            LABS
          </div>
          <div className=''>
          <svg id="header-menu-labs-arrow" className='w-5 h-8' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 20 20 4m0 0v14.096M20 4H5.904"></path></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar