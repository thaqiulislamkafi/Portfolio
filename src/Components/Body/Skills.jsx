import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaNodeJs,
	FaFire,
	FaCuttlefish,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiCplusplus, SiExpress } from "react-icons/si";
import { BsStars } from "react-icons/bs";

const skills = [
	{
		icon: <FaHtml5 className="text-orange-500 text-4xl mb-3 mx-auto" />,
		label: "HTML",
	},
	{
		icon: <FaCss3Alt className="text-blue-500 text-4xl mb-3 mx-auto" />,
		label: "CSS",
	},
	{
		icon: <SiTailwindcss className="text-teal-500 text-4xl mb-3 mx-auto" />,
		label: "Tailwind CSS",
	},
	{
		icon: <BsStars className="text-purple-500 text-4xl mb-3 mx-auto" />,
		label: "DaisyUI",
	},
	{
		icon: <FaJs className="text-yellow-400 text-4xl mb-3 mx-auto" />,
		label: "JavaScript",
	},
	{
		icon: <FaReact className="text-cyan-500 text-4xl mb-3 mx-auto" />,
		label: "React",
	},
	{
		icon: <FaNodeJs className="text-green-600 text-4xl mb-3 mx-auto" />,
		label: "Node.js",
	},
	{
		icon: <SiExpress className="text-gray-700 text-4xl mb-3 mx-auto" />,
		label: "Express",
	},
	{
		icon: <SiMongodb className="text-green-500 text-4xl mb-3 mx-auto" />,
		label: "MongoDB",
	},
	{
		icon: <FaFire className="text-orange-600 text-4xl mb-3 mx-auto" />,
		label: "Firebase",
	},
];

const Skills = () => {
	return (
		<section id="skills" className="py-20 w-[85.94vw] mx-auto ">
			<div className="max-w-7xl mx-auto  sm:px-6 lg:px-18 bg-white py-30 rounded-xl my-20">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Skills & Technologies
					</h2>
					<div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition border border-gray-100 "
						>
							{skill.icon}
							<h3 className="text-sm font-semibold text-gray-800">
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
