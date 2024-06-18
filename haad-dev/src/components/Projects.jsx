import React from 'react';
import projectsData from './projects.json';

const Projects = () => {
  return (
    <section className="flex flex-col items-center p-12 lg:p-32 text-white mb-8">
      <h1 className="font-rubik text-6xl mb-12 text-teal-300">Projects</h1>
      <div className="w-full max-w-5xl">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="mb-12 p-8 border border-neutral-600 rounded-lg bg-zinc-800 shadow-lg transition duration-300 transform hover:-translate-y-2"
          >
            <h2 className="font-rubik text-3xl mb-2 text-teal-400">{project.title}</h2>
            <p className="font-roboto-condensed text-lg mb-6 text-neutral-100">{project.description}</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-teal-700 rounded-full text-sm shadow-sm transition-transform duration-200 transform hover:scale-105 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              className="px-4 py-2 bg-teal-400 text-black rounded-full hover:bg-teal-600 transition duration-200"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
