import React from 'react';
import { FaAlignJustify, FaFacebook, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Navbar = ({ showSideBar, setShowSideBar }) => {

  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  }
  return (

    <div>
      <div className='flex items-center justify-between w-[85.94vw]  md:w-[80.94vw] mx-auto inter-font'>

        <div onClick={handleSideBar}>
          <FaAlignJustify  color='white' className='lg:mr-15 cursor-pointer text-xl md:text-3xl' />
        </div>

        <div className='flex items-center gap-3 '>
          <a
            href="https://linkedin.com/in/thaqiulislamkafi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              className='btn btn-sm md:btn-md btn-ghost text-gray-200 bg-gray-800 rounded-full p-2 hover:border hover:border-sky-600'
              
            />
          </a>

          <a
            href="https://github.com/thaqiulislamkafi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              
              className='btn btn-sm md:btn-md rounded-full p-2 btn-ghost text-gray-200 bg-gray-800 hover:border hover:border-sky-600'
            />
          </a>

          <a
            href="https://facebook.com/thaqiulislamkafi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              
              className='btn btn-sm md:btn-md rounded-full p-2 btn-ghost text-gray-200 bg-gray-800 hover:border hover:border-sky-600'
            />
          </a>

          <a
            href="https://twitter.com/thaqiulislam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter
              className='btn btn-sm md:btn-md rounded-full p-2 btn-ghost text-gray-200 bg-gray-800 hover:border hover:border-sky-600'
              
            />
          </a>
        </div>

        <div className='btn  btn-ghost btn-sm md:btn-md bg-sky-500 rounded-4xl text-white '>
          Resume
        </div>
      </div>
    </div>
  );
};

export default Navbar;