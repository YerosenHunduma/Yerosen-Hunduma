import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
	FaTelegram,
	FaInstagram,
	FaLinkedinIn,
	FaReact,
	FaNodeJs,
	FaWhatsapp,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FadeIn } from "./FadeIn";

function LeftBanner() {
	const [text] = useTypewriter({
		words: ["Full Stack Dev.", "Freelancer."],
		loop: true,
		typeSpeed: 30,
		deleteSpeed: 20,
		delaySpeed: 2000,
	});
	return (
		<FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
			<div className="flex flex-col gap-5">
				<h4 className=" text-lg font-normal">Get to know me</h4>
				<h3 className="text-4xl font-bold text-black">
					Hi, I'm
					<span className="text-designColor capitalize"> Yerosen Hunduma</span>
				</h3>
				<h2 className="text-4xl font-bold text-black">
					<span>a {text}</span>
					<Cursor cursorStyle="|" cursorColor="#ff014f" />
				</h2>
				<p className="text-justify font-bodyFont leading-6 tracking-wider text-gray-700">
					I'm a skilled and enthusiastic web developer who combines technical
					expertise with a keen eye for design. With proficiency in front-end
					and back-end development, I create stunning websites that engage and
					fascinate users. Constantly staying up-to-date with the latest
					industry trends and best practices, Committed to delivering
					exceptional results, I am dedicated to quality and customer
					satisfaction.
				</p>
			</div>
			<div className="flex flex-col xl:flex-row gap-6  justify-between">
				<div>
					<h2 className="text-base uppercase font-titleFont mb-4">
						Find me in
					</h2>
					<div className="flex gap-4">
						<a
							href="https://instagram.com/_yerilax?igshid=OGQ5ZDc2ODk2ZA==
"
							target="_blank"
						>
							<span className="bannerIcon">
								<FaInstagram />
							</span>
						</a>
						<a
							href="https://www.linkedin.com/in/yerosen-hunduma-aa5079255"
							target="_blank"
						>
							<span className="bannerIcon">
								<FaLinkedinIn />
							</span>
						</a>
						<a href="https://www.t.me/Yeerilax" target="_blank">
							<span className="bannerIcon">
								<FaTelegram />
							</span>
						</a>
						<a href="https://wa.me/251965640602" target="_blank">
							<span className="bannerIcon">
								<FaWhatsapp />
							</span>
						</a>
					</div>
				</div>
				<div>
					<h2 className="text-base uppercase font-titleFont mb-4">
						BEST SKILL ON
					</h2>
					<div className="flex gap-4">
						<span className="bannerIcon">
							<FaReact />
						</span>
						<span className="bannerIcon">
							<SiJavascript />
						</span>
						<span className="bannerIcon">
							<FaNodeJs />
						</span>
					</div>
				</div>
			</div>
		</FadeIn>
	);
}

export default LeftBanner;
