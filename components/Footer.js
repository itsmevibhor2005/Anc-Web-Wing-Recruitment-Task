import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-[98.9vw] min-h-[8vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... z-10 absolute flex gap-5 items-center px-2'>
      <Link href="/" className='text-lg hover:font-bold transition-all'>Home</Link>
      <Link href="/academics" className='text-lg hover:font-bold transition-all'>Academics</Link>
      <Link href="/research" className='text-lg hover:font-bold transition-all'>Research</Link>
      <Link href="/int-relation" className='text-lg hover:font-bold transition-all'>Int. Relations</Link>
      <Link href="/career-dev" className='text-lg hover:font-bold transition-all'>Carrer Dev.</Link>
      <Link href="/blogs" className='text-lg hover:font-bold transition-all'>Blogs</Link>
      <Link href="#contact" className='text-lg hover:font-bold transition-all'>Contact</Link>
      <Link href="portals" className='text-lg hover:font-bold transition-all'>Portals</Link>
      <img src="iitk.jpg" alt="" className='w-[6vh] h-[6vh] rounded-full absolute right-2'/>
    </div>
  )
}

export default Footer
