/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
// import DragonCat from "public/assets/img/dragonCat.jpg";
import { motion } from "framer-motion";
import { Experience } from "typings";
import { urlFor } from "sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
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
          src={urlFor(experience?.companyImage).url()}
          alt={experience.companyName}
          width={200}
          height={200}
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.companyName}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              className="rounded-full h-10 w-10"
              src={urlFor(technology.image).url()}
              alt={technology.title}
              width={40}
              height={40}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          <>
            {experience.dateStarted} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Current"
              : experience.dateEnded}
          </>
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
