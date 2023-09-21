import { bannerImg } from "../../assets/index";
import { bannerImg2 } from "../../assets/index";
import { FadeIn } from "./FadeIn";

const RightBanner = () => {
	return (
		<FadeIn className="w-full lgl:w-1/2 flex justify-center items-center relative">
			<img
				className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
				src={bannerImg2}
				alt="bannerImg"
			/>
			<div
				className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#d9d9d9] to-[#ffffff] shadow-white flex justify-center items-center"
				style={{
					boxShadow: "0 0 10px rgb(204, 204, 204)",
				}}
			></div>
		</FadeIn>
	);
};

export default RightBanner;
