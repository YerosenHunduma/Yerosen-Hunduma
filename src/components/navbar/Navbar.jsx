import { useState } from "react";
import { logo } from "../../assets/index";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";
function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className="w-full h-24 sticky top-0 z-50  transition-colors bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-400 px-4">
			<div>
				<ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
					{navLinksdata.map(({ title, _id, link }) => (
						<li
							className="text-base font-normal text-[#999999]  tracking-wide cursor-pointer hover:text-designColor duration-300"
							key={_id}
						>
							<Link
								activeClass="active"
								to={link}
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								{title}
							</Link>
						</li>
					))}
				</ul>
				<span
					onClick={() => setShowMenu(!showMenu)}
					className="text-3xl mdl:hidden bg-white w-16 h-16 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
				>
					<FiMenu />
				</span>
				{showMenu && (
					<div className="w-[80%] h-screen mdl:hidden rounded-lg overflow-scroll absolute top-0 left-0 bg-[#E8EDF0]/70 backdrop-blur-2xl p-4 scrollbar-hide">
						<div className="flex flex-col gap-8 py-2 relative">
							<div className=" flex justify-between border-b-[1px] border-b-gray-700 pb-1">
								<img className="w-32" src={logo} alt="logo" />
								<span
									onClick={() => setShowMenu(false)}
									className="bg-white text-gray-400 hover:text-designColor duration-300 text-2xl rounded-full w-10 h-10 cursor-pointer flex justify-center items-center"
								>
									<MdClose />
								</span>
							</div>
							<ul className="flex flex-col gap-4 border-b-[1px] border-b-gray-700 pb-3">
								{navLinksdata.map((item) => (
									<li
										key={item._id}
										className="text-base font-normal text-[#999999] tracking-wide cursor-pointer hover:text-designColor duration-300"
									>
										<Link
											onClick={() => setShowMenu(false)}
											activeClass="active"
											to={item.link}
											spy={true}
											smooth={true}
											offset={-70}
											duration={500}
										>
											{item.title}
										</Link>
									</li>
								))}
							</ul>
							<div className="flex flex-col gap-4">
								<h2 className="text-base uppercase font-titleFont mb-4">
									Find me in
								</h2>
								<div className="flex gap-4">
									<a
										href="https://www.linkedin.com/in/yerosen-hunduma-aa5079255"
										target="_blank"
									>
										<span className="bannerIcon">
											<FaLinkedinIn />
										</span>
									</a>

									<a href="https://wa.me/251965640602" target="_blank">
										<span className="bannerIcon">
											<FaWhatsapp />
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			<div>
				<Link
					activeClass="active"
					to={navLinksdata[0].link}
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					<img className="w-40 pr-4" src={logo} alt="logo" />
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
