
import React,{useEffect,useState} from 'react'

export default function Eyes() {
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

    <div className='md:h-screen  overflow-hidden'>
        <div data-scroll data-scroll-speed={-6} className='w-[100vw] h-screen  flex justify-center items-center bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
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

       
        <div style={{transform:` rotate(${rotate}deg)`}} className=' line w-[100vw] h-10 '>
       <div className='bg-white  sm:w-[3vw] sm:h-[3vw]   rounded-full'></div>

        </div>
        </div>
       </div>
       
       </div>
       </div>
    </div>
   
  )
}
