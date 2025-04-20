import React from 'react';

import ProjectCard from './ProjectCard';


const projects = [
    {
      imgSrc: '/assets/project1.jpg',
      title: 'Static Drone Website',
      tags: ['Frontend','React','Figma'],
      projectLink: 'https://github.com/PUSHPAKALAJOHN2823/DRONE-FE'
    },
    {
      imgSrc: '/assets/project2.png',
      title: 'E-Commerce Website',
      tags: ['React', 'Vite','Tailwindcss'],
      projectLink: 'https://github.com/PUSHPAKALAJOHN2823/E-Commerce'
    },
  ];

const Project = () => {
  return (
    <section 
    id="projects"
    className='section'>
        <div className='container'>
            <h2 className='headline-2'>
                My Portfolio Highlights
            </h2>

            <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
                {projects.map(({imgSrc , title, tags, projectLink} , key ) =>(
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    
                    />
                ))}
            </div>



        </div>

    </section>
   
  )
}

export default Project;
