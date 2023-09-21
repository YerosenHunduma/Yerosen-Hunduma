import { Result } from "postcss";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Projects from "./components/Projects/Projects";
import Service from "./components/Service/Service";
import Navbar from "./components/navbar/Navbar";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/Footer/FooterBottom";

function App() {
	return (
		<div className="font-bodyFont w-full h-auto bg-bodyColor text-lightText">
			<Navbar />
			<div className="px-4">
				<div className="max-w-screen-xl mx-auto">
					<Banner />
					<Service />
					<Projects />
					<Resume />
					<Contact />
					<Footer />
					<FooterBottom />
				</div>
			</div>
		</div>
	);
}

export default App;
