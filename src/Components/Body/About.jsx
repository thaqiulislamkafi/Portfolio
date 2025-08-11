import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

const About = () => {
	return (
		<div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 my-30 rounded-xl shadow-lg py-20 relative w-[85.94vw] mx-auto text-white">
			{/* Profile Icon */}
			<div className="p-3 absolute -top-18 left-1/2 transform -translate-x-1/2 text-center rounded-full bg-gray-800 border border-gray-700 shadow-lg">
				<FaRegUserCircle size={110} className="text-gray-300" />
			</div>

			{/* Content */}
			<div className="text-center space-y-6 inter-font px-6">
				<p className="text-4xl font-extrabold inter-font">
					Thaqi Ul Islam Kafi
				</p>

				<p className="max-w-2xl mx-auto text-lg text-gray-300 font-medium">
					Hi! I’m a Senior Developer with more than ten years of experience
					working in mobile banking apps. I specialize in delivering secure,
					high-performance solutions. Welcome to my online portfolio! Check out
					my latest projects and case studies.
				</p>

				<button className="btn btn-ghost rounded-3xl text-white bg-sky-500 hover:bg-sky-600 px-6">
					Download CV <MdDownload />
				</button>
			</div>
		</div>
	);
};

export default About;
