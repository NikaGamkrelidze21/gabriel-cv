'use client'

import { motion } from "framer-motion"


export default function Section({ title, children }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, scale: 0.5, y: 100 },
        visible: { opacity: 1, scale: 1, y: 0 },
      }}

      className="flex flex-col items-center md:items-start w-full"
    >
      <div className="w-fit capitalize font-bold text-2xl bg-[url(/cloud.png)] bg-no-repeat bg-contain bg-center p-10">
        <h2>{title}</h2>
      </div>

      <div className="w-full px-6">
        {children}
      </div>
    </motion.section>
  )
}