
import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const Footer = () => {
    return(
        <div className='bg-blue-100'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image 
        src={require("../../../public/pictures/pics/images.png")}
         alt="Shumaila" 
         width={100}
         height={100} 
         className="w-[40px]" 
         />
      <span className="ml-3 text-xl">Shumaila</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2020 Shumaila 
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      <Link
      target='_blank'
      href={"https://www.linkedin.com/in/shumaila-hassan-26406a2b5/"}
      className= "text-gray-500">
      <FaLinkedin className='text-4xl hover:text-[#0A66C2]'/>
      </Link>
    </span>

    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      <Link
      target='_blank'
      href={"https://github.com/shumailahassan?tab=repositories"}
      className= "text-gray-500">
      <FaGithub className='text-4xl hover:text-[#0A66C2]'/>
      </Link>
    </span>

    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      <Link
      target='_blank'
      href={"https://vercel.com/shumailahassans-projects"}
      className= "text-gray-500">
      <IoLogoVercel className='text-4xl hover:text-[#0A66C2]'/>
      </Link>
    </span>
  </div>
</footer>
        </div>
    )
}

export default Footer;