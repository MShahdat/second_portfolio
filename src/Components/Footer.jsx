import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-black text-white py-8'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                    <div className='flex-1 mb-4 md:mb-0'>
                        <h2 className='text-2xl font-bold mb-2'>Shahdat Hossain</h2>
                        <p className='text-gray-400'>Frontend Developer based in the Bangladesh, specializing in web and software development</p>
                    </div>
                    <div className='flex-1 w-full'>
                        <form className='flex items-center justify-between'>
                            <input className='w-full p-1 rounded-xl bg-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400' type='email' placeholder='Enter Email'></input>
                            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1 rounded-lg'>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className='border-t border-gray-600 pt-4 flex flex-cols md:flex-row justify-between items center' >
                    <p className='text-gray-400'>
                        @copy {new Date().getFullYear()} Shahdat Hossain. All rights reserved
                    </p>
                    <div className='flex space-x-4'>
                        <a className='text-gray-400 hover:text-white' href='#'>Privacy</a>
                        <a className='text-gray-400 hover:text-white' href='#'>Terms of Services</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;