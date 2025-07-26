import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-black text-white pz-8 md:px-24 lg:px-50'>
            <div className=' py-3 flex items-center justify-center md:justify-between'>
                <div className='font-bold text-2xl hidden md:inline'>
                    Portfolio
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