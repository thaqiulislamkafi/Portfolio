import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Navbar = () => {

    const handleDarkMode = ()=>{

    }
    return (

        <div>
            <div className='flex items-center justify-between w-[80.94vw] mx-auto'>

                <div>
                <div>
                        <label className="flex cursor-pointer gap-2 hidden md:flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path
                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            <input type="checkbox" value="synthwave" className="toggle theme-controller " onClick={handleDarkMode} />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label>
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <FaLinkedinIn className='btn rounded-full p-2' size={20} /> <FaGithub size={20} className='btn rounded-full p-2' /> <FaFacebook size={20} className='btn rounded-full p-2' /> <FaYoutube className='btn rounded-full p-2' size={20} />
                </div>
                <div className='btn rounded-xl'>
                    Hire Me
                </div>
            </div>
        </div>
    );
};

export default Navbar;