import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn} from '@/lib/variant'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const data = [
    {
        service:'Game Development',
        desc: 'Creative Brain Studios is a game development company that brings your ideas to life. Our experienced team of developers and designers creates engaging and immersive gaming experiences for mobile, PC, and consoles. From concept to launch, we handle every aspect of the process. Let us develop your next hit game.',
        url: '/games.png'
    },
    {
        service:'Web Development',
        desc:'Creative Brain Studios specializes in creating engaging, immersive gaming experiences for iOS and Android. From concept to launch, we handle every aspect of the process. Let us develop your next hit mobile game.',
        url: '/monitor.png'
    },
     {
        service:'Mobile Development',
        desc:'Creative Brain Studios creates engaging and immersive web games for browsers. From concept to launch, we handle every aspect of the process. Let us develop your next hit web game.',
        url: '/mobile.png'
    },
     {
        service:'2d Arts',
        desc:'Creative Brain Studios is a professional 2D art studio that creates stunning visuals for your projects. Our team of experienced 2D artists and designers work with you to produce high-quality art that fits your style and needs. From character design to concept art, we handle every aspect of the 2D art process. Let us help you bring your vision to life with our 2D art services.',
        url: '/2d.png'
    },
     {
        service:'3D Arts',
        desc:'Creative Brain Studios is a professional 3D art studio that creates stunning visuals for your projects. Our team of experienced 3D artists and designers work with you to produce high-quality art that fits your style and needs. From character design to environment modeling, we handle every aspect of the 3D art process. Let us help you bring your vision to life with our 3D art services.',
        url: '/dimensions.png'
    },
     {
        service:'Blockchain',
        desc:'Creative Brain Studios delivers custom blockchain solutions, including smart contracts, cryptocurrency development, and blockchain-based applications. Our expert team offers end-to-end services tailored to your needs. Let us help you harness the power of decentralized technology and transform your business.',
        url: '/blockchain.png'
    },
]

export default function Services() {
  return (
    <div id='services' className=' grid grid-cols-1 md:grid-cols-2 gap-5 py-10 scroll-m-16'>
        <div className=' flex flex-col items-start gap-6'>
             <motion.div 
                 variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=" flex items-center justify-center gap-2">
                    <h2 className=" text-mdClamp font-semibold">What we do</h2>
                    <div className=" h-2 w-16 bg-[#FF9194]">
                    </div>
                </motion.div>
                <motion.p 
                 variants={fadeIn('right', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=" text-smClamp text-zinc-500">At Creative Brain Studios, we're committed to delivering customized IT services that are tailored to the needs of small businesses, private individuals, and companies. Were dedicated to improving business processes through the latest technology, and our expertise includes large-scale IT projects and best-in-class external workforce programs.Our goal is to help organizations adapt and scale providing the support needed to keep businesses running smoothly now and in the future</motion.p>
        </div>
         <motion.div 
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.2}}
        className='grid place-content-center'>

              <Carousel className=" w-[300px]">
                <CarouselContent>
                    {data.map((service, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Card className=' grid place-items-center bg-zinc-800 h-[300px] '>
                            <CardContent className="flex flex-col  items-center justify-center gap-2 py-10 text-white">
                                <Image src={service.url} width={50} height={50} alt='icon'/>
                                <h2 className=' text-lg font-semibold'>{service.service}</h2>
                                <p className=' text-smClamp text-center text-zinc-500 line-clamp-4'>{service.desc}</p>
                            </CardContent>
                        </Card>

                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                </Carousel>

                <div className= ' flex items-center justify-center gap-4 mt-4'>
                    <div className='h-2 w-10 bg-[#FF9194]'></div>
                    <p className=' text-smClamp'>Slide</p>
                    <div className='h-2 w-10 bg-[#FF9194]'></div>
                </div>
        </motion.div>
    </div>
  )
}
