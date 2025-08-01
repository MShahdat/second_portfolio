import React from 'react';

const Hero = () => {
    return (
        <div className='bg-black text-white text-center py-16'>
            <img className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-500 hover:scale-150' src='/src/Images/sxfdsdf.jpg'></img>
            <h2 className='text-4xl font-bold'>I'm {' '} 
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Shahdat Hossain</span>
                , Frontend Developer
            </h2>
            <p className='mt-4 text-lg text-gray-300'>
                I specialize in building modern and responsive web application.
            </p>
            <div className='mt-8 space-x-5'>
                <button id='contact' className='bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
                <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
            </div>
        </div>
    );
};

export default Hero;