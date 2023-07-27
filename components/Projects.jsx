import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import catalog from '../public/assets/projects/catalog.png';
import chromeExtension from '../public/assets/projects/chrome.png';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: 'Catalog Viewer',
      backgroundImg: catalog,
      projectUrl: '/catalogviewer',
      tech: 'React JS',
    },
    {
      id: 2,
      title: 'Chrome Extension UI',
      backgroundImg: chromeExtension,
      projectUrl: '/chromeextensionui',
      tech: 'React JS, Material UI ',
    },
  ];

  return (
    <div
      id="projects"
      className="w-full  md:h-screen p-2 flex items-center py-20"
    >
      <div className="max-w-[1240px] mx-auto px-2 py-20">
        <p className="text-xl tracking-widest uppercase text-[#003479]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectData.reverse().map((project) => (
            <ProjectItem
              title={project.title}
              backgroundImg={project.backgroundImg}
              projectUrl={project.projectUrl}
              tech={project.tech}
              key={project.id}
            />
          ))}

          {/* <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS, Tailwind CSS, Redux '

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
