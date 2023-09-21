import React from "react";

function Card({ title, des, icon }) {
	return (
		<div className="w-full px-12 h-80 py-10 rounded-lg shadow-[#8c8c8c] flex items-center bg-gradient-to-r from-[#d9d9d9] to-[#ffffff] group hover:bg-gradient-to-br hover:from-[#9966ff] hover:to-[#ff6699] transition-colors duration-100 group">
			<div className="h-72 overflow-y-hidden">
				<div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
					<div className="gap-8 flex flex-col ">
						<div>
							<span className="text-5xl text-designColor">{icon}</span>
						</div>

						<div className="flex flex-col gap-6">
							<h2 className="text-xl md:text-2xl font-titleFont font-bold text-black">
								{title}
							</h2>
							<p className="base">{des}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
