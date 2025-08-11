import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Projects = () => {

    const projects = [
        {
            image: 'https://i.postimg.cc/d157kYH9/Nestora-cover.png',
            title: 'Nestora', 
            description: 'Nestora is a real estate web application designed to connect property buyers, sellers, and agents in a secure and user-friendly platform. ',
            stack : ['react','express.js','mongodb','stripe']
        },
        {
            image: 'https://i.postimg.cc/pLjn03r2/eventure-cover.png',
            title: 'Eventure', 
            description: 'Nestora is a real estate web application designed to connect property buyers, sellers, and agents in a secure and user-friendly platform. ',
            stack : ['react','express.js','mongodb','firebase']

        },
        {
            image: 'https://i.postimg.cc/pLjn03r2/eventure-cover.png',
            title: 'Recipe Hut', 
            description: 'Nestora is a real estate web application designed to connect property buyers, sellers, and agents in a secure and user-friendly platform. ',
            stack : ['react','express.js','mongodb','firebase']

        }
    ]

    return (
        <div className='bg-white mt-50'>
            <div className='py-30  rounded-xl space-y-7 text-center inter-font  w-[85.94vw] mx-auto'>
                <p className='poppins-font font-extrabold text-4xl '>Featured Projects</p>

                <p className='gray-font font-medium max-w-230 mx-auto'>
                    Brief intro goes here. My main experience lies in building lorem ipsum dolor sit amet, consectetur adipiscing elit. I'm currently working on lacinia tristique.
                </p>

                <div className='flex gap-6 mx-10'>

                    {
                        projects.map(project => (
                            <div className='rounded-xl p-6 border border-gray-300 text-start space-y-2 shadow-sm hover:scale-105 transition-all duration-500'>
                                
                                <img src={project.image} className='rounded-xl w-80 object-cover hover:scale-105 transition-all duration-500' alt="" />

                                <div className='flex items-center gap-1 mt-4'>
                                    
                                {
                                    project.stack.map(stack => (
                                        <div className='rounded-2xl border border-sky-700 px-3 text-xs py-1'>
                                            {stack}
                                        </div>
                                    ))
                                }
                                </div>

                                <p className='font-bold text-xl'> Project Name : {project.title}</p>
                                <p className='font-medium'>Description : {project.description}</p>

                                

                                <div className='flex items-center gap-4'>
                                    <p className='btn btn-sm btn-outline '> <MdOutlineArrowOutward /> Live </p> 
                                    <p className='btn btn-sm btn-outline '><FaGithub /> Code</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;