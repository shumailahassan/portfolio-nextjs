import React from "react";
import Image from "next/image";
import Link from 'next/link';
import Navbar from "./navbar";


const Hero = () => {
    return(
      
            <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font md:text-4xl-bold text-3xl mb-4 font-large text-gray-900">
      <span className="text-orange-600 text-xl">My</span> <span className="text-xl">name is</span><br></br><span className="font-bold">Shumaila Hassan</span>
        <br className="hidden lg:inline-block" />
       <span className="text-xl">and I'm a</span> <span className="text-orange-600 font-medium">Frontend Developer</span>
      </h1>
      <p className="mb-8 leading-relaxed">
        This is my official website to show all my work and details experience of front-end developer
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Contact me
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 ">
      <Image
        className="object-cover rounded-full "
        alt="hero"
        src={require('../../../public/pictures/pics/Untitled design.png')}
          width={300}
          height={300}
      />
    </div>
  </div>
</section>

    )
}

export default Hero;