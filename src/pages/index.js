import { useRef,useEffect } from "react";
import NavBar from "./component/Navbar";
import About from "./component/about";
import Eyes from "./component/eys";
import Landing from "./component/landing";
import Marquee from "./component/marquee";
import Project from "./component/project";
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Banner from "./component/banner";
import Footer from "./component/footer";
export default function Home() {
  const { scroll } = useLocomotiveScroll()
  const containerRef = useRef(null)

  return (
<LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
>
  <main className=" w-[100vw] overflow-hidden min-h-screen bg-zinc-900" data-scroll-container ref={containerRef}> 
   <NavBar/>
   <Landing/>
   <Marquee/>
   <About/>
   <Eyes/>
   <Project/>
   <Banner/>
   <Footer/>
   </main>
</LocomotiveScrollProvider>

  );
}
