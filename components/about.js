import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css';


const About = () => {

    useEffect(() => {
        Aos.init();
    }, [])


  return (
    <div className='min-h-[29vh] w-[75vw] bg-[rgba(0,0,0,0.4)] my-5 p-3 flex flex-col items-center rounded-lg about' data-aos="fade-out" data-aos-duration="200">
      <h1 className='text-white text-5xl' >About Us</h1>
      <div className='text-white my-5 mx-7 text-lg ' data-aos="fade-right" data-aos-duration="5000" data-aos-delay="500">The Academics and Career Council of the Indian Institute of Technology, Kanpur is a council directly placed under the Student's Gymkhana, that aims to foster all needs related to academics and research for the campus dwellers.</div>
    </div>  
  )
}

export default About
