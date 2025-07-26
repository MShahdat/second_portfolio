import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='bg-black text-white py-20'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h1 className='text-4xl font-bold text-center mb-12'>Contact Me</h1>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <div className='flex-1'>
                        <h2 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-4'>Let's Talk</h2>
                        <p>
                            I'm open to discuss web development projects.
                        </p>
                        <div className='mb-3 mt-8 text-blue-600'>
                            <a href='#'> mdshahdat@gmail.com</a>
                        </div>
                        <div className='mb-3'>
                            <span>+8801885374041</span>
                        </div>
                        <div className='mb-3'>
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                    <div className='flex-1 w-full'>
                        <form className='space-y-4'>
                            <div>
                                <label className='block mb-2'>Your Name</label>
                                <input className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400' type='text' placeholder='Enter your name'></input>
                            </div>
                            <div>
                                <label className='block mb-2'>Your Email</label>
                                <input className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400' type='email' placeholder='Enter your email'></input>
                            </div>
                            <div>
                                <label className='block mb-2'>Your Message</label>
                                <textarea className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400' type='text' rows={5} placeholder='Enter your message'></textarea>
                            </div>
                            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold hidden md:inline transform transition-transform duration-300 hover:scale-105 px-5 py-1 rounded-full'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;