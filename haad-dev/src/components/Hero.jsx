import React from 'react';
import HaadImg2 from '../assets/Haad_02.jpg';
import { MdSunny } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import oldResume from '../assets/oldResume.pdf'

const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-20 p-16 lg:p-32 text-white mb-8'>
        <div className=' flex flex-col items-center relative m-5 lg:m-0'>
            <img src={HaadImg2} className='rounded-full w-64 h-80 lg:h-64 object-cover shadow-cyan-dark-shadow' />
        </div>

        <div className='flex flex-col items-center text-center m-2 lg:m-5'>
            <h1 className='font-rubik text-5xl'>Haad <br />Cheema</h1>
            <h2 className='font-roboto-condensed text-2xl'>Computer Science Student</h2>
            <span className='flex'>
                <FaGithub  className='flex-row' size={40}/>
                <FaLinkedin className='flex-row' size={40}/>
            </span>
            <p className='font-roboto-condensed text-2xl'>
                A student with a passion for development of all kinds!
            </p>
            <div className='m-2'>
                <a href={oldResume} download>
                    <button className='px-4 py-1 text-lg rounded-full border-r-2 border-l-2 hover:text-black hover:bg-white focus:ring-2 focus:ring-purple-700'>
                        Resume
                    </button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero