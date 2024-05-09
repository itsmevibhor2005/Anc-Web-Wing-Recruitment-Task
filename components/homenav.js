import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
// import academics from '../app/academics'
const Homenav = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className='container relative my-7 min-h-[40vh] heading'>

      <div className="relative grid grid-cols-3 place-items-center  w-[75vw] min-h-[40vh] text-white text-xl">
        
        <Link href="academics" className='h-[10vh] w-[25vw] relative hover:bg-[rgba(0,0,0,0.3)] text-center hover:underline flex justify-center items-center transition-all hover:text-2xl'>Academics</Link>
        <Link href="research" className='h-[10vh] w-[25vw] relative hover:bg-[rgba(0,0,0,0.3)] text-center hover:underline flex justify-center items-center transition-all hover:text-2xl'>Research</Link>
        <Link href="int-relation" className='h-[10vh] w-[25vw] relative hover:bg-[rgba(0,0,0,0.3)] text-center hover:underline flex justify-center items-center transition-all hover:text-2xl'>Int. Relation</Link>
        <Link href="career-dev" className='h-[10vh] w-[25vw] relative hover:bg-[rgba(0,0,0,0.3)] text-center hover:underline flex justify-center items-center transition-all hover:text-2xl'>Career Dev.</Link>
        <Link href="blogs" className='h-[10vh] w-[25vw] relative hover:bg-[rgba(0,0,0,0.3)] text-center hover:underline flex justify-center items-center transition-all hover:text-2xl'>Blogs</Link>
        <Link href="interest-groups" className='h-[10vh] w-[25vw] relative hover:bg-[rgba(0,0,0,0.3)] text-center hover:underline flex justify-center items-center transition-all hover:text-2xl'>Interest Groups</Link>
        <Link href="portals" className='h-[10vh] w-[25vw] relative hover:bg-[rgba(0,0,0,0.3)] text-center hover:underline flex justify-center items-center transition-all hover:text-2xl'>Portals</Link>
        <Link href="#contact" className='h-[10vh] w-[25vw] relative text-center hover:bg-[rgba(0,0,0,0.3)] hover:underline  flex justify-center items-center transition-all hover:text-2xl'>Contact</Link>
      </div>
    </motion.div>
  )
}

export default Homenav
