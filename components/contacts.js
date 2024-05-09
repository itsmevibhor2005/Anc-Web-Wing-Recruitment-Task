"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import contacts from "../public/contact.jpg"
import { motion } from 'framer-motion'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const Contacts = () => {
    const [data, setdata] = useState([{
        "image": "KapilSharma.jpg",
        "Name": "Kapil Sharma",
        "post": "General Secretary - PG",
        "Wing": "Academics and Career",
        "email": "ksharma21@iitk.ac.in",
        "phone": "8091405272"
    },
    {
        "image": "nishika.jpg",
        "Name": "Nishika Jain",
        "post": "General Secretary - UG",
        "Wing": "Academics and Career",
        "email": "nishika20@iitk.ac.in",
        "phone": "9522424454"
    },
    {
        "image": "HarshitSinghai.jpg",
        "Name": "Harshit Singhai",
        "post": "Institute Secretary",
        "Wing": "Academics and Research",
        "email": "harshits20@iitk.ac.in",
        "phone": "9950429349"
    },
    {
        "image": "Aryan.jpeg",
        "Name": "Atirek Aryan",
        "post": "UG Institute Secretary",
        "Wing": "Career Development and International Relation",
        "email": "aryana20@iitk.ac.in",
        "phone": "8521251414"

    },
    {
        "image": "ToushifAlam.jpeg",
        "Name": "Toushif Alam",
        "post": "PG Institute Secretary",
        "Wing": "Career Development and International Relation",
        "email": "toushif22@iitk.ac.in",
        "phone": "8001793374"
    },
    {
        "image": "sakshaam.jpg",
        "Name": "Saksham Agarwal",
        "post": "UG Manager",
        "Wing": "Web Development",
        "email": "sakshamag21@iitk.ac.in",
        "phone": "8279942685"
    }])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    useEffect(() => {
        AOS.init();
    
    
    }, [])
    
    return (
        <div id='contact' className='flex justify-center h-[650px]'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-[650px] absolute -z-10">

                <Image src={contacts} alt="background-img" className="w-full h-[650px] absolute -z-10 brightness-90" />
            </motion.div>

            <div >
                <div className='text-white my-8 text-5xl text-center' data-aos='fade-out' data-aos-duration="1000" data-aos-easing="ease-out-cubic">
                    Contact US
                </div>

                <div 
                
                className='w-[75vw] min-h-[60vh] relative heading' data-aos='fade-left' data-aos-duration="1000" data-aos-easing="ease-out-cubic">
                    <Slider {...settings}>
                        {data.map((item) => {

                            return <motion.div initial={{opacity: 0} } whileInView={{opacity:1}} transition={{delay:0.25}} exit={{opacity:1, x:0}} key={item.phone} className='relative w-[24vw] bg-transparent heading h-[60vh]  mx-2 rounded-md flex flex-col justify-center items-center my-5 hover:bg-[rgb(0,0,0,0.45)] transition-all'>
                                <div className=' min-h-[30vh] relative flex items-center justify-center'>
                                    <img src={item.image} alt="not found" className='object-fill h-[30vh] w-[30vh] rounded-full' />
                                </div>
                                <div className='text-orange-100  relative text-2xl text-center my-2'>{item.Name}</div>
                                <div className='text-orange-50 relative text-xl text-center'>{item.post}</div>
                                <div className='text-orange-50 relative text-xl text-center my-1'>{item.Wing}</div>
                                <div className='text-orange-50 relative text-center'>{item.email}</div>
                                <div className='text-orange-50 relative text-center'>{item.phone}</div>
                            </motion.div>
                        })}
                    </Slider>
                </div>

            </div>


        </div>
    )
}

export default Contacts
