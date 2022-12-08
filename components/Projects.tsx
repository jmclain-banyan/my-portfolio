/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projectsArr = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory z-20">
        {projectsArr.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://www.pngmart.com/files/11/Technology-PNG-HD.png"
              className="w-32 h-32"
            />

            <div className="space-y-10 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#88d498]/50">
                  Case study {index + 1} of {projectsArr.length}:
                </span>{" "}
                ups clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus magni nesciunt libero deserunt repellat quos eum rerum
                asperiores vero fugiat fugit, autem hic mollitia ex beatae in
                dignissimos reprehenderit quia? Esse consequuntur pariatur
                reprehenderit omnis, nemo veniam cum placeat in. In laborum
                culpa eum, quasi itaque modi mollitia omnis vel possimus atque
                architecto tenetur vitae tempora reprehenderit praesentium
                voluptates.
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* background stripe */}
      <div className="w-full absolute top-[30%] bg-[#88d498]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
