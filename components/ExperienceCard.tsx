/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import DragonCat from "public/assets/img/dragonCat.jpg";
import { motion } from "framer-motion";
// https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className={`flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
      w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] 
      hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden`}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={DragonCat}
          alt="dragon cats dev logo"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CTO of Dragon Cats Media</h4>
        <p className="font-bold text-2xl mt-1">Dragon Cats Media</p>
        <div className="flex space-x-2 my-2">
          <img
            className="rounded-full h-10 w-10"
            height={10}
            width={10}
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt=""
          />
          <img
            className="rounded-full h-10 w-10"
            height={10}
            width={10}
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt=""
          />
          <img
            className="rounded-full h-10 w-10"
            height={10}
            width={10}
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt=""
          />
          {/* tech used  */}
          {/* tech used  */}
          {/* tech used  */}
        </div>
        <p className="uppercase py-5 text-gray-300">start... - end...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summy point</li>
          <li>summy point</li>
          <li>summy point</li>
          <li>summy point</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
