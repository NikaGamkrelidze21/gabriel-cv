'use client'
import { motion } from "framer-motion"


export default function AboutMe({ status, description, name, lastname }) {
  return (
      <motion.div
        initial={{ x: -500, opacity:0, scale:0.5 }}
        animate={{ x: 0, opacity:1, scale:1 }}
        transition={{delay:1}}
        className='flex flex-col gap-10 pt-40 text-[montserrat-alternates]'
      >

        <p className='text-5xl uppercase'>{name} <br /> {lastname}</p>
        <p className="font-bold text-3xl" >{status}</p>
        <p className="text-lg">{description}</p>
      </motion.div>
  )
}