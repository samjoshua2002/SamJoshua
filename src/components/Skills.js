import React from 'react';
import { info } from '../constants/contents';


function Skills() {
    return (
        <div className='text-center max-w-screen-lg items-center  mx-auto pt-20'>
          <h1 className='text-4xl font-bold'>Skills</h1>
          <p className='text-xl font-semibold mt-2 text-gray-600'>My Technical Skills</p>
         
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 p-5  mx-auto">
          {info.map((item) => (
            <div key={item.title} className="my-6">
              <div className="border p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
                <div className="grid grid-cols-2 gap-4">
                  {item.content.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-start p-2  rounded-lg hover:bg-gray-100"
                    >
                      <div className="mr-2">{skill.icon}</div>
                      <div>{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          </div>
    
        </div>
      );
    };
    
export default Skills;
