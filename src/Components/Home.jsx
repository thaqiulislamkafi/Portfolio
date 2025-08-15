import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './Body/About';
import Projects from './Body/Projects';
import Skills from './Body/Skills';
import AboutMe from './Body/AboutMe';
import Contact from './Body/Contact';
import Education from './Body/Education';
import SideNavbar from './SideNavbar';
import MobileNavbar from './MobileNavbar';
import Footer from './Footer';

const Home = () => {

    const [showSideBar, setShowSideBar] = useState(true);

    return (
        <div className='bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'>
            <div className='py-5'>
                <Navbar showSideBar={showSideBar} setShowSideBar = {setShowSideBar} />
                <SideNavbar showSideBar={showSideBar} setShowSideBar = {setShowSideBar} />
                <MobileNavbar />
                <About />
                <AboutMe />
                <Projects />
                <Skills />
                <Education />
                <Contact />
                <Footer/>

            </div>
        </div>
    );
};

export default Home;