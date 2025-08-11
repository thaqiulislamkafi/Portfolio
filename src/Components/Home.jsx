import React from 'react';
import Navbar from './Navbar';
import About from './Body/About';
import Projects from './Body/Projects';
import Skills from './Body/Skills';

const Home = () => {

    return (
        <div className='bg-gray-50'>
            <div className='py-5'>
                <Navbar />
                <About/>
                <Projects/>
                <Skills/>
            </div>
        </div>
    );
};

export default Home;