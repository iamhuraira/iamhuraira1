import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import Typescript from '../public/assets/skills/typescript.png';

import ReactImg from '../public/assets/skills/react.png';
import NextJS from '../public/assets/skills/nextjs.png';
import NodeJS from '../public/assets/skills/node.png';
import MongoDB from '../public/assets/skills/mongodb.png';

import Tailwind from '../public/assets/skills/tailwind.png';
import Bootstrap from '../public/assets/skills/bootstrap.png';
import MaterialUI from '../public/assets/skills/materialui.png';
import Sass from '../public/assets/skills/sass.png';
import StyledComponents from '../public/assets/skills/styled.png';

import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
// import AWS from '../public/assets/skills/aws.png';

const Skills = () => {

  const skills = [
    { id: 1, name: 'CSS', img: Css },
    { id: 2, name: 'HTML', img: Html },
    { id: 3, name: 'JavaScript', img: Javascript },
    { id: 4, name: 'TypeScript', img: Typescript },
    { id: 5, name: 'React', img: ReactImg },
    { id: 6, name: 'NextJS', img: NextJS },
    { id: 7, name: 'NodeJS', img: NodeJS },
    { id: 8, name: 'MongoDB', img: MongoDB },
    { id: 9, name: 'Tailwind', img: Tailwind },
    { id: 10, name: 'Bootstrap', img: Bootstrap },
    { id: 11, name: 'MaterialUI', img: MaterialUI },
    { id: 12, name: 'Sass', img: Sass },
    { id: 13, name: 'StyledComponents', img: StyledComponents },
    { id: 14, name: 'Github', img: Github },
    { id: 15, name: 'Firebase', img: Firebase },

  ]

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#003479]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              className="py-3 px-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[80px]"
              key={skill.id}
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className=" w-[55px] h-auto">
                  <Image src={skill.img} width="24px" height="24px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}

          {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Firebase} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
