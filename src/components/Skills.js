import React from 'react'
import { info } from '../constants/contents';

function Skills() {
    

    return (
        <div className='max-w-screen-lg mx-auto p-5'>
            <div className='text-center mb-10 '>
    <h1 className='text-4xl font-semibold'>Skills</h1>
    <p className='text-sm mt-2 text-gray-600'>My Technical Skills</p>
</div>

            <div className='grid grid-cols-1 w-full md:grid-cols-2 gap-6 mt-4'>
            {info.map((category, index) => (
    <div key={index} className='border border-gray-300 w-96 p-5 rounded-2xl shadow-md mx-auto'>
        <h3 className='text-center text-gray-500 mb-4'>{category.title}</h3>
        <div className='grid grid-cols-2 justify-center gap-x-6 gap-y-4'>
            {category.content.map((skill, idx) => (
                <div key={idx} className='flex items-center justify-start gap-2'>
                    <span className='text-2xl'>{skill.icon}</span>
                    <span className='text-lg text-gray-700'>{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
))}

            </div>
        </div>
    )
}

export default Skills;
