import React from "react";
import { motion } from "framer-motion";

function Skills() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
		>
			<div className="pt-14 font-titleFont flex justify-center items-center text-center">
				<h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
			</div>
			<div className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
				<div className="w-full lgl:w-1/2">
					<div className="mt-14 w-full flex flex-col gap-6">
						<div className="overflow-x-hidden">
							<p className="text-sm uppercase font-medium">HTML</p>
							<span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
								<motion.span
									initial={{ x: "-100%", opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									className="w-[99%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
								>
									<span className="absolute -top-7 right-0">99%</span>
								</motion.span>
							</span>
						</div>
						<div className="overflow-x-hidden">
							<p className="text-sm uppercase font-medium">CSS</p>
							<span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
								<motion.span
									initial={{ x: "-100%", opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									className="w-[94%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
								>
									<span className="absolute -top-7 right-0">94%</span>
								</motion.span>
							</span>
						</div>
						<div className="overflow-x-hidden">
							<p className="text-sm uppercase font-medium">JavaScript</p>
							<span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
								<motion.span
									initial={{ x: "-100%", opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
								>
									<span className="absolute -top-7 right-0">75%</span>
								</motion.span>
							</span>
						</div>
						<div className="overflow-x-hidden">
							<p className="text-sm uppercase font-medium">Bootstrap</p>
							<span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
								<motion.span
									initial={{ x: "-100%", opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
								>
									<span className="absolute -top-7 right-0">90%</span>
								</motion.span>
							</span>
						</div>
						<div className="overflow-x-hidden">
							<p className="text-sm uppercase font-medium">nodeJs</p>
							<span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
								<motion.span
									initial={{ x: "-100%", opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
								>
									<span className="absolute -top-7 right-0">80%</span>
								</motion.span>
							</span>
						</div>
					</div>
				</div>
				<div className="w-full lgl:w-1/2">
					<div className="lgl:mt-14 w-full flex flex-col gap-6">
						<div className="overflow-x-hidden">
							<p className="text-sm uppercase font-medium">ExpressJs</p>
							<span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
								<motion.span
									initial={{ x: "-100%", opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									className="w-[79%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
								>
									<span className="absolute -top-7 right-0">79%</span>
								</motion.span>
							</span>
						</div>
						<div className="overflow-x-hidden">
							<p className="text-sm uppercase font-medium">React</p>
							<span className="w-[77%] h-2 bgOpacity rounded-md inline-flex mt-2">
								<motion.span
									initial={{ x: "-100%", opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
								>
									<span className="absolute -top-7 right-0">77%</span>
								</motion.span>
							</span>
						</div>
						<div className="overflow-x-hidden">
							<p className="text-sm uppercase font-medium">Tailwind</p>
							<span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
								<motion.span
									initial={{ x: "-100%", opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									className="w-[78%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
								>
									<span className="absolute -top-7 right-0">78%</span>
								</motion.span>
							</span>
						</div>
						<div className="overflow-x-hidden">
							<p className="text-sm uppercase font-medium">MySql</p>
							<span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
								<motion.span
									initial={{ x: "-100%", opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									className="w-[92%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
								>
									<span className="absolute -top-7 right-0">92%</span>
								</motion.span>
							</span>
						</div>
						<div className="overflow-x-hidden">
							<p className="text-sm uppercase font-medium">MongoDB</p>
							<span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
								<motion.span
									initial={{ x: "-100%", opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
								>
									<span className="absolute -top-7 right-0">75%</span>
								</motion.span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Skills;
