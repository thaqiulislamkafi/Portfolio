import React from "react";
import { MdDownload } from "react-icons/md";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const About = () => {
  const [text] = useTypewriter({
    words: ["React", "MongoDB", "Express.js", "Firebase"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 my-30 rounded-xl shadow-lg py-20 relative w-[85.94vw] md:w-[80.94vw] mx-auto text-white">
      {/* Profile Icon */}
      <div className="p-3 absolute -top-18 left-1/2 transform -translate-x-1/2 text-center rounded-full bg-gray-800 border border-gray-700 shadow-lg">
        <img
          className="rounded-full w-30"
          src="https://i.postimg.cc/RZY9JDYj/git-pro-pic.png"
          alt=""
        />
      </div>

      {/* Content */}
      <div className="text-center inter-font px-6 mt-4">
        <p className="text-3xl md:text-4xl mb-3 font-extrabold inter-font">
          Thaqi Ul Islam Kafi
        </p>
        <p className="text-xl md:text-2xl mb-8 font-semibold inter-font text-sky-500">
          Web Developer || Expert in {text}
          <Cursor cursorStyle="|" />
        </p>

        <p className="max-w-4xl mx-auto md:text-lg text-gray-300 font-medium mb-10">
          Hi! I’m a web Developer with expertise in the MERN stack and backend
          technologies like Node.js, Express.js. I specialize in building
          scalable, secure, and high-performance web applications. I’m
          passionate about solving complex problems, learning new technologies
          like Algorithms, MySQL, and advanced Node.js, and turning ideas into
          impactful projects. Welcome to my portfolio — explore my latest works
          and real-world case studies!
        </p>

        <button className="btn btn-ghost rounded-3xl text-white bg-sky-500 hover:bg-sky-600 px-6">
          Download CV <MdDownload />
        </button>
      </div>
    </div>
  );
};

export default About;
