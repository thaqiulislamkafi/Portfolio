import { CiMicrochip } from "react-icons/ci";
import { FaCode, FaLaptopCode, FaLightbulb, FaMicrochip } from "react-icons/fa";

const AboutMe = () => {
	return (
		<section
			id="about"
			className="py-20 w-[85.94vw] md:w-[80.94vw] mx-auto text-white rounded-xl my-20 inter-font"
		>
			<div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row lg:items-center gap-12 md:px-12">
				{/* Left Side - Timeline */}
				<div className="relative pl-8 border-l-4 border-indigo-100 lg:min-w-lg">
					{/* Timeline Item */}
					<div className="mb-8 relative group">
						<span className="absolute -left-[46px] top-0.5 w-6 h-6 bg-indigo-100 rounded-full border-4 border-gray-900 transition-colors duration-300 group-hover:bg-sky-500"></span>
						<h3 className="text-xl font-bold mb-2">My Programming Journey</h3>
						<p className="text-gray-300">
							Started with C, explored C++ to contribute in CP, and then Java through my university curriculum, building a strong programming foundation.
						</p>
					</div>

					<div className="mb-8 relative group">
						<span className="absolute -left-[46px] top-0.5 w-6 h-6 bg-indigo-100 rounded-full border-4 border-gray-900 transition-colors duration-300 group-hover:bg-sky-500"></span>
						<h3 className="text-xl font-bold mb-2">The Work I Enjoy</h3>
						<p className="text-gray-300">
							Passionate about creating new applications that solve problems and bring ideas to life.
						</p>
					</div>

					<div className="relative group">
						<span className="absolute -left-[46px] top-0.5 w-6 h-6 bg-indigo-100 rounded-full border-4 border-gray-900 transition-colors duration-300 group-hover:bg-sky-500"></span>
						<h3 className="text-xl font-bold mb-2">My Interest</h3>
						<p className="text-gray-300">
							Highly interested in Arduino projects and exploring hardware-based innovations.
						</p>
					</div>
				</div>

				{/* Right Side */}
				<div>
					<h2 className="text-3xl font-bold mb-6">About Me</h2>
					<p className="text-gray-300 mb-10">
						I’m a passionate full-stack developer who loves creating scalable
						applications with beautiful user interfaces and a strong focus on
						user experience. Every project I build is crafted with precision,
						clean code, and long-term maintainability in mind.
					</p>

					<div className="grid grid-cols-3 gap-6">
						<div className="flex flex-col items-center text-center">
							<FaLightbulb className="text-indigo-100 text-2xl md:text-4xl mb-3" />
							<span className="text-sm md:text-base font-semibold">Problem Solving Mindset</span>
						</div>

						<div className="flex flex-col items-center text-center">
							<FaLaptopCode className="text-indigo-100  text-2xl md:text-4xl mb-3" />
							<span className="text-sm md:text-base font-semibold">App Development</span>
						</div>

						<div className="flex flex-col items-center text-center">
							<CiMicrochip className="text-indigo-100  text-2xl md:text-4xl mb-3" />
							<span className="text-sm md:text-base  font-semibold">Interested about Arduino</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
