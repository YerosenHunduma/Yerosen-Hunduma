import React from "react";

function Titles({ title, des }) {
	return (
		<div>
			<div className="flex flex-col gap-4 font-titleFont mb-14">
				<h3 className="text-xl uppercase font-500 text-designColor tracking-wide">
					{title}
				</h3>
				<h1 className="text-4xl md:text-5xl text-black font-bold capitalize">
					{des}
				</h1>
			</div>
		</div>
	);
}

export default Titles;
