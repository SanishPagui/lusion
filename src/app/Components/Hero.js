import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen border-t-2'>
        <div className='mt-8 text-[1.65rem] p-4 leading-7'>
          <p>We help brands create digital experiences that connect with their audiance</p>
        </div>
        <div className='p-4 h-[73%]'>
          <div className='w-full h-full'></div>
        </div>
        <div className='w-full h-fit flex justify-between items-center p-1 px-3'>
          <div className=' flex h-full'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </div>  
          <div className='text-black w-full text-sm font-semibold flex items-center justify-center'>
            SCROLL TO EXPLORE
          </div>
          <div className=' flex '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </div> 
        </div>
    </div>
  )
}

export default Hero

