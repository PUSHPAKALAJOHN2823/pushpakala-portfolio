import React from 'react';

import SkillCard from './SkillCard';



const skillItem = [
    {
      imgSrc: '/assets/figma.png',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/assets/css.png',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/assets/javascript.png',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/assets/vite.png',
      label: 'ViteJS',
      desc: 'Frontend Tool'
    },
    {
      imgSrc: '/assets/githubIcon.png',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/assets/python.png',
      label: 'Python',
      desc: 'Programming'
    },
    {
      imgSrc: '/assets/react.png',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/assets/tailwind.jpeg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

const Skills = () => {
  return (
    <section className='section'>
        <div className='container'>
            <h2 className='headline-2'>
                Essential Tools I Use
            </h2>

            <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className='grid gap-6 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]'>
                {
                    skillItem.map(({imgSrc, label, desc} , key) => (
                        <SkillCard 
                        key = {key}
                        imgSrc={imgSrc}
                        label={label}
                        desc={desc}


                        
                        />
                    ))
                }

            </div>

        </div>
    </section>
    
  )
}

export default Skills;
