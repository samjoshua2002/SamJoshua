import React from 'react';
import { cardData } from '../constants/contents';

function Project() {
  return (
    <div className="max-w-screen-lg mx-auto p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <p className="text-gray-600 mt-2">Credentials & Achievements</p>
      </div>

      {/* Card List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm p-4 bg-white"
          >
            {/* Card Media */}
            <img
              src={card.imgSrc}
              alt={card.imgAlt}
              className="w-24 h-24 bg-black rounded-lg mb-4"
            />

            {/* Card Content */}
            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600 mb-2">{card.badge}</p>
            <p className="text-gray-500 text-sm mb-4 line-clamp-3">
              {card.content}
            </p>

            {/* Certificate Link */}
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              {card.linkText} →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
