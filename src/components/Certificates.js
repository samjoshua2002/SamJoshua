import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import Badge from './Badge.js'; // Adjust the import path as necessary

function Certificates() {
    const [select, setSelect] = useState('All');

    const cards = [
      {
        "id": 1,
        "category": "group",
        "image": "https://cdn.dribbble.com/users/1997192/screenshots/15359806/dribbble_final_post.png?compress=1&resize=400x300",
        "title": "Nike Website Clone",
        "content": "The Nike Website Clone is a full-stack application that replicates the essential features of the Nike online store. Built using React and Node.js, it provides a seamless shopping experience with product browsing, cart functionality, and secure checkout.",
        "technologies": ["HTML", "JavaScript", "React", "Node.js", "CSS"],
        "links": [
          {
            "icon": <FaGithub />,
            "name": "Github",
            "link": "https://github.com/samjoshua2002/Nike"
          },
          {
            "icon": <CiShare1 />,
            "name": "Visit",
            "link": "https://nike-red-omega.vercel.app/"
          }
        ]
      },
      {
        "id": 2,
        "category": "individual",
        "image": "https://s3-alpha.figma.com/hub/file/1271832110/cdcd2381-7724-4076-8bd6-97dbc4e30ac7-cover.png",
        "title": "YouTube Clone",
        "content": "This project is a full-stack application that replicates core features of YouTube, allowing users to search, watch, and upload videos. It leverages React for the front-end, with a seamless user experience for browsing video content and interacting with the platform.",
        "technologies": ["React", "Bootstrap", "Firebase"], // Change to array
        "links": [
          {
            "icon": <FaGithub />,
            "name": "Github",
            "link": "https://github.com/shakeen17/Paradise-Restaurant"
          },
          {
            "icon": <CiShare1 />,
            "name": "Visit",
            "link": "https://connect-us-sage.vercel.app/"
          }
        ]
      }
    ];

    
    return (
      <div className="max-w-screen-lg mx-auto p-5">
      {/* Section title */}
      <div className="text-center mb-5">
          <div className="text-3xl font-bold">My Portfolio</div>
          <div className="text-gray-500 text-md">Recent Works</div>
      </div>

      {/* Filter buttons */}
      <div className="flex w-full gap-6 items-center justify-center text-center">
          <button
              onClick={() => setSelect('All')}
              className={`p-2 rounded-full w-24 ${select === 'All' ? 'bg-gray-900 text-white' : 'bg-gray-400 text-gray-100'}`}
          >
              All
          </button>
          <button
              onClick={() => setSelect('Individual')}
              className={`p-2 size-md rounded-full w-24 ${select === 'Individual' ? 'bg-gray-900 text-white' : 'bg-gray-400 text-gray-100'}`}
          >
              Individual
          </button>
          <button
              onClick={() => setSelect('Group')}
              className={`p-2 size-md rounded-full w-24 ${select === 'Group' ? 'bg-gray-900 text-white' : 'bg-gray-400 text-gray-100'}`}
          >
              Group
          </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {cards.map((card) => (
              (select === 'All' || card.category.toLowerCase() === select.toLowerCase()) && (
                  <div key={card.id} className="border border-white p-2 rounded-3xl shadow-md">
                      <div className="p-5 rounded-lg flex flex-col items-start">
                          {/* Card image */}
                          <img
                              src={card.image}
                              className="w-full h-48 rounded-2xl mb-2"
                              alt={card.title}
                          />
                          {/* Card header */}
                          <h2 className="text-black text-xl font-semibold mb-1">
                              {card.title}
                          </h2>
                          {/* Card content */}
                          <p className="text-justify text-gray-600 h-36 mb-3">
                              {card.content}
                          </p>
                          {/* Card technologies */}
                          <div className="flex flex-wrap mt-4">
                              {card.technologies.map((tech, index) => (
                                  <Badge key={index} technology={tech} />
                              ))}
                          </div>
                          {/* Card links */}
                          <div className="flex gap-6 mt-4">
                              {card.links.map((s, index) => (
                                  <a key={index} href={s.link} className="flex items-center gap-2 text-md">
                                      {s.icon} {s.name}
                                  </a>
                              ))}
                          </div>
                      </div>
                  </div>
              )
          ))}
      </div>
  </div>
);
}

export default Certificates;