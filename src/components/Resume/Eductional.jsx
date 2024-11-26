import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

function Eductional() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className=" pt-14 font-titleFont  items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
      </div>
      <div className="mt-6 lgl:mt-14 w-full h-full flex flex-col lgl:flex-row gap-10">
        <div className="w-[100%]">
          <div>
            <div className="mt-14 w-full h-[300px] border-l-[5px] border-l-gray-400 border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Full-Stack Web App Development (MERN)"
                subTitle="Evangadi Tech, USA"
                result="2023/04 - 2023/11"
                des="Crafting Innovative Digital Solutions and transforming Ideas into Reality : Elevating Experiences with MERN."
              />
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <div>
            <div className="mt-14 w-full h-[300px] border-l-[5px] border-l-gray-400 border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Bachelor of Science Degree in Software Engineer"
                subTitle="University Of ArbaMinch,Ethiopia"
                result="2019-2024"
                des="
								I'm a fourth-year Software Engineering student at Arba Minch University, well-versed in software development methodologies and programming. "
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Eductional;
