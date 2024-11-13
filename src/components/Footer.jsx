import { MdOutlineMailOutline } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import logo from '../assets/logo.png';
const Footer = () => {
  

  return (
    <>
    <div className='bg-black pt-5 flex flex-col md:flex-row justify-center items-center'>
      <div className='flex flex-col md:flex-row m-4 md:m-10 gap-3'>
  
        {/* CONNECT WITH US Section */}
        <div className='border border-gray-100 flex flex-col justify-center items-center rounded-xl px-8 md:px-12 py-2 w-full md:w-auto'>
          <h2 className='text-blue-600 font-bold text-xs'>CONNECT WITH US</h2>
          <div className='mt-2 flex gap-3'>
            <GiRotaryPhone color='yellow' className='mt-0.5'/>
            <p className='text-gray-400 text-sm'>+91 9567843340</p>
          </div>
          <div className='mb-2 flex gap-3'>
            <MdOutlineMailOutline color='yellow' className='mt-0.5'/>
            <p className='text-gray-400 text-sm'>info@deepnetsoft.com</p>
          </div>
        </div>
  
        {/* DEEP NET SOFT Section with logo inside the border */}
        <div className='border border-gray-100 flex flex-col justify-center items-center rounded-xl px-8 md:px-12 py-4 w-full md:w-auto'>
          {/* Logo and Company Name */}
          <div className='flex flex-col items-center'>
            <img  style={{marginTop:"-40px"}} src={logo} alt="Company Logo" width="50" height="40" className=' mb-4'/>
            <h1 className='text-white font-sans font-medium text-xl md:text-2xl'>
              <span className='text-blue-600'>DEEP</span> NET SOFT
            </h1>
          </div>
          <div className='flex gap-3 mt-2'>
            <LuFacebook className='text-sm' color='gray'/>
            <FiTwitter className='text-sm' color='gray'/>
            <AiOutlineYoutube className='text-sm' color='gray'/>
            <FaInstagram className='text-sm' color='gray'/>
          </div>
        </div>
  
        {/* FIND US Section */}
        <div className='border border-gray-100 flex flex-col justify-center items-center rounded-xl px-8 md:px-12 py-2 w-full md:w-auto'>
          <h2 className='text-blue-600 font-bold text-xs'>FIND US</h2>
          <div className='mt-2 flex gap-3'>
            <CiLocationOn color='yellow' className='mt-0.5'/>
            <p className='text-gray-400 text-sm'>First floor, Geo Infopark,</p>
          </div>
          <div className='mb-2 flex gap-3'>
            <p className='text-gray-400 text-sm ml-8'>Infopark EXPY, Kakkanad</p>
          </div>
        </div>
  
      </div>
    </div>
    
    {/* Footer Section */}
    <div className='bg-gray-900 flex flex-col md:flex-row justify-between items-center py-3 px-5 md:px-20 text-slate-400 text-xs md:text-sm'>
      <p>© 2024 Deepnetsoft Solutions. All rights reserved</p>
      <div className='flex gap-5 mt-2 md:mt-0'>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  </>
  
  

  )
}

export default Footer