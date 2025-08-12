import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const Projects = () => {
	const projects = [
		{
			image: "https://i.postimg.cc/d157kYH9/Nestora-cover.png",
			title: "Nestora",
			description:
				"Nestora is a real estate web application designed to connect property buyers, sellers, and agents in a secure and user-friendly platform.",
			stack: ["React", "Express.js", "MongoDB", "Stripe"],
			live_link : 'https://thaqiulislamkafi-assignment-12.netlify.app/',
			server_side : 'https://github.com/thaqiulislamkafi/Nestora'
		},
		{
			image: "https://i.postimg.cc/pLjn03r2/eventure-cover.png",
			title: "Eventure",
			description:
				"Eventure is an event management web app for booking, managing, and tracking events seamlessly.",
			stack: ["React", "Express.js", "MongoDB", "Firebase"],
			live_link : 'https://thaqiulislamkafi-assignment-11.netlify.app/',
			server_side : 'https://github.com/thaqiulislamkafi/Eventure'
		},
		{
			image: "https://i.postimg.cc/vHzZTXbs/recipehut.png",
			title: "Recipe Hut",
			description:
				"Recipe Hut is a recipe-sharing platform where users can browse, upload, and save recipes with ease.",
			stack: ["React", "Express.js", "MongoDB", "Firebase"],
			live_link : 'https://thaqiulislamkafi-assignment-10.netlify.app/',
			server_side : 'https://github.com/thaqiulislamkafi/RecipiHut-client-side'
		},
	];

	return (
		<div id="projects" className="bg-gradient-to-b from-gray-900 via-gray-800 to-transparent py-20 inter-font">
			<div className="rounded-xl space-y-7 text-center w-[80.94vw] mx-auto">
				<p className=" font-extrabold text-4xl text-white">
					Featured Projects
				</p>

				<p className="text-gray-300 font-medium max-w-2xl mx-auto">
					A collection of some of my best work. Each project reflects my skills in
					full-stack development and my passion for creating engaging, functional,
					and user-friendly applications.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 mt-10">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-start shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 max-w-sm"
						>
							<img
								src={project.image}
								className="rounded-xl w-full h-48 object-cover hover:scale-105 transition-all duration-500"
								alt={project.title}
							/>

							<div className="flex flex-wrap items-center gap-2 mt-4">
								{project.stack.map((stack, i) => (
									<div
										key={i}
										className="rounded-2xl border border-sky-500 text-sky-400 px-3 text-xs py-1"
									>
										{stack}
									</div>
								))}
							</div>

							<p className="font-bold text-xl text-white mt-4">
								{project.title}
							</p>
							<p className="font-medium text-gray-300 text-sm">
								{project.description}
							</p>

							<div className="flex items-center gap-4 mt-4">
								<a
									href={project.live_link}
									target="_blank"
									className="btn btn-sm btn-outline border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white transition"
								>
									<MdOutlineArrowOutward /> Live
								</a>
								<a
									href={project.server_side}
									target="_blank"
									className="btn btn-sm btn-outline border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-black transition" 
								>
									<FaGithub /> Code
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
