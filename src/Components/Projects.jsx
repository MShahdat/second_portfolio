import React from 'react';

import book1img from '../Images/a.jpg';
import booki2mg from '../Images/abc.jpg';
import book3img from '../Images/abcd.jpg';
import book4img from '../Images/b.jpg';
import book5img from '../Images/c.jpg';
import book6img from '../Images/xyz.jpg';

const projects = [
    {
        id: 1,
        name: 'Employee MS',
        technologies: 'MERN Stack',
        image: book1img,
        github: 'https://github.com/MShahdat',
    },
    {
        id: 2,
        name: 'Blog APP',
        technologies: 'MERN Stack',
        image: booki2mg,
        github: 'https://github.com/MShahdat',
    },
    {
        id: 1,
        name: 'Employee MS',
        technologies: 'MERN Stack',
        image: book3img,
        github: 'https://github.com/MShahdat',
    },
    {
        id: 1,
        name: 'Employee MS',
        technologies: 'MERN Stack',
        image: book4img,
        github: 'https://github.com/MShahdat',
    },
    {
        id: 1,
        name: 'Employee MS',
        technologies: 'MERN Stack',
        image: book5img,
        github: 'https://github.com/MShahdat',
    },
    {
        id: 1,
        name: 'Employee MS',
        technologies: 'MERN Stack',
        image: book6img,
        github: 'https://github.com/MShahdat',
    },
]
const Projects = () => {
    return (
        <div id='projects' className='bg-black text-white py-20'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((projects) => (
                        <div key={projects.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                            <img className='rounded-lg mb-4 w-full h-36 object-cover' src={projects.image}></img>
                            <h2 className='text-xl font-bold mb-2'>{projects.name} </h2>
                            <p className='text-sm font-semibold mb-2'>{projects.technologies}</p>
                            <a className='inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full' target='_blank' rel='noopener noreferrer' href={projects.github}>GitHub</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;