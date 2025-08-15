import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaNodeJs,
	FaFire,
} from "react-icons/fa";
import {
	SiTailwindcss,
	SiMongodb,
	SiExpress,
} from "react-icons/si";
import { BsStars } from "react-icons/bs";

const skills = [
	{ icon: <FaHtml5 className="text-orange-500 text-4xl mb-3 mx-auto" />, label: "HTML" },
	{ icon: <FaCss3Alt className="text-blue-500 text-4xl mb-3 mx-auto" />, label: "CSS" },
	{ icon: <SiTailwindcss className="text-teal-500 text-4xl mb-3 mx-auto" />, label: "Tailwind CSS" },
	{ icon: <BsStars className="text-purple-500 text-4xl mb-3 mx-auto" />, label: "DaisyUI" },
	{ icon: <FaJs className="text-yellow-400 text-4xl mb-3 mx-auto" />, label: "JavaScript" },
	{ icon: <FaReact className="text-cyan-500 text-4xl mb-3 mx-auto" />, label: "React" },
	{ icon: <FaNodeJs className="text-green-600 text-4xl mb-3 mx-auto" />, label: "Node.js" },
	{ icon: <SiExpress className="text-gray-300 text-4xl mb-3 mx-auto" />, label: "Express" },
	{ icon: <SiMongodb className="text-green-500 text-4xl mb-3 mx-auto" />, label: "MongoDB" },
	{ icon: <FaFire className="text-orange-600 text-4xl mb-3 mx-auto" />, label: "Firebase" },
];

const Skills = () => {
	return (
		<section id="skills" className="py-20 w-[85.94vw] md:w-[80.94vw] mx-auto">
			<div className="max-w-7xl mx-auto sm:px-6 lg:px-18 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-30 rounded-xl my-20 ">
				
				{/* Heading */}
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
						Skills & Technologies
					</h2>
					<div className="w-30 h-1 bg-sky-500 mx-auto rounded-full"></div>
				</div>

				{/* Skills Grid */}
				<div className="grid grid-cols-2 px-10 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="bg-gray-800 rounded-xl p-3 md:p-6 shadow-md hover:shadow-lg hover:shadow-gray-700 hover:scale-105 transition border duration-500 border-gray-700"
						>
							{skill.icon}
							<h3 className="text-sm font-semibold text-gray-200">
								{skill.label}
							</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
