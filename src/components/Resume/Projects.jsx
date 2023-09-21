import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

function Projects() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
		>
			<div className=" pt-14 font-titleFont  items-center text-center">
				<h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
			</div>
			<div className="mt-6 lgl:mt-14 w-full h-full flex flex-col lgl:flex-row gap-10">
				<div className="w-[100%]">
					<div>
						<div className="mt-14 w-full h-[300px] border-l-[5px] border-l-gray-400 border-opacity-30 flex flex-col gap-10">
							<ResumeCard
								title="Netflix-Clone"
								subTitle="Clone netflix movie website with API integration"
								result="2-3 days"
								des="Created a React-based Netflix clone, demonstrating web development skills and responsive UI design."
							/>
						</div>
					</div>
				</div>
				<div className="w-[100%]">
					<div>
						<div className="mt-14 w-full h-[300px] border-l-[5px] border-l-gray-400 border-opacity-30 flex flex-col gap-10">
							<ResumeCard
								title="Apple website Clone"
								subTitle="An Apple website clone with HTML, CSS, Bootstrap,JavaScript"
								result="3-4 days"
								des="Designed and constructed it again using reactjs Demonstrated meticulous attention to detail and proficiency in complex layouts and interactivity."
							/>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Projects;
