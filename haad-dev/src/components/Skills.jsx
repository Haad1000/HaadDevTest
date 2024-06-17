import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaNodeJs } from "react-icons/fa";
// import { SiJavascript, SiPython, SiJava, SiCsharp, SiPhp } from "react-icons/si";
import { SiPython, SiJavascript, SiCsharp, SiPhp, SiMongodb, SiUnity } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";



const Skills = () => {
  return (
    <div className="flex justify-center items-center p-12 lg:p-32 text-white mb-8 flex-col">
      <h1 className="font-rubik text-5xl">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-2 flex-row mt-3">
        <div className="rounded-2xl border-2 border-neutral-300 p-3">
          <FaHtml5 className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3">
          <SiPython className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3">
          <FaJava className="text-7xl text-red-500" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3">
          <SiJavascript className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3">
          <SiCsharp className="text-7xl text-blue-600" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3">
          <SiPhp className="text-7xl text-purple-700" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3">
          <FaReact className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3">
          <FaNodeJs className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3">
          <SiMongodb className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3">
          <BiLogoPostgresql className="text-7xl text-sky-600" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-300 p-3">
          <SiUnity className="text-7xl text-slate-200" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
