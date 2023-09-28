import { contactImg } from "../../assets";
import { FaTelegram, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function ContactLeft() {
	return (
		<div className="w-full lgl:w-[35%] h-full p-4 lgl:p-8  bg-gradient-to-r from-[#d9d9d9] to-[#ffffff] flex flex-col gap-8">
			<div className="flex flex-col gap-4">
				<h3 className="text-3xl font-bold text-black">Yerosen Hunduma</h3>
				<p className="text-lg font-normal text-gray-600">
					MERN Stack Developer
				</p>
				<p className="text-base text-gray-800 tracking-wide">
					I am available for freelance projects. Hire me and get your project
					done.
				</p>
				<p className="text-base text-gray-800 flex items-center gap-2">
					Phone: <span className="text-lightText">+251965640602</span>
				</p>
				<p className="text-base text-gray-800 flex items-center gap-2">
					Email:{" "}
					<span className="text-lightText">yerosenhunduma@gmail.com</span>
				</p>
			</div>
			<div className="flex flex-col gap-4">
				<h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
				</div>
			</div>
		</div>
	);
}

export default ContactLeft;
