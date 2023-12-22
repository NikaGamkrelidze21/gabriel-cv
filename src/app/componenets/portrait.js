'use client'
import { FaHouse } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { BiLogoLinkedinSquare } from "react-icons/bi";

import Link from "next/link";
import { BioRhyme_Expanded } from "next/font/google";


export default function Portrait({ src, tel, address, email, linkedin }) {
  return (
    <div className='w-full flex flex-col items-end gap-10'>
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}

        className='w-full bg-[var(--custom-brown-light)] rounded-b-full h-fit pt-20'>
        <div className='relative group flex items-center justify-center rounded-full overflow-hidden aspect-square' >
          <Link href={"profile"} className="relative flex items-center justify-center">
            <img src={src} />
            <p className="z-10 absolute text-4xl font-extrabold underline opacity-0 group-hover:opacity-100">
              About Me
            </p>
          </Link>
        </div>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-col gap-3 w-full text-md">
        <li className="flex gap-2">
          <div className="aspect-square h-full w-min p-1 rounded-full bg-[var(--custom-brown)]">
            <FaHouse className="text-[var(--custom-white)]" />
          </div>
          <p className="">{tel}</p>
        </li>
        <li className="flex gap-2">
          <div className="aspect-square h-full w-min p-1 rounded-full bg-[var(--custom-brown)]">
            <FaPhoneAlt className="text-[var(--custom-white)]" />
          </div>
          <p>{address}</p>
        </li>
        <li className="flex gap-2">
          <div className="aspect-square h-full w-min p-1 rounded-full bg-[var(--custom-brown)]">
            <MdOutlineEmail className="text-[var(--custom-white)]" />
          </div>
          <p>{email}</p>
        </li>
        <li className="flex gap-2">
          <div className="aspect-square h-full w-min p-1 rounded-full bg-[var(--custom-brown)]">
            <BiLogoLinkedinSquare className="text-[var(--custom-white)]" />
          </div>
          <p>{linkedin}</p>
        </li>
      </motion.ul>

    </div>
  )
}