'use client'
import { motion } from "framer-motion"


export default function AboutMe({ status, description, name, lastname }) {
  return (
      <motion.div
        initial={{ x: -500, opacity:0, scale:0.5 }}
        animate={{ x: 0, opacity:1, scale:1 }}
        transition={{delay:1}}
        className='flex flex-col px-1 gap-5 md:gap-10 text-center text-[montserrat-alternates]'
      >

        <p className='text-5xl uppercase font-bold'>{name} <br /> {lastname}</p>
        <p className="font-thick text-3xl" >{status}</p>
        <p className="text-lg text-start px-10">{description}</p>
      </motion.div>
  )
}