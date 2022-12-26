/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {motion} from 'framer-motion'
import {urlFor} from '../sanity'
import {Project} from '../typings'
import Image from 'next/image'

type Props = {
  projects: Project[]
}

const Projects = ({projects}: Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
      <div className="relative w-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#88d498]/80">
        {projects?.map((project, index) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-2 sm:p-10 md:p-44"
          >
            <a href={project?.linkToBuild} target="_blank" rel="noopener noreferrer">
              <motion.img
                initial={{
                  y: -50,
                  opacity: 0,
                }}
                transition={{duration: 1.2}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                src={urlFor(project?.image).url()}
                className="w-[auto] h-[auto] md:h-[300px]"
              />
            </a>

            <div className="space-y-10 md:px-10 max-w-6xl">
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#88d498]/50">
                  Project {index + 1} of {projects?.length}:
                </span>{' '}
                {project?.title}
              </h4>
              <div className="flex items-center justify-center space-x-3">
                {project?.technologies?.map((technology) => (
                  <Image
                    className="h-7 w-7 sm:h-10 sm:w-10 rounded-full"
                    key={technology._id}
                    src={urlFor(technology?.image).url()}
                    alt={technology?.title}
                    height={50}
                    width={50}
                  />
                ))}
              </div>

              <p className="text-sm sm:text-md md:text-lg text-center md:text-left">{project?.summary}</p>
            </div>
          </div>
        ))}
      </div>
      {/* background stripe */}
      <div className="w-full absolute top-[30%] bg-[#88d498]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}

export default Projects
