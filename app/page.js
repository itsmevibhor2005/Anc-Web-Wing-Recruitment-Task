"use client"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"
import background from "../public/Img8.jpg"
import Homenav from "@/components/homenav";
import { useEffect } from "react";
import Contacts from "@/components/contacts";
import Goals from "@/components/Goals";
import About from "@/components/about";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export default function Home() {
  
  return (

    
    
    <>
      <div

        className="flex justify-center min-h-[140vh]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full min-h-[140vh] absolute -z-10">

          <Image src={background} alt="background-img" className="w-full min-h-[140vh] absolute -z-10 brightness-90" />
        </motion.div>
        <div className="flex flex-col w-[75vw] relative top-[-4vh] items-center justify-center">
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src="favicon.ico" alt="" className="my-6" />
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            // transition={{delay:0.25}}
            className="relative w-[75vw] text-center bg-[rgba(0,0,0,0.2)] brightness-95 rounded-xl border-[5px]">

            <div className="relative text-7xl text-gray-800 min-h-[80px] my-2 font-semibold">
              Academics and Career Council
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl m-5 text-violet-200">
            IIT Kanpur
          </motion.div>
          <Homenav />
          <About/>

        </div>

      </div>
      <Goals/>
      <Contacts/>
    </>
  );
}
