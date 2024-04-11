import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { fadeIn} from '@/lib/variant'
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
        id: 0,
        url:'/client1.png'
    },
    {
        id: 1,
        url:'/client2.png'
    },
    {
        id: 2,
        url:'/client3.png'
    },
    {
        id: 3,
        url:'/client4.png'
    },
    {
        id: 4,
        url:'/client5.png'
    },
    {
        id: 5,
        url:'/client3.png'
    },
    {
        id: 6,
        url:'/client1.png'
    },
    {
        id: 7,
        url:'/client4.png'
    },
]
export default function Clients() {
  return (
    <div className=' flex flex-col items-center justify-center py-10 gap-4'>
        <motion.h2 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.2}}
        className=' text-mdClamp font-semibold'>Our clients</motion.h2>

        <motion.p 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.2}}
        className=' text-smClamp text-zinc-500 text-center w-[80%]'>At Creative Brain Studios, we take the time to understand your business and customers to deliver tailored services and products that meet your specific needs.Our diverse range of clients all share the common goal of staying ahead of the curve with evolving technology. With a commitment to open communication and collaboration, we ensure the best possible results for your business.Trust us to provide the customized solutions you need to succeed.</motion.p>
        <div className=' grid place items-center mt-6'> 
            <motion.div 
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className=' mt-6 grid place-items-center'>
                <Carousel
                opts={{
                    align: "start",
                }}
                className=" w-[300px] md:w-[500px] lg:w-[600px]"
                >
                <CarouselContent>
                    {data.map((client, index) => (
                    <CarouselItem key={index} className=" basis-1/3 md:basis-1/4 ">
                        <div className="p-1">
                        <Card className=''>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <Image src={client.url} width={120} height={120} alt="client" />
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className=' hidden md:flex' />
                <CarouselNext className=' hidden md:flex' />
                </Carousel>
            </motion.div>
        </div>
    </div>
  )
}
