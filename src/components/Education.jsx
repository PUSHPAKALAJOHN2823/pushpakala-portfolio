import React from 'react';

const educationData = [
  {
    degree: 'B.Tech - Artificial Intelligence & Data Science',
    institution: 'Arjun College of Technology',
    year: '2020 - 2024',
    percentage: 82
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Sri Sanakara Vidhyalaya Matriculation Higher Secondary School',
    year: '2019 - 2020',
    percentage: 64
  },
  {
    degree: 'SSLC',
    institution: 'Sri Sanakara Vidhyalaya Matriculation Higher Secondary School',
    year: '2017 - 2018',
    percentage: 64
  }
];

const Education = () => {
  return (
    <section id="education" className="section bg-zinc-900 text-white py-12 font-poppins">
      <div className="container mx-auto px-4">
        <h2 className="headline-2">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="group bg-zinc-800 border border-zinc-700 rounded-2xl p-6 shadow-md hover:shadow-blue-500/30 transition-all duration-300 relative"
            >
              <div className="flex items-start gap-4">
                <span className="material-symbols-rounded text-blue-400 text-4xl">
                  school
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">{item.degree}</h3>
                  <p className="text-sm text-zinc-300">{item.institution}</p>
                  <p className="text-sm text-zinc-400">{item.year}</p>
                  <p className="text-sm text-zinc-400">{item.percentage}</p>
                </div>
              </div>
              <p className="mt-4 text-zinc-300 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
