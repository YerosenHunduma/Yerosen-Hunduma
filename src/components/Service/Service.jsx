import { FaHtml5 } from "react-icons/fa";
import { BsArrowsFullscreen, BsCart4, BsCodeSlash } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGoogleoptimize } from "react-icons/si";
import { FadeIn } from "../Banner/FadeIn";
import Titles from "../Layout/Titles";
import Card from "./Card";

function Service() {
	return (
		<section
			id="features"
			className="w-full py-20  border-b-[1px] border-b-gray-400"
		>
			<FadeIn>
				<Titles title="Service" des="Services what I offer" />
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
					<Card
						title="Web App Development"
						des="Design and create websites or web app using programming languages, markup languages,and other technologies."
						icon={<FaHtml5 />}
					/>
					<Card
						title="App Development"
						des="I can develop fully responsive websites, ensuring that they adapt and display optimally across various devices and screen sizes."
						icon={<BsArrowsFullscreen />}
					/>
					<Card
						title="Customer Support
					"
						des="Assisting clients with any issues or questions they may have regarding the functionality or performance of their websites."
						icon={<BiSupport />}
					/>
					<Card
						title="E-commerce Integration"
						des="Creating and designing an online shopping platform that enables both buyers and sellers to transact securely, offering a range of trusted payment options."
						icon={<BsCart4 />}
					/>
					<Card
						title="Search Engine Optimization"
						des="Implement SEO best practices to improve a website's visibility in search engine results pages (SERPs), helping clients reach a wider audience."
						icon={<SiGoogleoptimize />}
					/>
					<Card
						title="Code Reviews and Pair Programming"
						des="Collaborate with colleagues through code reviews and pair programming sessions to catch issues and learn from each other."
						icon={<BsCodeSlash />}
					/>
				</div>
			</FadeIn>
		</section>
	);
}

export default Service;
