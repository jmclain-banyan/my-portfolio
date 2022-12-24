import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <motion.div
    initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}    
    className="group relative flex cursor-pointer">
      <motion.img
        src={urlFor(skill.image).url()}
        className="rounded-full border border-gray-500 object-fit w-20 h-20 md:h-24 md:w-24 xl:h-28 xl:w-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        alt={skill.title}
        height={24}
        width={24}
      />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white w-20 h-20 md:h-24 md:w-24 xl:h-28 xl:w-28 rounded-full">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">{`${skill.progress}%`}</p>
            </div>
        </div>
    </motion.div>
  );
};

export default Skill;
