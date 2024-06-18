import React from 'react';
import HaadImg2 from '../assets/Haad_02.jpg';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import oldResume from '../assets/oldResume.pdf'

const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-20 p-16 lg:p-32 text-white mb-8'>
      <div className='flex flex-col items-center relative m-5 lg:m-0'>
        <img 
          src={HaadImg2} 
          className='rounded-full w-64 h-80 object-cover shadow-teal-pfp-shadow hover:shadow-teal-pfp-hover-shadow transition-shadow duration-300 ease-in-out' 
        />
      </div>

      <div className='flex flex-col items-center text-center m-2 lg:m-5 space-y-4'>
        <h1 className='font-rubik text-5xl'>
          Hi! I'm <span className='text-teal-400 text-6xl'>Haad Cheema</span>
        </h1>
        <h2 className='font-roboto-condensed text-2xl'>
          Computer Science Student
        </h2>
        <div className='flex space-x-4 text-teal-400'>
          <a href='https://github.com/Haad1000'>
            <FaGithub className='flex-row' size={40}/>
          </a>
          <a href='https://www.linkedin.com/in/haad-cheema-931105241/'>
            <FaLinkedin className='flex-row' size={40}/>
          </a>
        </div>
        <p className='font-roboto-condensed text-2xl px-4 lg:px-0'>
          A student with a passion for development of all kinds!
        </p>
        <div className='m-2'>
          <a href={oldResume} download>
            <button className='px-4 py-2 text-lg rounded-full border-teal-400 border-r-2 border-l-2 hover:text-black hover:bg-teal-400 focus:ring-2 focus:ring-cyan-700 transition duration-200'>
              Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;
