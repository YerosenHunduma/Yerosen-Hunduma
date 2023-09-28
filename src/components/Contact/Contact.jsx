import { useState } from "react";
import Titles from "../Layout/Titles";
import { FadeIn } from "../Banner/FadeIn";
import ContactLeft from "./ContactLeft";

function Contact() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");

	const [message, setMessage] = useState("");
	const [errMsg, setErrMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");

	// ========== Email Validation start here ==============
	const emailValidation = (email) => {
		return String(email)
			.toLocaleLowerCase()
			.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
	};
	// ========== Email Validation end here ================

	const handleSend = (e) => {
		e.preventDefault();
		if (username === "") {
			setErrMsg("Username is required!");
		} else if (email === "") {
			setErrMsg("Please give your Email!");
		} else if (!emailValidation(email)) {
			setErrMsg("Give a valid Email!");
		} else if (message === "") {
			setErrMsg("Message is required!");
		} else {
			setSuccessMsg(
				`Thank you dear ${username}, Your Messages has been sent Successfully!`
			);
			setErrMsg("");
			setUsername("");

			setEmail("");

			setMessage("");
		}
	};
	return (
		<section
			id="contact"
			className="w-full py-20  border-b-[1px] border-b-gray-400"
		>
			<FadeIn>
				<div className="flex justify-center items-center text-center">
					<Titles title="CONTACT" des="Keep in touch With Me" />
				</div>
				<div className="w-full">
					<div className="w-full h-auto flex flex-col gap-6 lgl:flex-row justify-between">
						<ContactLeft />
						<div className="w-full lgl:w-[60%] h-full py-10  bg-gradient-to-r from-[#d9d9d9] to-[#ffffff] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg">
							<form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
								<div className="w-full flex flex-col lgl:flex-row gap-10">
									<div className="w-full flex flex-col gap-4">
										<p className="text-sm text-gray-600 uppercase tracking-wide">
											YOUR NAME
										</p>
										<input
											onChange={(e) => setUsername(e.target.value)}
											value={username}
											className={`${
												errMsg === "Username is required!" &&
												"outline-designColor border-b-transparent"
											} contactInput`}
											type="text"
										/>
									</div>
								</div>
								<div>
									<div className="flex flex-col gap-4">
										<p className="text-sm text-gray-600 uppercase tracking-wide">
											Email
										</p>
										<input
											onChange={(e) => setEmail(e.target.value)}
											value={email}
											className={`${
												errMsg === "Please give your Email!" &&
												"outline-designColor border-b-transparent"
											} contactInput`}
											type="text"
										/>
									</div>
								</div>

								<div>
									<div className="flex flex-col gap-4">
										<p className="text-sm text-gray-600 uppercase tracking-wide">
											message
										</p>
										<textarea
											onChange={(e) => setMessage(e.target.value)}
											value={message}
											className={`${
												errMsg === "Message is required!" &&
												"outline-designColor border-b-transparent"
											} contactTextArea`}
											cols="15"
											rows="2"
										></textarea>
									</div>
								</div>
								{errMsg && (
									<p
										className="py-3 bg-gradient-to-r from-[#d9d9d9] to-[#ffffff]   text-center text-orange-500 text-base tracking-wide animate-bounce"
										style={{
											boxShadow: "0 0 10px rgb(210, 210, 210)",
										}}
									>
										{errMsg}
									</p>
								)}
								{successMsg && (
									<p
										className="py-3 bg-gradient-to-r from-[#d9d9d9] to-[#ffffff] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce"
										style={{
											boxShadow: "0 0 10px rgb(210, 210, 210)",
										}}
									>
										{successMsg}
									</p>
								)}
								<div>
									<button
										onClick={handleSend}
										className="w-full h-12 bg-[#fff] rounded-lg text-base text-gray-700 tracking-wider uppercase hover:text-black duration-300 hover:border-[1px] hover:border-designColor border-gray-100 border"
									>
										send message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</FadeIn>
		</section>
	);
}

export default Contact;
