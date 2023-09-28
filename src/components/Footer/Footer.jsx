import React from "react";
import {
	FaTelegram,
	FaLinkedinIn,
	FaInstagram,
	FaWhatsapp,
	FaGithub,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { FadeIn } from "../Banner/FadeIn";
import { logo } from "../../assets";
import { navLinksdata } from "../../constants";

const Footer = () => {
	return (
		<FadeIn className="w-full py-10  h-auto flex flex-col lgl:flex-row justify-between border-b-[1px] border-b-gray-400  gap-8">
			<div className="w-full lgl:w-[50%] h-full flex flex-col gap-8">
				<img className="w-32" src={logo} alt="logo" />
				<div className=" gap-4  grid grid-cols-3 lgl:grid-cols-5">
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
					<a href="https://github.com/YerosenHunduma" target="_blank">
						<span className="bannerIcon">
							<FaGithub />
						</span>
					</a>
				</div>
			</div>
			<div className="w-full lgl:w-[50%] flex flex-col gap-8">
				<div className="text-center">
					<h3 className="text-xl uppercase text-designColor ">Quick Link</h3>
				</div>
				<div className="w-full h-full flex flex-row justify-around gap-8 ">
					<div>
						<ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
							<li>
								<Link
									rel="stylesheet"
									activeClass="active"
									to={navLinksdata[0].link}
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
								>
									<span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
										About
										<span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
									</span>
								</Link>
							</li>
							<li>
								<Link
									rel="stylesheet"
									activeClass="active"
									to={navLinksdata[1].link}
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
								>
									<span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
										Service
										<span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
									</span>
								</Link>
							</li>

							<li>
								<Link
									rel="stylesheet"
									activeClass="active"
									to={navLinksdata[2].link}
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
								>
									<span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
										Portfolio
										<span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
									</span>
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
							<li>
								<Link
									rel="stylesheet"
									activeClass="active"
									to={navLinksdata[3].link}
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
								>
									<span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
										Resume
										<span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
									</span>
								</Link>
							</li>

							<li>
								<Link
									rel="stylesheet"
									activeClass="active"
									to={navLinksdata[4].link}
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
								>
									<span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
										Contact
										<span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</FadeIn>
	);
};

export default Footer;
