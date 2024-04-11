import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn} from '@/lib/variant'
import Image from 'next/image'

export default function Yt() {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 w-full py-10 overflow-hidden bg-zinc-800'>
        <div className=' flex flex-col items-start px-6'>
                <motion.h2 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' text-mdClamp font-bold text-white'>Expert Game and <br />IT solution Provider</motion.h2>
                  <motion.a href="" 
                 variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=" text-white bg-[#FF9194] px-6 py-2 mt-6">Get in touch</motion.a>
                <motion.img src='/yt.png' 
                 variants={fadeIn('right', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' relative top-10' width={300} height={300}/>
            </div>

             <motion.div
             variants={fadeIn('left', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className=' grid place-items-center w-full'
            >
                <iframe className='w-[70%] h-auto' width="500" height="290" src="https://www.youtube.com/embed/iSpAMgJ4qLI?si=FJcN2yLOEwAdPYJB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </motion.div>

    </div>
  )
}
