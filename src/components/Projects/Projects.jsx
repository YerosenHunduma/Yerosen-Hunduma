import React from "react";
import Titles from "../Layout/Titles";
import { FadeIn } from "../Banner/FadeIn";
import {
  appleReact,
  appleBootstrap,
  netflix,
  amazon,
  forum,
  asset,
} from "../../assets";
import ProjectsCard from "./ProjectsCard";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20  border-b-[1px] border-b-gray-400"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Titles
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="Portfolio"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Netflix Clone"
            des="Created a React-based Netflix clone, demonstrating web development skills and responsive UI design."
            src={netflix}
            git={"https://github.com/YerosenHunduma/Netflix-clone"}
            web={"https://netflix-yerosen.web.app/"}
          />
          <ProjectsCard
            title="Apple website with React"
            des="Constructed an apple website again using React. Demonstrated meticulous attention to detail and proficiency in complex layouts and interactivity."
            src={appleReact}
            git={"https://github.com/YerosenHunduma/Apple-react-function-based"}
            web={"https://apple-clone-yero.netlify.app/"}
          />
          <ProjectsCard
            title="Apple website using Bootstrap"
            des="Designed and constructed an Apple website clone with HTML, CSS, Bootstrap, and JavaScript"
            src={appleBootstrap}
            git={
              "https://github.com/YerosenHunduma/Apple.com-HomePage_Bootstrap"
            }
            web={"https://apple-clone-bootstrap.netlify.app"}
          />
          <ProjectsCard
            title="Amazon CLONE front-end built with react"
            des="Recreate the Amazon shopping experience with a front-end clone, offering a user-friendly interface for browsing, searching, and discovering a wide range of products."
            src={amazon}
            git={"https://github.com/YerosenHunduma/Amazon-clone"}
            web={"https://amazon-clone-yero.netlify.app"}
          />
          <ProjectsCard
            title="ASSET MARKETSQUARE FULL-STACK WEB APP"
            des="Asset MarketSquare introduces online marketplace addressing the inefficiencies of traditional asset brokering systems."
            src={asset}
            git={"https://github.com/YerosenHunduma/backend"}
            web={"https://assetmarketsquare.yerosen.com"}
          />
          <ProjectsCard
            title="EVANGADI FORUM IS A FULL-STACK WEB APP"
            des="Evangadi Forum is a web application that providing a platform for users to engage in community-driven discussions, share knowledge, and seek solutions to programming and tech-related queries."
            src={forum}
            git={"https://github.com/YerosenHunduma/forum-website"}
            web={"https://evangadiforum.yerosen.com/"}
          />
        </div>
      </FadeIn>
    </section>
  );
}

export default Projects;
