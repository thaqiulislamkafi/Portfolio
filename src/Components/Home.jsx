import React from 'react';
import Navbar from './Navbar';
import About from './Body/About';
import Projects from './Body/Projects';
import Skills from './Body/Skills';
import AboutMe from './Body/AboutMe';
import Contact from './Body/Contact';

const Home = () => {

    return (
        <div className='bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'>
            <div className='py-5'>
                <Navbar />
                <About/>
                <AboutMe/>
                <Projects/>
                <Skills/>
                <Contact/>
            </div>
        </div>
    );
};

export default Home;