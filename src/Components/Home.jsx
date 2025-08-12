import React from 'react';
import Navbar from './Navbar';
import About from './Body/About';
import Projects from './Body/Projects';
import Skills from './Body/Skills';
import AboutMe from './Body/AboutMe';
import Contact from './Body/Contact';
import Education from './Body/Education';
import SideNavbar from './SideNavbar';
import MobileNavbar from './MobileNavbar';

const Home = () => {

    return (
        <div className='bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'>
            <div className='py-5'>
                <Navbar />
                <SideNavbar/>
                <MobileNavbar/>
                <About/>
                <AboutMe/>
                <Projects/>
                <Skills/>
                <Education/>
                <Contact/>
                
            </div>
        </div>
    );
};

export default Home;