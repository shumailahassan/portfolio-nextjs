import React from "react";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navbar =() => {
return(
    <div className="bg-white z-50 sticky">
    <header className="text-black body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image 
        src={require("../../../public/pictures/pics/images.png")}
         alt="Portfolio" 
         width={100}
         height={100} 
         />
        <span className="text-purple-800 text-2xl">Port</span><span className="text-yellow-600 text-2xl">folio</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href={"/"} className="mr-5 text-red-600 hover:text-blue-700">Home</a>
        <a href={"#about"} className="mr-5 text-red-600 hover:text-blue-700">About</a>
        <a href={"#skills"} className="mr-5 text-red-600 hover:text-blue-700">Skills</a>
        <a href={"#Contact"} className="mr-5 text-red-600 hover:text-blue-700">Contact</a>
      </nav>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-teal-600 rounded text-base mt-4 md:mt-0">
        <a href="/cv/resume.pdf.pdf">
        Download CV 
        <FaCloudDownloadAlt className="text-2xl ml=2" />
        </a>
      </button>
    </div>
  </header>
  </div>
);
};

export default Navbar;