import React from "react";
import projectData from "./projectData";

const Projects = () => {
  return (
    <section className="flex flex-col items-center p-12 lg:p-32 text-white mb-8">
      <h1 className="font-rubik text-6xl mb-8 text-teal-300 text-shadow shadow-cyan-600">Projects</h1>
      <div className="w-full max-w-5xl">
        {projectData.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center bg-zinc-900 p-6 lg:px-0 border border-neutral-600 rounded-lg transition duration-300 transform hover:-translate-y-2 shadow-cyan-item-shadow hover:shadow-cyan-item-hover-shadow">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h2 className="font-rubik text-3xl mb-2 text-teal-400">{project.title}</h2>
              <p className="font-roboto-condensed text-lg mb-6 text-neutral-100">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 px-2 py-1 text-sm bg-teal-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
