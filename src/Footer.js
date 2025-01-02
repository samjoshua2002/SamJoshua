import React from 'react';
import { Link } from 'react-scroll';
import { Details, socialLinks } from './constants/contents';

const sections = [
  { name: "About", to: "about" },
  { name: "Project", to: "project" },
  { name: "Skills", to: "skills" }
];

 function Footer() {
  return (
    <footer className="bg-gray-50 text-center py-6 border-t border-gray-300">
      <div className="max-w-xl mx-auto">
        <h2 className="text-xl font-bold text-slate-900 mb-2">{Details.name}</h2>
        
        <ul className='flex justify-center gap-4 mt-1 mb-4'>
          {sections.map((section,i)=>(
            <li key={i}>
              <Link to={section.to} smooth={true} className='text-black text-sm hover:text-gray-600'>{section.name}</Link>
            </li>
          ))}

        </ul>
        <ul className="flex justify-center gap-4 mb-4">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a
                href={social.link}
                
                className="text-black text-lg hover:text-gray-600"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
        <div className=" my-4"></div>
        <div className="mt-4">
          <p className="text-xs mb-1">Built with React JS & Tailwind CSS</p>
          <p className="text-xs mb-1">Hosted on Vercel</p>
          <p className="text-xs">All Rights Reserved. ©</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
