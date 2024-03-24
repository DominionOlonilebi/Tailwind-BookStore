import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbars = () => {
  const [navs, setNavs] = useState(false);

  const handleNavs = () => {
    setNavs(!navs);
  };

  return (
    <div className="text-white flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4">
      <h2 className="w-full text-3xl font-bold text-[#27b692]">G-BOOKS</h2>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Store</li>
        <li className="p-4">Contact</li>
        <li className="p-4">Others</li>
      </ul>
      <div onClick={handleNavs} className="block md:hidden">
        {navs ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          navs
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-teal-950 bg-[#03191a] ease-in-out duration-700"
            : "fixed left-[-100%]"
        }
      >
        <h2 className="w-full m-4 text-3xl font-bold text-[#27b692]">
          G-BOOKS
        </h2>
        <ul className="pt-3 uppercase">
          <li className="p-4 border-b border-teal-950">Home</li>
          <li className="p-4 border-b border-teal-950">Company</li>
          <li className="p-4 border-b border-teal-950">Store</li>
          <li className="p-4 border-b border-teal-950">Contact</li>
          <li className="p-4 border-b border-teal-950">Others</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbars;
