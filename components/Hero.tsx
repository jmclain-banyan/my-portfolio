import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import UserAvatar from 'public/assets/img/avatar-370.svg'
import {motion} from 'framer-motion'
import {PageInfo} from '../typings'
import {urlFor} from '../sanity'

type Props = {
  pageInfo: PageInfo
}

const Hero = ({pageInfo}: Props) => {
  const [text] = useTypewriter({
    words: [
      ...pageInfo?.typewriter,
    ],
    loop: true,
    delaySpeed: 3000,
  })
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
          scale: [3, 1],
        }}
        transition={{
          duration: 3.5,
        }}
      >
        <Image
          className="relative h-24 w-24 sm:h-32 sm:w-32 mx-auto rounded-full object-cover"
          src={pageInfo?.heroImage ? urlFor(pageInfo?.heroImage).url() : UserAvatar}
          alt="Josh Avatar"
          height={1008}
          width={756}
        />
      </motion.div>
      <div className="z-20">
        <div className="pb-2 flex flex-col">
          {pageInfo?.roles.map((role, index) => (
            <h2
              key={index}
              className="uppercase text-xs sm:text-sm md:text-lg text-gray-400 tracking-[8px]"
            >{`<${role} />`}</h2>
          ))}
        </div>

        <h1 className="text-1xl lg:text-5xl md:text-4xl sm:text-3xl xl:text-6xl font-semibold px-10">
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
  )
}

export default Hero
