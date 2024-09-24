import React from 'react'
import { PiMedal } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { Details } from '../constants/contents';

function About() {
    const archieve = [
        {icon: <PiMedal />, name: "Experience", exp: "2+ Months"},
        {icon: <FaBriefcase />, name: "Completed", exp: "2+ Projects"},
        {icon: <FaTrophy />, name: "Received", exp: "3+ Certifications"}
    ];

    return (
        <div className='p-5 text-center max-h-full'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-bold'>About Me</h1>
                <p className='text-lg text-gray-600'>My Introduction</p>
            </div>

            <div className='flex flex-row gap-9 place-content-center ml-4 mr-4'>
    {archieve.map((link, index) => (
        <div key={index} className='flex flex-col border border-slate-200 w-32 rounded-lg p-2 items-center text-center'>
            <p className='md:text-2xl text-gray-600'>{link.icon}</p>
            <p className='text-md text-black-700 font-semibold'>{link.name}</p>
            <p className='text-sm text-gray-500'>{link.exp}</p>
        </div>
    ))}
</div>

   <div className='text-center mt-14'>
    <p className='mx-auto md:w-5/12 my-4 text-justify text-gray-500'>{Details.about}</p>
   </div>


        </div>
    );
}

export default About;
