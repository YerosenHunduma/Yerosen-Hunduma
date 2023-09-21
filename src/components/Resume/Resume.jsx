import { useState } from "react";
import { FadeIn } from "../Banner/FadeIn";
import Titles from "../Layout/Titles";
import Eductional from "./Eductional";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
function Resume() {
	const [education, setEducation] = useState(true);
	const [skills, setSkills] = useState(false);
	const [experience, setExperience] = useState(false);
	const [projects, setProjects] = useState(false);
	return (
		<section
			id="resume"
			className="w-full py-20  border-b-[1px] border-b-gray-400"
		>
			<FadeIn>
				<div className="flex justify-center items-center text-center">
					<Titles title="Full Stack Web Developer" des="My Resume" />
				</div>
				<div>
					<ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
						<li
							onClick={() => {
								setProjects(false) &
									setExperience(false) &
									setSkills(false) &
									setEducation(true);
							}}
							className={`${
								education
									? "border-designColor rounded-lg"
									: "border-transparent"
							} resumeLi`}
						>
							Education
						</li>
						<li
							onClick={() => {
								setProjects(false) &
									setExperience(false) &
									setSkills(true) &
									setEducation(false);
							}}
							className={`${
								skills ? "border-designColor rounded-lg" : "border-transparent"
							} resumeLi`}
						>
							Professional Skills
						</li>
						<li
							onClick={() => {
								setProjects(false) &
									setExperience(true) &
									setSkills(false) &
									setEducation(false);
							}}
							className={`${
								experience
									? "border-designColor rounded-lg"
									: "border-transparent"
							} resumeLi`}
						>
							Experience
						</li>
						<li
							onClick={() => {
								setProjects(true) &
									setExperience(false) &
									setSkills(false) &
									setEducation(false);
							}}
							className={`${
								projects
									? "border-designColor rounded-lg"
									: "border-transparent"
							} resumeLi`}
						>
							Projects
						</li>
					</ul>
				</div>
				{education && <Eductional />}
				{skills && <Skills />}
				{experience && <Experience />}
				{projects && <Projects />}
			</FadeIn>
		</section>
	);
}

export default Resume;
