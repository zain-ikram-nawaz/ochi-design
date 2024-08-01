import React,{useState,useRef} from 'react'
import { MdExpandMore } from "react-icons/md";
import Link from 'next/link';


export default function About() {
    const [open,setOpen]=useState(false)
    const zainRef = useRef()
  return (
    <div className='font-serif  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl ' data-scroll data-scroll-speed={0}>
<div className='py-[3vw] pb-[14vw] '>
    <h1 className='md:text-[3vw] sm:text-[5vw] text-[#212121]  mx-10 w-8/12 sm:w-10/12'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
</div>
<hr className='border-black border-1'/>
{/* about */}
<div className='md:grid grid-cols-3 pt-[3vw] pb-[20vw] mx-10 text-[#212121] text-center space-y-3'>
    <div>
        <h1 className='sm:text-3xl font-bold text-left'>Why you Hire me?</h1>
    </div>
    <div>
        <h1 className='sm:text-lg tracking-tight'>"With a keen eye for detail and a commitment to staying updated with the latest technologies, I strive to deliver websites that not only meet but exceed client expectations."</h1> <br />
        <h1 className=' sm:text-lg tracking-tight'>"I enjoy collaborating with clients and colleagues alike, bringing projects from concept to completion with a focus on efficiency and excellence.".</h1>
    </div>
    
    <div className='social-logo md:flex md:justify-center'>
        <ul className=' sm:mt-10 md:mt-0 leading-[3vw] sm:text-lg sm:leading-none sm:space-y-3'>
            <li>instagram</li>
            <li>facebook</li>
            <li>LinkedIn</li>
            <li>WhatsApp</li>
        </ul>
    </div>
</div>
<hr className='border-black border-1'/>
{/* <picture></picture> */}
<div className='md:grid md:grid-cols-2 pt-[5vw] pb-20 mx-10 '>
    <div className=''>
        <h1 className=' font-bold capitalize sm:text-3xl'>about me</h1>
        <MdExpandMore  className=' inline border-2  rounded-3xl bg-white sm:text-[5vw]' onClick={()=>{
            setOpen(!open) 
            if(zainRef.current){
                zainRef.current.style.color="white"
            }
        }}></MdExpandMore>
    {open ? <div className=' w-3/4 space-y-5  sm:text-lg sm:w-10/12 mb-4' ref={zainRef}>
    <p className='my-10'>Hello! I am passionate about web development and dedicated to crafting clean, user-centered experiences through effective front-end and back-end development strategies. With a strong foundation in HTML, CSS, JavaScript, and responsive design, I strive to create intuitive and dynamic user interfaces that enhance user engagement.</p>
  <div>
  <label htmlFor="">Name:</label>
  <span>Zain ikram</span>
  </div>
  <div>
  <label htmlFor="">Phone:</label>
  <span>03082821704</span>
  </div>
  <div>
  <label htmlFor="">Email:</label>
  <span>zainikram794@mail.com</span>
  </div>
  <div>
  <label htmlFor="">Github:</label>
  <span><Link href={"https://github.com/zain-ikram-nawaz"}>zain-ikram-nawaz</Link></span>
  </div>
    </div>:""}
    
    </div>
    <div>
<div className='md:h-[65vh] sm:h-[60vh]  rounded-md border-3  flex justify-center items-center bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] ' >
  
</div>
    </div>
</div>
    </div>
  )
}
