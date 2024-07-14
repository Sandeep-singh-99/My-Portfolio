import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
function Footer() {
  return (
    <div className='lg:fixed lg:left-0 lg:bottom-0 lg:px-10 sm:relative sm:flex sm:flex-row sm:justify-center'>
        <div className='flex flex-col sm:flex-row  items-center gap-2 '>
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-10'>
            <FaGithub className='text-white text-2xl' />
            <SiLinkedin className='text-white text-2xl'/>
            <FaTwitter  className='text-white text-2xl'/>
            <ImFacebook2 className='text-white text-2xl'/>
            </div>
            <div className='w-[1px] h-32 bg-[#125f63] sm:hidden'></div>
        </div>
    </div>
  )
}

export default Footer