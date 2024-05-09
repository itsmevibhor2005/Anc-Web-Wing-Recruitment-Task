import React from 'react'
import { useEffect } from 'react'
import background from '../public/bg.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Goals = () => {

  useEffect(() => {

    AOS.init();
  }, [])

  return (
    <div className='min-h-[90vh] flex flex-col items-center'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full min-h-[90vh] absolute -z-10 blur-sm my-4">

        <Image src={background} alt="background-img" className="w-full min-h-[90vh] absolute -z-10 brightness-90" />
      </motion.div>
      <h1 className='text-center text-5xl py-5' data-aos='fade-out' data-aos-duration="1000" data-aos-easing="ease-out-cubic">Our Goals</h1>

      <div className='grid grid-cols-2 mx-5 my-4 w-[80vw] gap-2 place-items-center min-h-[400px]'>
        <div className="cards bg-[rgba(0,0,0,0.4)] min-h-[220px] relative" data-aos='fade-right' data-aos-duration="1000" data-aos-easing="ease-out-cubic">
          <h1 className='text-3xl my-2 text-yellow-50 underline'>UG/PG Academics</h1>
          <p className='text-white'>The UG/PG Academics Wing takes up the responsibility of the academics related work of the Academic and Career Council. It acts as an interface between the institute policy makers and the students on matters related to academia.</p>
        </div>
        <div className="cards bg-[rgba(0,0,0,0.4)] min-h-[220px] relative " data-aos='fade-left' data-aos-duration="1000" data-aos-easing="ease-out-cubic" data-aos-delay="100">
          <h1 className='text-3xl my-2 text-yellow-50 underline'>Research</h1>
          <p className='text-white'>The Research Wing of the council aims at cultivating and promoting research interests in the student community, by providing the freedom and opportunities to work upon diverse areas of research.</p>
        </div>
        <div className="cards bg-[rgba(0,0,0,0.4)] min-h-[220px] relative" data-aos='fade-right' data-aos-duration="1000" data-aos-easing="ease-out-cubic" data-aos-delay="200">
          <h1 className='text-3xl my-2 text-yellow-50 underline'>International Relations</h1>
          <p className='text-white'>
            The International Relations Wing works in close association with the Office of International Relations (OIR), IIT Kanpur to improve collaborations of the Institute and its foreign counterparts.
          </p>
        </div>
        <div className="cards bg-[rgba(0,0,0,0.4)] min-h-[220px] relative" data-aos='fade-left' data-aos-duration="1000" data-aos-easing="ease-out-cubic" data-aos-delay="300">
          <h1 className='text-3xl my-2 text-yellow-50 underline'>Career Development</h1>
          <p className='text-white'>The Career Development Wing of the Council, with the mandate of Career Development of students, shall provide an extraordinary boost in regard to Career Aspects.</p>
        </div>
      </div>
    </div>
  )
}

export default Goals
