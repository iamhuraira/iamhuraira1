import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import AboutImg from '/public/assets/boy.jpg';

const About = () => {
  const aboutData = {
    title: 'Who I Am ',
    desc1:
      " I specialize in building MERN( MongoDB, Express Js, React, Nodes js) Stack Web Applications and I'm also proficient in building mobile responsive front- end UI applications that connect with API’s and other backend technologies.I’m passionate about learning new technologies and understand there is more than one way to accomplish a task.Though I am most proficient in building front- end applications using React, Next Js, HTML, CSS, and  Javascript and also build the backend of web apps using Node Js, Express JS, Next Js, Nust js, MongoDB and Mongoose. I am a quick learner and can pick up new tech stacks as needed.I believe that being a great developer is not using one specific language, but choosing the best tool for the job.",
    desc2:
      ' I started web developement in 2021 managing and build multiple e-commerce websites, portfolioand Company websites and Simple UI of Website on Custom Build in MERN stact, Next js and  CMS platforms such as WordPress. I have experience working directly with clients and taking mock wireframes all the way to deployed applications. In my spare time I run Code Commerce, a Youtube channel where I teach web developement and various front- end technologies.',
    img: '/public/assets/skills/boy.png',
  };
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid md:grid-cols-6 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 md:col-span-4 lg:w-[100%]">
          <p className="uppercase text-xl tracking-widest text-[#003479]">
            About
          </p>
          <h2 className="py-4">{aboutData.title}</h2>
          <p className="py-2 text-gray-600">
            // I am not your normal developer.
          </p>

          <p className="py-2 text-gray-600">{aboutData.desc1}</p>
          <p className="py-2 text-gray-600">{aboutData.desc2}</p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="lg:w-full sm:w-full h-auto md:col-span-2 lg:col-span-1  m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center md:justify-end   sm:justify-center lg:justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            // src="/public/assets/boy.jpg"
            src={aboutData.img}
            className="rounded-xl"
            alt="/"
            width={100}
            height={100}
            style={{
              width: '90%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
