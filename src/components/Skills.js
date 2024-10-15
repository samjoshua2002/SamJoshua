import React from 'react';
import { info } from '../constants/contents';
import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function Skills() {
    return (
        <div className='max-w-screen-lg mx-auto p-5'>
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold'>Skills</h1>
                <p className='text-sm mt-2 text-gray-600'>My Technical Skills</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
                {/* First Card */}
                <Card variant="outlined" className='border-gray-300 w-full mx-auto'>
                    <CardContent>
                        <Typography variant="h6" component="h3" className='text-center font-bold text-gray-700 mb-5'>
                            {info[0].title}
                        </Typography>
                        <div className='grid grid-cols-2 justify-center mt-5 gap-x-6 gap-y-4'>
                            {info[0].content.map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    className='flex items-center justify-start gap-2'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                >
                                    <span className='text-xl text-gray-500'>{skill.icon}</span>
                                    <span className='text-sm font-bold text-gray-500'>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Second Card */}
                <Card variant="outlined" className='border-gray-300 w-full mx-auto'>
                    <CardContent>
                        <Typography variant="h6" component="h3" className='text-center font-bold text-gray-700 mb-5'>
                            {info[1].title}
                        </Typography>
                        <div className='grid grid-cols-2 mt-5 justify-center gap-x-6 gap-y-4'>
                            {info[1].content.map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    className='flex items-center justify-start gap-2'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                >
                                    <span className='text-xl text-gray-500'>{skill.icon}</span>
                                    <span className='text-sm font-bold text-gray-500'>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Third Card */}
                <Card variant="outlined" className='border-gray-300 w-full mx-auto md:col-span-2 md:row-span-2'>
                    <CardContent>
                        <Typography variant="h6" component="h3" className='text-center font-bold text-gray-700 mb-5'>
                            {info[2].title}
                        </Typography>
                        <div className='grid grid-cols-2 mt-5 justify-center gap-x-6 gap-y-4'>
                            {info[2].content.map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    className='flex items-center justify-start gap-2'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                >
                                    <span className='text-xl text-gray-500'>{skill.icon}</span>
                                    <span className='text-sm font-bold text-gray-500'>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Skills;
