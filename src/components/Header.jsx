import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  return <div className="py-1 px-7 flex justify-between items-center fixed top-0 z-50 w-full border-b-[0.3px] border-[#babaff]">
    <div className="flex lg:gap-14 gap-4 items-center ">
        <img src="/images/logo.png" alt="logo" className="md:w-16 w-12" />

        <div className="hidden md:flex gap-5 items-center">
            <button className="h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">PLAY NOW</button>
            <button className="h-8 px-6 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">PLAY NOW</button>
        </div>
    </div>

    <nav>
        <a href="#"><FontAwesomeIcon icon={faUser} /> Avtare</a>
    </nav>
  </div>;
};
 
export default Header;
