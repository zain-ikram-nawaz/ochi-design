import React from "react";

export default function Footer() {
  return (
    <div className=" text-white h-screen md:grid md:grid-cols-2 ">
      <div className="flex flex-col justify-between mx-10">
        <div>
          <h1 className="font-semibold font-serif text-[6vw]">EYE- OPENING</h1>{" "}
        </div>
        <div className='w-[5vw] rotate-45 m-10 sm:w-[10vw]'>

<img src="/logo1.png" alt="" />
</div>

      </div>
      <div className="sm:mx-10">
        <div>
            <h1 className="font-semibold font-serif text-[4vw]">PRESENTATIONS</h1>
        </div>
      <div className="flex justify-between items-center md:h-[90vh] sm:h-[40vh]  font-serif mx-10 sm:text-xl sm:mt-[10vw] sm:mx-0" >
      <div>
            <ul>
                <li className="mb-4"><p>S;</p></li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Linkedin</li>
                <li>Github</li>
                </ul>
                <ul>
                    <li className="mt-6"><p>L;</p></li>
                    <li>P-425 Block "S" North nazimabd Karachi</li>
                    <li>Karachi,Sindh</li>
                </ul>
                <ul>
                    <li className="mt-6"><p>E;</p></li>
                    <li>Zainikram704@gmail.com</li>
                </ul>
        </div>
        <div> 
            <ul className="space-y-7">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
