import React from 'react';
import experienceData from './experience.json';

const Experience = () => {
  return (
    <section className="flex flex-col items-center p-12 lg:p-32 text-white mb-8">
      <h1 className="font-rubik text-6xl mb-12 text-teal-300 text-shadow shadow-cyan-600">Experience</h1>
      <div className="w-full max-w-5xl">
        {experienceData.map((item, index) => (
          <div 
            key={index} 
            className="mb-12 p-8 border border-neutral-600 rounded-lg bg-zinc-900 transition duration-300 transform hover:-translate-y-2 shadow-cyan-item-shadow hover:shadow-cyan-item-hover-shadow"
          >
            <h2 className="font-rubik text-3xl mb-2 text-teal-400">{item.role}</h2>
            <h3 className="font-roboto-condensed text-xl mb-2 text-neutral-300">{item.company}</h3>
            <p className="font-roboto-condensed text-md mb-4 text-neutral-400">{item.time}</p>
            {/* <p className="font-roboto-condensed text-lg mb-6 text-neutral-100">{item.description}</p> */}
            <div className='mb-6'>
              {item.description.map((point, index) => (
                <p key={index} className="font-roboto-condensed text-lg mb-2 text-neutral-100">- {point}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {item.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-teal-700 rounded-full text-sm shadow-sm transition-transform duration-200 transform hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
