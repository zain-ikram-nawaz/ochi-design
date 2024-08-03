import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";



export default function Landing() {
  return (
    <div  className='font-serif md:h-[75vh] sm:h-[70vh]  bg-zinc-900 text-white pt-1 md:mt-40' data-scroll data-scroll-speed={-5}>
        <div  className='textSatructure font-serif sm:mt-28 px-10'>
            {["we create","eye-opening","presentations"].map((item,index)=>{
                return  <div className='masker'>
                  <div className='w-fit flex items-center overflow-hidden '>
                    {index === 1 && (<motion.div initial={{width:0}} animate={{width:"7vw"}} transition={{ease:[0.12, 0, 0.39, 0], duration:1}} className='  w-[7vw] h-[4.3vw] relative ml-[.3vw] '> 
                      <img src="/logo.png" alt="" />
                    </motion.div>)}
                    <h1 className='font-["Founder Grotest"] text-[6vw] uppercase tracking-tight leading-[5.5vw] font-semibold'>{item}</h1>
                  </div>
             
            </div>
            })}
          
        </div>
        <div className='border-b-2 sm:mt-20 md:mt-40 '></div>
       <div className='flex justify-between md:mt-10 sm:mx-5 sm:mt-4 '>
       {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
            return <div>
                 <p className='tracking-tight  md:text-lg sm:text-sm '>
                {item}
            </p>
            </div>
    
        })}
        <div className='tracking-tight text-black md:mt-0'>

        <button className=' border-2 bg-white uppercase font-light  md:px-[2vw] md:py-[.2vw] rounded-3xl md:text-[1.2vw] sm:text-lg sm:p-0'>Download</button> <MdArrowOutward className='sm:hidden inline border-2  text-[2vw] rounded-3xl bg-white '></MdArrowOutward>
        </div>
       </div>
    </div>
  )
}
