import React from 'react'
import { GoLinkExternal } from "react-icons/go";
function Project() {
    const cardData = [
      {
        "imgSrc": "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/8b9fc1fa-bb42-45c6-957b-3b6611c542f1.png?ixlib=react-9.0.3&ch=Width%2CDPR&auto=format&w=4088",
        "imgAlt": "HackerRank Logo",
        "title": "Python Basics Certificate",
        "badge": "HackerRank",
        "content": "This certificate demonstrates proficiency in Python fundamentals, including data types, control structures, functions, and basic data structures and problem-solving techniques.",
        "link": "https://www.hackerrank.com/certificates/eb10c466597e",
        "linkText": "Certificate Link"
      },
      
        {
          imgSrc: "https://play-lh.googleusercontent.com/oDuTGEHru1KMr3QOfQfPKgIdNnlq3WWQxpBYND23r2a7RVnS1HW0t7dyON86Vn_QhtM=s180",
          imgAlt: "internshala Logo",
          title: "Core Java",
          badge: "Udemy",
          content: `The training consisted of Getting Started with Java, Leveraging Basic Concepts, Object Oriented 
Programming, and Java App Development modules. `,
          link: "https://www.udemy.com/certificate/UC-0e38beb0-08b0-400d-9cfc-67ed7efe5c5b/",
          linkText: "View Certificate",
        },
        {
          "imgSrc": "https://th.bing.com/th/id/OIP.6UcGSsW6bL2Q7DhoGgqZ2AAAAA?rs=1&pid=ImgDetMain",
          "imgAlt": "Udemy",
          "title": "Full-Stack Blog Project Application using Node.js, Express, React, and MongoDB",
          "badge": "Udemy",
          "content": "In this project, I developed a full-stack blogging application that allows users to create, edit, and delete posts. Express for the backend, along with React for the frontend,  This project enhanced my skills in MongoDB.",
          "link": "https://www.udemy.com/certificate/UC-bbc65957-6112-400e-9735-a8768a6ac5cd/",
          "linkText": "Certificate Link"
        },
        
        {
          "imgSrc": "https://th.bing.com/th/id/OIP.MZ0GavnVMQNAaNW_0u11aAHaE8?rs=1&pid=ImgDetMain",
          "imgAlt": "",
          "title": "Internship",
          "badge": "ARMTECH COMPUTER SERVICE Pvt. Ltd.",
          "content": "During my internship at ARMTECH COMPUTER SERVICE, I gained  experience in networking technologies. I learned about network configurations, troubleshooting, and optimizing network performance. ",
          "link": "",
          "linkText": "Certificate Link"
        },
        
      ];
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
