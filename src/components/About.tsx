import React from 'react';
import profile from '../assets/push.jpg'

const About = () => {
  

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Photo */}
            <div className="flex justify-center slide-up">
              <div className="w-96 h-96 rounded-full overflow-hidden shadow-xl border-4 border-primary/30">
                <img
                  src={profile} // place your photo in public/profile.jpg
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Bio & Skills */}
            <div className="slide-up space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I’m a passionate <strong>Frontend Developer</strong> skilled in{" "}
                  <strong>React.js, JavaScript, TypeScript, HTML, CSS, and TailwindCSS</strong>.
                  I focus on building responsive, interactive, and user-friendly web applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey includes working as a <strong>Frontend Developer Intern</strong> and 
                  building impactful projects such as a Resume Analyzer and Task Management system. 
                  These experiences have strengthened my skills in modern frontend technologies and API integration.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Apart from coding, I enjoy exploring <strong>AI and data science</strong>, and I’m always 
                  eager to learn emerging technologies that push my development skills further.
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

