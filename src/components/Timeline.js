import React, { useState } from 'react'
import { IoSchoolSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { data } from '../constants/contents';

const Timeline = () => {

    const [edu, setEdu] = useState(true)
    const [exp, setExp] = useState(false)
    const Education=()=>{
        setEdu(true)
        setExp(false)
    }
    const Experience=()=>{
        setEdu(false)
        setExp(true)
    }

    


    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className='text-center'>
                    <h3 className='text-3xl font-semibold'>Qualification</h3>
                    <p className='text-sm text-grey-100'>My Personal Journey</p>
                    <div className='mt-5'>
                        <div className='flex gap-5'>
                            <span className={`flex items-center gap-1 text-xl font-medium cursor-pointer ${edu ? 'text-black':'text-gray-400'}`} onClick={Education}><IoSchoolSharp className='inline' />Education</span>
                            <span className={`flex items-center gap-1 text-xl font-medium cursor-pointer ${exp ? 'text-black':'text-gray-400'}`} onClick={Experience}><FaBriefcase className='inline' />Experience</span>
                        </div>
                        <div className=' my-10 md:flex justify-center'>
                            <div className='relative'>
                                <div className='line w-0.5 h-80 bg-black'> </div>
                                <div className='dot1 w-4 h-4 rounded-full bg-black absolute top-16 -left-1.5'></div>
                                <div className='dot2 w-4 h-4 rounded-full bg-black absolute top-60 -left-1.5'></div>
                                {edu && (
                                    <>
                                        <div className='box1 w-56 h-32 border absolute top-3 left-8 md:-left-64 rounded-lg text-left p-2 ps-3'>
                                            {data
                                                .filter(item => item.id === 1)
                                                .map(item => (
                                                    <div key={item.id} className='flex flex-col space-y-2'>
                                                        <p className='font-bold'>{item.name}</p>
                                                        <p className='text-gray-500'>{item.sub_name}</p>
                                                        <p className='flex items-center gap-1 text-gray-500'>
                                                            <FaRegCalendarAlt className='text-black' />
                                                            {item.year}
                                                        </p>
                                                    </div>
                                                ))}
                                        </div>
                                        <div className='box1 w-56 h-32 border absolute top-44 left-8 rounded-lg text-left p-2 ps-3'>
                                            {data
                                                .filter(item => item.id === 2)
                                                .map(item => (
                                                    <div key={item.id} className='flex flex-col space-y-2'>
                                                        <p className='font-bold'>{item.name}</p>
                                                        <p className='text-gray-500'>{item.sub_name}</p>
                                                        <p className='flex items-center gap-1 text-gray-500'>
                                                            <FaRegCalendarAlt className='text-black' />
                                                            {item.year}
                                                        </p>
                                                    </div>
                                                ))}
                                        </div>
                                    </>
                                )}

                                {exp && (
                                    <>
                                        <div className='box1 w-56 h-32 border absolute top-3 left-8 md:-left-64 rounded-lg text-left p-2 ps-3'>
                                            {data
                                                .filter(item => item.id === 3)
                                                .map(item => (
                                                    <div key={item.id} className='flex flex-col space-y-2'>
                                                        <p className='font-bold'>{item.name}</p>
                                                        <p className='text-gray-500'>{item.sub_name}</p>
                                                        <p className='flex items-center gap-1 text-gray-500'>
                                                            <FaRegCalendarAlt className='text-black' />
                                                            {item.year}
                                                        </p>
                                                    </div>
                                                ))}
                                        </div>
                                        <div className='box1 w-56 h-32 border absolute top-44 left-8 rounded-lg text-left p-2 ps-3'>
                                            {data
                                                .filter(item => item.id === 4)
                                                .map(item => (
                                                    <div key={item.id} className='flex flex-col space-y-2'>
                                                        <p className='font-bold'>{item.name}</p>
                                                        <p className='text-gray-500'>{item.sub_name}</p>
                                                        <p className='flex items-center gap-1 text-gray-500'>
                                                            <FaRegCalendarAlt className='text-black' />
                                                            {item.year}
                                                        </p>
                                                    </div>
                                                ))}
                                        </div>
                                    </>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
