import React, { useState } from 'react';
import CustomTextField from './TextField'; // Adjust the path if needed
import { IoSend } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const Details = [
        { icons: <MdMailOutline />, name: "Email", sub: "samjoshuacs2002@gmail.com", content: "Write to Me", link: "mailto:samjoshuacs2002@gmail.com" },
        { icons: <MdMailOutline />, name: "LinkedIn", sub: "Sam Joshua P", content: "Let's Connect", link: "https://www.linkedin.com/in/sam-joshua-03082002p/" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message });

        // Reset the form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='max-w-4xl mx-auto p-5'>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold'>Contact Me</h1>
                <p className='text-sm pt-2'>Get In Touch</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
                <div>
                    <h2 className='text-2xl font-semibold mb-4 text-center'>Talk To Me</h2>
                    <ul className=' items-center space-y-4 w-80 mx-auto'>
                        {Details.map((detail, index) => (
                            <li key={index} className='flex flex-col items-center text-center border border-gray-300 w-full md:w-80 p-4 rounded-lg'>
                                <p className='text-2xl mb-2'>{detail.icons}</p>
                                <p className='font-semibold'>{detail.name}</p>
                                <p className='text-gray-600'>{detail.sub}</p>
                                <div className='flex items-center gap-2'>
                                    <p className='text-gray-800'>{detail.content}</p>
                                    <a href={detail.link} target="_blank" rel="noopener noreferrer">
                                        <FaArrowRight className='text-gray-800 cursor-pointer text-md scale-x-95 transition-transform duration-300 ease-in-out hover:translate-x-2' />
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='text-center'>
                    <h2 className='text-2xl font-semibold mb-4'>Write Me Your Message</h2>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <CustomTextField
                            id="name"
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            rows={1}
                        />
                        <CustomTextField
                            id="email"
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            rows={1}
                        />
                        <CustomTextField
                            id="message"
                            label="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            multiline
                            rows={3}
                        />

                        <button
                            type="submit"
                            className='flex items-center justify-center text-lg border border-black rounded-lg p-3 w-48 gap-2 bg-black text-white hover:bg-gray-800 transition-colors duration-300 mx-auto'
                        >
                            Submit <IoSend className='ml-2' />
                        </button>


                    </form>
                </div>


            </div>
        </div>
    );
}

export default Contact;
