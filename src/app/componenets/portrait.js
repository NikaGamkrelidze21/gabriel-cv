'use client'
import { FaHouse } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { BiLogoLinkedinSquare } from "react-icons/bi";

import Link from "next/link";
import { BioRhyme_Expanded } from "next/font/google";


export default function Portrait({ src, tel, address, email, linkedin }) {

  const Wraapper = ({ children, title }) => {
    return (
      <li className="flex gap-2">
        <div className="aspect-square h-full w-min p-1 rounded-full bg-[var(--custom-brown)]">
          {children}
        </div>
        <p className="">{title}</p>
      </li>

    )
  }

  return (
    <div className='w-full flex flex-col items-center gap-10'>
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}

        className='flex justify-center w-full bg-[var(--custom-brown-light)] rounded-b-full h-fit pt-20 pb-10'>
        <div className='relative group w-2/3 flex items-center justify-center rounded-full overflow-hidden aspect-square' >
          <Link href={""} className="relative flex items-center justify-center">
            <img src={src} />
            <p className="z-10 absolute text-4xl font-extrabold underline opacity-0 ">
              About Me
            </p>
          </Link>
        </div>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col gap-3 w-min text-md ">
        <Wraapper title={tel}>
          <FaHouse className="text-[var(--custom-white)]" />
        </Wraapper>
        
        <Wraapper title={address}>
          <FaPhoneAlt className="text-[var(--custom-white)]" />
        </Wraapper>

        <Wraapper title={email}>
          <MdOutlineEmail className="text-[var(--custom-white)]" />
        </Wraapper>
      </motion.ul>
    </div>
  )
}