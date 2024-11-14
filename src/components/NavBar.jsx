import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color,setColor] = useState('#0796EF')
  const [nav, setNav] = useState('home')

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#121618] text-white">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="md:hidden">
          <img alt="Logo" src={logo} className="size-14 block md:hidden" style={{
              position: "relative",
              top:'44px',
              left: "141px",
              zIndex: "999",
            }}/>
        </div>

        <div className="relative ml-3">
          <img
            alt="Logo"
            src={logo}
            className="size-20 hidden md:block"
            style={{
              position: "absolute",
              top: "50px",
              right: "130px",
              zIndex: "2",
            }}
          />

          <div className="flex flex-row pt-10">
            <h4 className="text-[#0796EF] text-3xl font-normal hidden md:block">
              DEEP
            </h4>
            <h4 className="text-3xl hidden md:block font-normal ml-2 text-white">
              NET
            </h4>
          </div>
          <h4
            style={{
              position: "absolute",
              top: "80px",
              right: "50px",
              zIndex: "33",
            }}
            className="text-[35px] text-[#857878] md:block ml-2 font-medium hidden md:block"
          >
            SOFT
          </h4>
        </div>

        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <nav className="hidden md:flex space-x-8 ml-auto pt-12">
            <a
              className="text-[16px] font-oswald font-medium hover:text-[#0796EF] cursor-pointer"
              onClick={() => setNav('home')}
              style={{color:nav === 'home' && `${color}`}}
            >
              HOME
            </a>
            <a
              className="text-[16px] font-oswald font-medium hover:text-[#0796EF] cursor-pointer"
              onClick={() => setNav('menu')}
              style={{color:nav === 'menu' && `${color}`}}
            >
              MENU
            </a>
            <a
              className="text-[16px] font-oswald font-medium hover:text-[#0796EF] cursor-pointer"
              onClick={() => setNav('reservation')}
              style={{color:nav === 'reservation' && `${color}`}}
            >
              MAKE A RESERVATION
            </a>
            <a
              className="text-[16px] font-oswald font-medium hover:text-[#0796EF] cursor-pointer"
              onClick={() => setNav('contact')}
              style={{color:nav === 'contact' && `${color}`}}
            >
              CONTACT US
            </a>
          </nav>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black text-center p-4">
          <a
            href="/"
            className="block py-2 text-[16px] font-oswald font-medium hover:text-[#0796EF]"
          >
            HOME
          </a>
          <a
            href="/menu"
            className="block py-2 text-[16px] font-oswald font-medium hover:text-[#0796EF]"
          >
            MENU
          </a>
          <a
            href="/reservation"
            className="block py-2 text-[16px] font-oswald font-medium hover:text-[#0796EF]"
          >
            MAKE A RESERVATION
          </a>
          <a
            href="/contact"
            className="block py-2 text-[16px] font-oswald font-medium hover:text-[#0796EF]"
          >
            CONTACT US
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
