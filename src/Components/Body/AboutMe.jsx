import { FaServer, FaPaintBrush, FaSmile } from "react-icons/fa";

const AboutMe = () => {
	return (
		<section
			id="about"
			className="py-20 w-[80.94vw] mx-auto  text-white rounded-xl my-20 inter-font"
		>
			<div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row lg:items-center gap-12 md:px-12">
				{/* Left Side - Timeline */}
				<div className="relative pl-8 border-l-4 border-indigo-100">
					{/* Timeline Item */}
					<div className="mb-8 relative group ">
						<span className="absolute -left-[46px] top-0.5 w-6 h-6 bg-indigo-100 rounded-full border-4 border-gray-900 transition-colors duration-300 group-hover:bg-sky-500"></span>
						<h3 className="text-xl font-bold mb-2">Scalability</h3>
						<p className="text-gray-300">
							I design backend architectures and frontend structures that scale
							efficiently with growing data and users.
						</p>
					</div>

					<div className="mb-8 relative group ">
						<span className="absolute -left-[46px] top-0.5 w-6 h-6 bg-indigo-100 rounded-full border-4 border-gray-900 transition-colors duration-300 group-hover:bg-sky-500 "></span>
						<h3 className="text-xl font-bold mb-2">Amazing UI</h3>
						<p className="text-gray-300">
							My projects prioritize beautiful, modern, and responsive user
							interfaces that provide a seamless experience.
						</p>
					</div>

					<div className="relative group ">
						<span className="absolute -left-[46px] top-0.5 w-6 h-6 bg-indigo-100 rounded-full border-4 border-gray-900 transition-colors duration-300 group-hover:bg-sky-500"></span>
						<h3 className="text-xl font-bold mb-2">User Friendly</h3>
						<p className="text-gray-300">
							Every feature is developed with the end user in mind, ensuring
							simplicity and ease of use.
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
							<FaServer className="text-indigo-100 md:text-4xl mb-3" />
							<span className="font-semibold">Scalability</span>
						</div>

						<div className="flex flex-col items-center text-center">
							<FaPaintBrush className="text-indigo-100 md:text-4xl mb-3" />
							<span className="font-semibold">Amazing UI</span>
						</div>

						<div className="flex flex-col items-center text-center">
							<FaSmile className="text-indigo-100 md:text-4xl mb-3" />
							<span className="font-semibold">User Friendly</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
