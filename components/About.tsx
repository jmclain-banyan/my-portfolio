import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import UserImage from "public/assets/img/kingOfDemons.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <div 
    className="h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly px-10 mx-auto items-center relative">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <Image
          className="-mb-20 md:mb-0 flex-shrink-1 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] border-2 border-white"
          src={UserImage}
          alt="User Image"
        />
      </motion.div>
      <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
       className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-green-500/50">little</span> background</h4>
        <p className="text-base md:w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem alias mollitia, impedit eos sunt nemo officiis, assumenda similique porro rerum cum quod? Rem ipsam autem ad deserunt id perspiciatis adipisci.
        Eum eveniet minus consequatur molestiae, impedit facere nulla nemo velit, dolore placeat neque quisquam dolores doloribus aliquid at, accusantium adipisci. Omnis perferendis quasi nostrum non magni, commodi unde ratione molestiae.
        Odio, asperiores? Corporis officia rerum nam ipsum voluptates voluptate nihil. Accusantium quis vitae possimus alias! Eligendi placeat nobis tenetur delectus labore temporibus sapiente! Quia, ipsa ad officia harum ut minus!
        Maiores distinctio, consectetur voluptatem maxime ad sit soluta. Sunt, enim odio, eaque temporibus consequatur corrupti error esse animi totam explicabo nulla delectus eos tempore odit accusantium aperiam dolore! Dolore, atque?</p>
      </motion.div>
    </div>
  );
};

export default About;
