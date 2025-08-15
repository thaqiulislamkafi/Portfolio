import React from "react";
import { FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {
  return (
    <div id="education" className="w-[85.94vw] md:w-[80.94vw] mx-auto my-20 rounded-xl  text-white md:p-10 inter-font">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Left Side */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="md:text-lg leading-relaxed mb-8">
            I’m currently pursuing my Bachelor’s degree in{" "}
            <span className="font-semibold">Computer Science & Engineering</span> at Premier University, Chittagong.
            This journey began in 2023, and I’m dedicated to mastering both
            theoretical concepts and practical applications in computer science.
          </p>

          {/* Info Bar */}
          <div className="grid grid-cols-3 gap-0 bg-opacity-10 rounded-lg md:p-6 ">
            <div className="flex flex-col items-center text-center ">
              <FaUniversity className="text-xl md:text-3xl mb-2" />
              <h3 className="font-semibold md:text-lg">Department</h3>
              <p className="text-sm">Computer & Science Engineering</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaCalendarAlt className="text-xl md:text-3xl mb-2" />
              <h3 className="font-semibold tmd:ext-lg">Session</h3>
              <p className="text-sm">2023 - Present</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaMapMarkerAlt className="text-xl md:text-3xl mb-2" />
              <h3 className="font-semibold temd:xt-lg">Location</h3>
              <p className="text-sm">Chittagong, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full border-l-4 border-indigo-100"></div>

          {/* Bullet Points */}
          <div className="ml-12 space-y-10">
            {/* Completed Learn */}
            <div className="relative group ">
              <div className="absolute top-0.5 -left-[38px] w-6 h-6 bg-indigo-100 rounded-full border-4 border-gray-900 transition-colors duration-300 group-hover:bg-sky-500"></div>
              <h3 className="text-xl font-semibold mb-1">Completed Learn</h3>
              <p className="text-sm text-gray-300">
                OOP with Java, Data Structure, Internet Programming — These courses built my foundation in programming paradigms, problem-solving strategies, and web application fundamentals.
              </p>
            </div>

            {/* Current Learning */}
            <div className="relative group">
              <div className="absolute top-0.5 -left-[38px] w-6 h-6 bg-indigo-100 rounded-full border-4 border-gray-900 transition-colors duration-300 group-hover:bg-sky-500"></div>
              <h3 className="text-xl font-semibold mb-1">Currently Learning</h3>
              <p className="text-sm text-gray-300">
                Microprocessor, Algorithm, DBMS with MySQL — Expanding my skills into low-level hardware control, optimization techniques, and robust database management for scalable applications.
              </p>
            </div>

            {/* Projects */}
            <div className="relative group">
              <div className="absolute -left-[38px] top-0.5 w-6 h-6 bg-indigo-100 rounded-full border-4 border-gray-900 transition-colors duration-300 group-hover:bg-sky-500"></div>
              <h3 className="text-xl font-semibold mb-1">Projects</h3>
              <p className="text-sm text-gray-300">
                Completed <span className="font-semibold">Online Education Platform</span> (Internet Programming) — a web-based system for learning and course management, and <span className="font-semibold">Book Management</span> desktop application (JavaFX) — a GUI app for organizing, adding, and tracking books efficiently.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;
