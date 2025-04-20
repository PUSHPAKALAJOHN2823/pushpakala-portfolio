import React from 'react';

import SkillCard from './SkillCard';
import figma from '../../public/assets/figma.png';
import css from '../../public/assets/css.png';
import js from '../../public/assets/javascript.png';
import vite from '../../public/assets/vite.png';
import git from '../../public/assets/githubIcon.png';
import python from '../../public/assets/python.png';
import react from '../../public/assets/react.png';
import tail from '../../public/assets/tailwind.jpeg';



const skillItem = [
    {
      imgSrc: {figma},
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: {css},
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: {js},
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: {vite},
      label: 'ViteJS',
      desc: 'Frontend Tool'
    },
    {
      imgSrc: {git},
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: {python},
      label: 'Python',
      desc: 'Programming'
    },
    {
      imgSrc: {react},
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: {tail},
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
