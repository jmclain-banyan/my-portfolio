import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";


type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <div 
    className="h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly px-10 mx-auto items-center relative">
      <h3 className="absolute top-20 sm:top-24 uppercase tracking-[20px] text-gray-500 text-1xl md:text-2xl">
        About
      </h3>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <Image
          className="-mb-32 sm:-mb-20 md:mb-0 flex-shrink-1 w-32 h-32 sm:w-52 sm:h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] border-2 border-white"
          src={urlFor(pageInfo?.profilePic).url()}
          alt="User Image"
          width={750}
          height={1000}
        />
      </motion.div>
      <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
       className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl md:text-4xl font-semibold">Here is a <span className="underline decoration-green-500/50">little</span> background</h4>
        <p className="text-sm sm:text-base md:w-[400px]">{pageInfo?.backgroundInformation}</p>
      </motion.div>
    </div>
  );
};

export default About;
