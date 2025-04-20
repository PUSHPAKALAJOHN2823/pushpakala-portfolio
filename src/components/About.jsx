import { number } from 'prop-types'
import React from 'react';
import heroImage from '../../public/assets/heroImage';


const aboutItems = [
    {
        label:'Project Done',
        number : 3
    },
    {
        label: "Years of Experience",
        number:"Fresher"
    }
]

const About = () => {
  return (
    <section 
      id="about"
      className='section' 
    
    >
        <div className='container'>
            <div className='bg-zinc-800/50 p-7 rounded-2xl
            md:p-12'>
                <p className='text-zinc-300 mb-4 md:mb-8
                md:text=xl'>
                Hi, I'm Pushpakala John — a passionate Frontend Developer with hands-on experience in building responsive and modern web applications using React, Vite, Tailwind CSS, and JavaScript.
                 I love creating clean, interactive user interfaces and enjoy turning ideas into seamless digital experiences. Alongside frontend development, I also have a foundation in Python and Machine Learning, which helps me approach problems with a deeper technical perspective. I'm currently seeking exciting opportunities to grow as a developer, collaborate with creative teams, and build impactful products.
                 Let’s build something amazing together!
                </p>
                <div className='flex flex-wrap items-center gap-4
                md:gap-7'>
                    {
                        aboutItems.map(({label,number}, key) => (
                            <div key={key}>
                                <div className='flex items-center md:mb-2'> 
                                    <span className='text-2xl font-semibold md:text-4xl'>
                                        {number}
                                    </span>
                                    
                                </div>
                                <p className='text-sm text-zinc-400'>{label}</p>
                            </div>                          
                        ))
                    }

                    <img src={heroImage} alt="logo" 
                    width={30}
                    height={30}   
                    className='ml-auto md:w-[40px] md:h-[40px]' />

                </div>
            </div>
        </div>

    </section>

  )
}

export default About
