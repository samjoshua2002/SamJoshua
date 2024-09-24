import React from 'react';

import { Link } from 'react-scroll';
import { Details ,socialLinks} from './constants/contents';

function Footer() {
    const sections = [
        { name: "About", to: "about" },
        { name: "Project", to: "project" },
        { name: "Skills", to: "skills" }
    ];

    

    return (
        <div className='bg-gray-50 text-center p-6 border-t-2'>
            <p className='text-4xl font-semibold text-slate-900 mb-4'>{Details.name}</p>
            <div>
                <ul className='flex flex-wrap justify-center gap-5 mb-4'>
                    {sections.map((section, index) => (
                        <li key={index} className='text-center'>
                            <Link
                                to={section.to}
                                smooth={true}
                                duration={500}
                                offset={-70} // Adjust this value if you have a fixed navbar
                                className='block font-normal p-2 cursor-pointer'
                            >
                                {section.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className='flex justify-center gap-5 mb-4'>
                    {socialLinks.map((social, index) => (
                        <li key={index} className='text-center'>
                            <a href={social.link} className='block p-2 text-xl'>
                                {social.icon}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='text-xs mt-9'>
                    <p className='mb-2'>Built with React JS & Tailwind CSS</p>
                    <p className='mb-4'>Hosted on Vercel</p>
                    <p>All Rights Reserved. ©</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
