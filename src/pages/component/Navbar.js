import Link from 'next/link'
import React,{useState,useRef} from 'react'
import { LuMenuSquare } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import Image from 'next/image';



export default function NavBar() {
  const [open,SetOPen]=useState(true)
  const link = ["Service","Work", "About", "Contact"]
  return (
 
<main>

  <div className='fixed z-[999] w-full flex justify-between text-white sm:bg-zinc-800 md:bg-zinc-900 px-4 py-4'>
    <div className='animate-ping'>
      <Image className='rotate-45 relative sm:w-10 left-8 sm:left-2' src={"/logo1.png"} width={50} height={180} />
    </div>
    <div className="link md:gap-10 md:mr-0 md:flex">
      {open ? (
        <LuMenuSquare className='inline sm:text-3xl rounded-3xl md:hidden overflow-hidden' onClick={() => SetOPen(!open)} />
      ) : (
        <MdOutlineCancel className='inline sm:text-3xl rounded-3xl md:hidden overflow-hidden' onClick={() => SetOPen(!open)} />
      )}

      {link.map((item, index) => (
        <div className='leading-[8vw] sm:-ml-[40vw] md:-ml-0' key={index}>
          <Link href="#" className={`${open ? 'md:text-xl hover:text-zinc-300 transition duration-150 ease-out sm:hidden md:block text-lg capitalize font-light' : 'md:block hover:text-zinc-300 transition duration-150 ease-out text-lg capitalize font-light'} ${index === 3 && 'md:ml-32'}`}>
            {item}
          </Link>
        </div>
      ))}
    </div>
  </div>
</main>

  )
}
