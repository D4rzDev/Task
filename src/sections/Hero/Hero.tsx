import Image from "next/image"
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variant'

export default function Hero() {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 h-full md:h-[90svh]">
            <div className=" flex flex-col items-start justify-center py-10">
                <motion.h1
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=" text-lgClamp font-bold">CREATIVE BRAIN <br /> STUDIO</motion.h1>
                <motion.p 
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=" text-smClamp text-zinc-500">"Building on Our Experience to Drive Innovation and Embrace the Future with Fresh, Dynamic Ideas"</motion.p>
                <motion.a href="" 
                 variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=" text-white bg-[#FF9194] px-6 py-2 mt-6">Get in touch</motion.a>
            </div>

            <motion.div 
             variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className=" flex items-center justify-center md:justify-end w-full">
                <Image className=" w-[300px] md:w-[400px]" src='hero.svg' width={500} height={500} alt="Image"/>
            </motion.div>
        </div>
    )
}