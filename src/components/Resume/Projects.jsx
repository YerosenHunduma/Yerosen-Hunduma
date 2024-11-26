import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className=" pt-14 font-titleFont  items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
      </div>
      <div className="mt-6 lgl:mt-14 w-full h-full flex flex-col lgl:flex-row gap-10">
        <div className="w-[100%]">
          <div>
            <div className="mt-14 w-full h-[300px] border-l-[5px] border-l-gray-400 border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="EVANGADI FORUM IS A FULL-STACK WEB APP"
                subTitle="A MERN stack forum app"
                result="2-3 weeks"
                des="Evangadi Forum is a web application that providing a platform for users to engage in community-driven discussions, share knowledge, and seek solutions to programming and tech-related queries."
              />
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <div>
            <div className="mt-14 w-full h-[300px] border-l-[5px] border-l-gray-400 border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title=" Asset Marketsquare "
                subTitle="A MERN stack asset brokage platform"
                result="2-3 mounths"
                des="Assets brokering system which is based on principle the people in the demand of the asset market deserve full information about available assets to buy or rent before deciding to do so. The business also considers involving brokers into the system helping them build their profile and reputation in digital system "
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
DF5BD3