import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

const About = () => {
    return (
        <div className='bg-white my-30 rounded-xl shadow-sm  py-20 relative w-[85.94vw] mx-auto'>

            <div className='p-3 absolute -top-18 left-130 text-center justify-center rounded-full bg-white'>
            <FaRegUserCircle size={110} />
            </div>

            <div className='text-center space-y-6 inter-font justify-center'>
                <p className='text-4xl font-extrabold inter-font'>Thaqi Ul Islam Kafi</p>

                <p className='max-w-190 mx-auto text-lg gray-font  font-medium'>Hi! I’m a Senior Developer with more than ten years of experience working in mobile banking apps. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Welcome to my online portfolio! Check out my latest projects and case studies.</p>

                <button className='btn rounded-3xl  text-white bg-sky-900'>Download CV <MdDownload /></button>
            </div>
        </div>
    );
};

export default About;