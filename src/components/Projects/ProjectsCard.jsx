import { BsGithub } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

function ProjectsCard({ title, des, src, git, web }) {
	return (
		<div className="w-full p-4 xl:px-8 h-auto xl:py-8 rounded-lg shadow-[#8c8c8c] flex flex-col bg-gradient-to-r from-[#d9d9d9] to-[#ffffff] group hover:bg-gradient-to-b hover:from-[#d9d9d9] hover:[#ffffff] transition-colors duration-1000">
			<div className="w-full h-[80%] overflow-hidden rounded-lg">
				<img
					className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
					src={src}
					alt="src"
				/>
			</div>
			<div className="w-full mt-5 flex flex-col  gap-6">
				<div>
					<div className="flex items-center justify-between">
						<h3 className="text-base uppercase text-designColor font-normal">
							{title}
						</h3>
						<div className="flex gap-2">
							<a href={git} target="_blank">
								<span className="text-lg w-10 h-10 rounded-full bg-gray-700 inline-flex justify-center items-center text-white hover:text-designColor duration-300 cursor-pointer">
									<BsGithub />
								</span>
							</a>
							<a href={web} target="_blank">
								<span className="text-lg w-10 h-10 rounded-full bg-gray-700 inline-flex justify-center items-center text-white hover:text-designColor duration-300 cursor-pointer">
									<TbWorldWww />
								</span>
							</a>
						</div>
					</div>
					<p className="text-sm tracking-wide mt-3 hover:text-gray-900 duration-300">
						{des}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ProjectsCard;
