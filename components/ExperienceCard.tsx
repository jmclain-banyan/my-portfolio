/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
// import DragonCat from "public/assets/img/dragonCat.jpg";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  const formatDateString = (date: Date) =>
    new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
    }).format(new Date(date));

  return (
    <article
      className={`flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
      w-[360px] sm:w-[500px] md:w-[600px] xl:w-[800px] snap-center p-5 bg-[#292929] 
      hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#88d498]/80 mt-16 sm:mt-10 md:mt-0`}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          className="h-20 w-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full xl:w-[180px] xl:h-[180px] object-cover object-center float-left"
          src={urlFor(experience?.companyImage).url()}
          alt={experience?.companyName}
          width={200}
          height={200}
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-2xl sm:text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-base sm:text-2xl mt-1">{experience?.companyName}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies.map((technology) => (
            <Image
              key={technology._id}
              className="rounded-full h-6 w-6 sm:w-10 sm:h-10"
              src={urlFor(technology?.image).url()}
              alt={technology?.title}
              width={40}
              height={40}
            />
          ))}
        </div>
        <p className="uppercase py-2 md:py-5 text-gray-300">
          <>
            {formatDateString(experience?.dateStarted)} -{" "}
            {experience?.isCurrentlyWorkingHere
              ? "Current"
              : formatDateString(experience?.dateEnded)}
          </>
        </p>

        <ul className="list-disc space-y-2 sm:space-y-4 ml-5 text-sm sm:text-md md:text-lg">
          {experience?.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
