import React from 'react'
import { GoLinkExternal } from "react-icons/go";
import { cardData } from '../constants/contents';
function Project() {
    
  return (
    <div className="max-w-screen-lg mx-auto p-5">
      {/* Section title */}
      <div className="text-center mb-5">
        <div className="text-5xl font-bold">Certifications</div>
        <div className="text-gray-500 mt-4">Credentials & Achievements</div>
      </div>

      {/* Card list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <div key={index} className="border border-white p-5 rounded-3xl shadow-md">
            <div className=" p-5 rounded-lg  flex flex-col items-start">
              {/* Card Image */}
              <img
                src={card.imgSrc}
                className="bg-black w-24 h-24 mb-4 rounded-2xl"
                alt={card.imgAlt}
              />

              {/* Certificate Header */}
              <h2 className="text-xl font-semibold mb-1">
                {card.title}
              </h2>

              {/* Badge */}
              <span className="text-lg text-gray-500  mb-1 text-left">
                {card.badge}
              </span>

              {/* Content */}
              <p className="course-content text-justify text-gray-600 h-36 mb-4">
                {card.content}
              </p>

              {/* Certificate Link */}
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="course-link flex items-center text-black sm:text-sm lg:text-md hover:text-gray-600"

              >
               <GoLinkExternal className='mr-2 size-5' /> {card.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
