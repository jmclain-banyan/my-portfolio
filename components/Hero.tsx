import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import UserAvatar from "public/assets/img/avatar-370.svg";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hello Universe, the name is Josh.",
      "const iDoCode: boolean = true;",
      "CoolCodingCat.tsx",
    ],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <motion.div
        initial={{
          rotateX: 0,
          opacity: 0,
          scale: 1,
        }}
        animate={{
          rotateX: 720,
          opacity: [0.3, 0.7, 1],
          scale: [3,1],
        }}
        transition={{
          duration: 3.5,
        }}
      >
        <Image
          className="relative h-32 w-32 mx-auto rounded-full object-cover"
          src={UserAvatar}
          alt="Josh Avatar"
        />
      </motion.div>
      <div className="z-20">
        <h2 className="text-small uppercase text-gray-400 tracking-[8px] pb-2">
          {"<Software Engineer />"}
          <br />
          {"<Web Developer />"}
        </h2>
        <h1 className="text-3xl lg:text-6xl md:text-5xl sm:text-4xl font-semibold px-10">
          <span className="text-white mr-3">{text}</span>
          <Cursor cursorColor="green" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
