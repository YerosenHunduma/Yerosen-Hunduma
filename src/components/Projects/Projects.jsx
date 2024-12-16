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
            title="Bits Shop"
            des="Bits Shop is an online marketplace for students to easily buy and sell products. It features a bidding system that allows users to get the best deals on items."
            src="./project2.png"
            git={"https://github.com/Yordaaa/BITS_SHOP"}
            web={"https://bits-shop.vercel.app"}
          />
          <ProjectsCard
            title="Power Ethiopia"
            des="Power Ethiopia is an online platform offering renewable energy training and an e-commerce shop for sustainable energy products. It combines education with commerce to empower users and promote a greener future."
            src="./project6.png"
            web={"https://powerethio.com"}
          />
          <ProjectsCard
            title="Maveko"
            des="Maveko is an online platform where users can request product quotes from companies. Users specify their needs, and companies reply with prices and details."
            src="./project3.png"
            git={"https://github.com/Yordaaa/Marketplace_Frontend"}
            web={"https://maveko.vercel.app"}
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
            web={"https://asset-marketsquare-react-jsou.onrender.com"}
          />
          <ProjectsCard
            title="EVANGADI FORUM IS A FULL-STACK WEB APP"
            des="Evangadi Forum is a web application that providing a platform for users to engage in community-driven discussions, share knowledge, and seek solutions to programming and tech-related queries."
            src={forum}
            git={"https://github.com/YerosenHunduma/forum-website"}
          />
        </div>
      </FadeIn>
    </section>
  );
}

export default Projects;
