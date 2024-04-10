import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn,  containerVariant, itemVariant} from '@/lib/variant'

const data =[
    {
        url:'/responsible.png',
        title:'Exceptional Service',
        desc:'We helped businesses and individuals achieve their goals for over 10 years.'
    },
    {
        url:'/high-quality.png',
        title:'High Quality Works',
        desc:'We prioritize quality processes for continual improvement and client satisfaction.'
    },
    {
        url:'/checklist.png',
        title:'Result Oriented',
        desc:'Quality processes for continual improvement and maximum client satisfaction'
    },
]

export default function WhyUs() {
  return (
    <div className=' flex flex-col items-center justify-center py-20 gap-4'>
        <motion.h2 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.2}}
        className=' text-mdClamp font-semibold'>Why Choose Us</motion.h2>
        <motion.p 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.2}}
        className=' text-smClamp text-zinc-500 text-center w-[70%]'>At Creative Brain Studios, we understand that technology is constantly evolving, which is why we stay ahead of the curve by offering a wide range of adaptive and cost-effective solutions.</motion.p>

        <motion.div 
         variants={containerVariant}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.4 }}
        className=' grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
            {data.map((datas, idx) =>(
                <motion.div key={idx} 
                variants={itemVariant}
                className=' flex flex-col gap-4 bg-zinc-800 p-12'>
                    <Image src={datas.url} width={50} height={50} alt='icon'/>
                    <h2 className=' text-lg text-white font-semibold'>{datas.title}</h2>
                    <p className=' text-smClamp text-zinc-500'>{datas.desc}</p>
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}
