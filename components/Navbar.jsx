'use client';

import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiUpwork } from "react-icons/si"
import {BsFillPersonLinesFill} from 'react-icons/bs'



const Navbar = () => {

  const [nav, setNav] = useState(false)
  
  const handleNav = () => { 
    setNav(!nav)
  }

  // const link = {
  //   upwork: 'https://www.upwork.com/freelancers/~018cce8136a7030f16',
  //   linkedin: 'https://www.linkedin.com/in/iamhuraira/',
  //   github: 'https://github.com/iamhuraira',
  //   mail: '/#contact',
  //   contactNo: '/resume',
  // };
  const link = {
    upwork: 'https://www.upwork.com',
    linkedin: 'https://www.linkedin.com/in/iamhuraira/',
    github: 'https://github.com/iamhuraira',
    mail: '/#contact',
    contactNo: '/resume',
  };

  return (
    <div style={{ backgroundColor:'#ecf0f3'}} className='fixed w-full h-20 shadow-xl z-[10000]'>
      <div className='flex justify-between items-center w-full h-full px-12 2xl:px-40'>
        <Image
          src='/logo.png'
          alt='Picture of the author'
          // width='125'
          // height='50'
          width="138"
          height="60"
        />
   
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div className='md:hidden cursor-pointer' onClick={handleNav}>
            <AiOutlineMenu  size={27} />
          </div>
        </div>

      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70  ease-in duration-500' : ''}>
        <div className={nav ? 'fixed left-0 top-0  sm:w-[60%] md:w-[60%] h-screen bg-[#ecf0f3] md:p-10 p-6 ease-in duration-500' : 'fixed left-[-120%] top-0  sm:w-[60%] md:w-[60%] h-screen bg-[#ecf0f3] p-10  ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image 
                src='/logo.png'
                alt='Picture of the author'
                width='113'
                height='46'
              />
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer' onClick={handleNav}>
                <AiOutlineClose size={27} />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4 '>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let's build something legendary together.
              </p>
            </div>
          </div>

          <div className='py-4 flex flex-col'>
            <ul className='uppercase '>
              <Link href='/'>
                <li className='py-4 text-sm' >Home</li>
              </Link>
              <Link href='/' >
                <li className='py-4 text-sm' >About</li>
              </Link>
              <Link href='/' >
                <li className='py-4 text-sm' >Skills</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm' >Projects</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm' >Contact</li>
              </Link>
            </ul>
            <div className='pt-10'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[100%]  sm:flex-wrap'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-500'>
                  <Link href={link.upwork} target='_blank'>

                  <SiUpwork  />
                  </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-500'>
                  <Link href={link.linkedin} target='_blank'>

                <FaLinkedinIn  />
                  </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-500'>
                  <Link href={link.github} target='_blank'>
                    <FaGithub />
                    </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-500'>
                  <Link href={link.mail} target='_blank'>

                <AiOutlineMail  />
                  </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-500'>
                  <Link href={link.contactNo} target='_blank'>
                    
                    <BsFillPersonLinesFill />
                    </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Navbar