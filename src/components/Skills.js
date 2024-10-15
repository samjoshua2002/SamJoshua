import React from 'react';
import { info } from '../constants/contents';

function Skills() {
    return (
        <div className='max-w-screen-lg mx-auto p-5'>
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold'>Skills</h1>
                <p className='text-sm mt-2 text-gray-600'>My Technical Skills</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
               
                <div className='border border-gray-300 w-full p-5 rounded-2xl shadow-md mx-auto'>
                    <h3 className='text-center font-bold text-gray-700 mb-5'>{info[0].title}</h3>
                    <div className='grid grid-cols-2 justify-center gap-x-6 gap-y-4 ml-9'>
                        {info[0].content.map((skill, idx) => (
                            <div key={idx} className='flex items-center justify-start gap-2'>
                                <span className='text-xl text-gray-500'>{skill.icon}</span>
                                <span className='text-sm font-bold text-gray-500'>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

               
                <div className='border border-gray-300 w-full p-5 rounded-2xl shadow-md mx-auto'>
                    <h3 className='text-center font-bold text-gray-700 mb-5'>{info[1].title}</h3>
                    <div className='grid grid-cols-2 justify-center gap-x-6 gap-y-4 ml-9'>
                        {info[1].content.map((skill, idx) => (
                            <div key={idx} className='flex items-center justify-start gap-2'>
                                <span className='text-xl text-gray-500'>{skill.icon}</span>
                                <span className='text-sm font-bold text-gray-500'>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

               
                <div className='border border-gray-300 w-full p-5 rounded-2xl shadow-md mx-auto md:col-span-2 md:row-span-2'>
                    <h3 className='text-center font-bold text-gray-700 mb-5'>{info[2].title}</h3>
                    <div className='grid grid-cols-2 justify-center gap-x-6 gap-y-4 ml-9'>
                        {info[2].content.map((skill, idx) => (
                            <div key={idx} className='flex items-center justify-start gap-2'>
                                <span className='text-xl text-gray-500'>{skill.icon}</span>
                                <span className='text-sm font-bold text-gray-500'>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
