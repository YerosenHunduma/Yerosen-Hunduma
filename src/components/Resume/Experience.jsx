import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import ResumeCard from "./ResumeCard";

function Experience() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
		>
			<div className=" pt-14 font-titleFont  items-center text-center">
				<h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
			</div>
			<div className="mt-6 lgl:mt-14 w-full h-full flex flex-col lgl:flex-row gap-10">
				<div className="w-[100%]">
					<div>
						<div className="mt-14 w-full h-[300px] border-l-[5px] border-l-gray-400 border-opacity-30 flex flex-col gap-10">
							<ResumeCard
								title="MERN Web App Development"
								result={<FaCheckCircle />}
								des="I am experienced in building web applications with utmost efficiency. using html, css,Bootstrap,Tailwind, js,react,nodejs,mysql,"
							/>
						</div>
					</div>
				</div>
				<div className="w-[100%]">
					<div>
						<div className="mt-14 w-full h-[300px] border-l-[5px] border-l-gray-400 border-opacity-30 flex flex-col gap-10">
							<ResumeCard
								title="Developing REST APIs"
								result={<FaCheckCircle />}
								des="Development of RESTful APIs using Node.js and Express, ensuring robust back-end functionality and data management for various projects."
							/>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Experience;
