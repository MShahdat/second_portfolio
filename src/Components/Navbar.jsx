import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-black text-white pz-8 md:px-16 lg:px-24'>
            <div className='container py-2 flex justify-center md:justify-between items-center'>
                <div className='font-bold text-2xl hidden md:inline'>
                    Shahdat Hossain
                </div>
                <div className='space-x-6 font-semibold'>
                    <a className='hover:text-gray-400' href='#home'> Home</a>
                    <a className='hover:text-gray-400' href='#about'> About</a>
                    <a className='hover:text-gray-400' href='#services'>Services</a>
                    <a className='hover:text-gray-400' href='#projects'>Projects</a>
                    <a className='hover:text-gray-400' href='#contact'> Contact</a>
                </div>
            </div>
        </div> 
    );
};

export default Navbar;