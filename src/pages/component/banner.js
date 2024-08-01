import React,{useEffect,useState} from 'react'
import { IoIosSend } from "react-icons/io";
import { FaDownload } from "react-icons/fa";

export default function Banner() {
    const [rotate,setRotate]=useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;
            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);

            setRotate(angle-180)

        })
    },[])
  
    return (
<main>
        <div className='overflow-hidden'>
        
            <div data-scroll data-scroll-speed={-6} className='w-[100vw] md:h-[80vh]  sm:h-[30vh] relative  flex justify-center items-center'>
            
            <div className=' flex justify-around'> 
       <div className='bg-white sm:w-[16vw] sm:h-[16vw]   rounded-full flex justify-center items-center'>
        <div className='bg-black sm:w-[12vw] sm:h-[12vw]   rounded-full flex justify-center items-center '>
        <div style={{transform:` rotate(${rotate}deg)`}} className='line relative line w-[100vw] h-10'>
       <div className='bg-white sm:w-[3vw] sm:h-[3vw] rounded-full'></div>
        </div>
        </div>
       </div>
       <div className='bg-white sm:w-[16vw] sm:h-[16vw]  rounded-full flex justify-center items-center'>
        <div className='bg-black  sm:w-[12vw] sm:h-[12vw]   rounded-full flex justify-center items-center'>

       
        <div style={{transform:` rotate(${rotate}deg)`}} className='line relative line w-[100vw] h-10'>
       <div className='bg-white sm:w-[3vw] sm:h-[3vw] rounded-full'></div>
        </div>
        </div>
       </div>
       
       </div>
        
           </div>
           
        </div>
        <div className='flex justify-center relative -top-12'>

        <div className='font-serif tracking-tight text-black z-[10]'>
<button className='border-2 bg-zinc-900 text-white uppercase font-light  px-[2vw] py-[.2vw] rounded-3xl md:text-[1.2vw]  sm:text-[3vw]'>Download</button> <FaDownload className=' inline border-2  text-[2vw] rounded-3xl bg-white'></FaDownload> <p className='text-white text-center my-2 font-semibold md:text-[1.2vw] sm:my-0 sm:text-lg'>OR</p>
<button className='border-2 bg-zinc-900 text-white uppercase font-light  px-[2vw] py-[.2vw] rounded-3xl md:text-[1.2vw] sm:text-[3vw]'>Downlaod</button> <IoIosSend className=' inline border-2  text-[2vw] rounded-3xl bg-white'></IoIosSend>
</div>
        </div>
        </main>
      )
}
