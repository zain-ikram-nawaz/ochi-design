
import React from 'react'

export default function Marquee() {

  return (
    <div data-scroll data-scroll-speed={0}   className='py-[4.7vw]  bg-[#004D43] rounded-tl-3xl rounded-tr-3xl text-white'>
        <div className='border-y-2 border-zind-300 text-[19vw]  flex'>
<marquee behavior="right" scrollamount="30" className="font-serif  leading-none uppercase font-semibold" >the web developer </marquee>

        </div>
    </div>
  )
}
