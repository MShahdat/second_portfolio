import React from 'react';

const About = () => {
    return (
        <div className='bg-black text-white py-20'>
            <div id='about' className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row gap-8 items-center md:space-x-6'>
                    <div className='w-full px-4 md:w-1/2 md:px-0'>
                        <p className='text-lg'>
                            I am a passionate frontend developer with a focus on building modern and responsive we applications. With a strong foundation in both frontend, I strive to create seamless and efficient user experience.
                        </p>
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <div className='flex items-center gap-5 xl:gap-0'>
                            <label htmlFor='htmlandcss' className='w-3/12'>HTML & CSS</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 xl:gap-0'>
                            <label htmlFor='htmlandcss' className='w-3/12'>JavaScript</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 xl:gap-0'>
                            <label htmlFor='htmlandcss' className='w-3/12'>React Js</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className='pt-10 text-xl flex flex-col sm:flex-row justify-center text-center gap-8 sm:gap-20 '>
                        <div className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>
                            <h2>
                                1+
                            </h2>
                            <p>Years Experience</p>
                        </div>
                        <div className=' font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>
                            <h2>
                                10+
                            </h2>
                            <p>Projects Completed</p>
                        </div>
                        <div className=' font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>
                            <h2>
                                8+
                            </h2>
                            <p>Happy Clients</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default About;