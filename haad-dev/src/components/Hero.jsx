import React from 'react';
import HaadImg2 from '../assets/Haad_02.jpg';
import { MdSunny } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import oldResume from '../assets/oldResume.pdf'

const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-10 p-5 lg:p-7 text-white'>
        <div className=' flex flex-col items-center relative m-5 lg:m-0'>
            <img src={HaadImg2} className='rounded-full w-52 h-52 object-cover shadow-cyan-dark-shadow' />
        </div>

        <div className='flex flex-col items-center text-center'>
            <h1 className='font-rubik text-2xl'>Haad <br />Cheema</h1>
            <h2 className='font-roboto-condensed text-lg'>Computer Science Student</h2>
            <span className='flex'>
                <FaGithub  className='flex-row' size={32}/>
                <FaLinkedin className='flex-row' size={32}/>
            </span>
            <p className='font-roboto-condensed text-lg'>
                A student with a passion for development of all kinds!
            </p>
            <div className='m-2'>
                <a href={oldResume} download>
                    <button className='px-4 py-1 text-sm rounded-full border-r-2 border-l-2 hover:text-black hover:bg-white focus:ring-2 focus:ring-purple-700'>
                        Resume
                    </button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero