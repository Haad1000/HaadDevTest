import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaNodeJs } from "react-icons/fa";
import { SiPython, SiJavascript, SiCsharp, SiPhp, SiMongodb, SiUnity, SiGit, SiGithub, SiGitlab } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="flex justify-center items-center p-12 lg:p-32 text-white mb-8 flex-col">
      <h1 className="font-rubik text-6xl mb-8 text-teal-300 text-shadow shadow-cyan-600">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-4 flex-row mt-3">
        {[
          { Icon: FaHtml5, title: "HTML" },
          { Icon: FaCss3Alt, title: "CSS" },
          { Icon: SiPython, title: "Python" },
          { Icon: FaJava, title: "Java" },
          { Icon: SiJavascript, title: "JavaScript" },
          { Icon: SiCsharp, title: "C#" },
          { Icon: SiPhp, title: "PHP" },
          { Icon: FaReact, title: "ReactJS" },
          { Icon: FaNodeJs, title: "NodeJS" },
          { Icon: SiMongodb, title: "MongoDB" },
          { Icon: BiLogoPostgresql, title: "PostgreSQL" },
          { Icon: SiUnity, title: "Unity" },
          { Icon: SiGit, title: "Git" },
          { Icon: SiGithub, title: "GitHub" },
          { Icon: SiGitlab, title: "GitLab" },
        ].map((skill, index) => (
          <div 
            key={index} 
            className="group relative rounded-2xl border-2 border-neutral-300 p-4 shadow-cyan-item-shadow hover:shadow-cyan-item-hover-shadow transition duration-200 text-slate-200 hover:text-teal-300"
          >
            <skill.Icon className="text-7xl" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
