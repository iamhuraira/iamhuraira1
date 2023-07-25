import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiUpwork } from "react-icons/si"


const Main = () => {

  const link = {
    upwork: 'https://www.upwork.com/freelancers/~018cce8136a7030f16',
    linkedin: 'https://www.linkedin.com/in/iamhuraira/',
    github: 'https://github.com/iamhuraira',
    mail: '/#contact',
    contactNo: '/resume',
  };

  const data = {
    name: "Abu Huraira",
    field: "A Mern Stack Developer",
    desc: " I'm specialize in designing and building efficient, scalable web applications using MongoDB, Express.js, React, Next js and Node.js. With experience in working with diverse front-end and back-end technologies, I'm dedicated to delivering high-quality results and contributing to any development team.",
  }
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m  <span className='text-[#003479]'><br className='sm:hidden' /> {data.name}</span>
          </h1>
          <h1 className='py-2 text-gray-700'>{data.field}</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
           {data.desc}
          </p>
          <div className='flex items-center justify-between md:max-w-[530px] max-w-[330px]  m-auto py-4'>
            <a
              href={link.upwork}
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 md:p-6 p-3 cursor-pointer hover:scale-115 ease-in duration-300'>

                <SiUpwork  size={20} />
              </div>
              </a>

              <a
                href={link.linkedin}
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 md:p-6 p-3 cursor-pointer hover:scale-115 ease-in duration-300'>
                  <FaLinkedinIn size={20} />
                </div>
              </a>
              <a
                href={link.github}
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 md:p-6 p-3 cursor-pointer hover:scale-115 ease-in duration-300'>
                  <FaGithub size={20} />
                </div>
              </a>
              <Link href='/#contact'>
                <div className='rounded-full shadow-lg shadow-gray-400 md:p-6 p-3 cursor-pointer hover:scale-115 ease-in duration-300'>
                  <AiOutlineMail size={20} />
                </div>
              </Link>
              <Link href='/resume'>
                <div className='rounded-full shadow-lg shadow-gray-400 md:p-6 p-3 cursor-pointer hover:scale-115 ease-in duration-300'>
                  <BsFillPersonLinesFill size={20} />
                </div>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
