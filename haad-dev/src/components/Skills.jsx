import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaNodeJs } from "react-icons/fa";
// import { SiJavascript, SiPython, SiJava, SiCsharp, SiPhp } from "react-icons/si";
import { SiPython, SiJavascript, SiCsharp, SiPhp, SiMongodb, SiUnity, SiGit, SiGithub, SiGitlab } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";



const Skills = () => {
  return (
    <div className="flex justify-center items-center p-12 lg:p-32 text-white mb-8 flex-col">
      <h1 className="font-rubik text-6xl">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-2 flex-row mt-3">
        <div className="rounded-2xl border-2 border-neutral-300 p-3 shadow-teal-dark-shadow">
          <FaHtml5 className="text-7xl text-orange-500 " />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3 shadow-teal-dark-shadow">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3 shadow-teal-dark-shadow">
          <SiPython className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3 shadow-teal-dark-shadow">
          <FaJava className="text-7xl text-red-500" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3 shadow-teal-dark-shadow">
          <SiJavascript className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3 shadow-teal-dark-shadow">
          <SiCsharp className="text-7xl text-fuchsia-600" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3 shadow-teal-dark-shadow">
          <SiPhp className="text-7xl text-indigo-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3 shadow-teal-dark-shadow">
          <FaReact className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3 shadow-teal-dark-shadow">
          <FaNodeJs className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3 shadow-teal-dark-shadow">
          <SiMongodb className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3 shadow-teal-dark-shadow">
          <BiLogoPostgresql className="text-7xl text-sky-600" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3 shadow-teal-dark-shadow">
          <SiUnity className="text-7xl text-slate-200" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3 shadow-teal-dark-shadow">
          <SiGit className="text-7xl text-red-500" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3 shadow-teal-dark-shadow">
          <SiGithub className="text-7xl text-slate-200" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3 shadow-teal-dark-shadow">
          <SiGitlab className="text-7xl text-orange-600" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
