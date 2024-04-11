import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn} from '@/lib/variant'
import Image from 'next/image'

export default function Contact() {
  return (
    <div id='contact' className=' grid grid-cols-1 md:grid-cols-2 gap-10 py-10 scroll-m-16'>
        <div className=' flex flex-col items-start gap-4'>
           <motion.div 
                 variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=" flex items-center justify-center gap-2">
                    <h2 className=" text-mdClamp font-semibold">Contact Us</h2>
                    <div className=" h-2 w-16 bg-[#FF9194]">
                    </div>
                </motion.div>
                <motion.p 
                 variants={fadeIn('right', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=" text-smClamp text-zinc-500">Creative Brain Studios offers IT services that are tailored to small businesses, private individuals, and companies. We provide exactly what is needed to keep life and business flowing smoothly. We're dedicated to improving business processes with the latest technology and delivering large-scale IT projects.
                Our services underpin best-in-class external workforce programs that help organizations adapt and scale for the future.</motion.p>
                <motion.img src='/contact.png' 
                variants={fadeIn('right', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                width={300} height={300} alt='img'/>
        </div>

        <motion.div 
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.2}}
        className=' bg-zinc-800 flex items-center h-[500px] lg:h-[600px] justify-center rounded-md'>
            <form action="" className=' flex flex-col gap-4'>
                <input type="text" placeholder='Name' className=' text-smClamp p-4 w-64 lg:w-96 rounded-sm' />
                <input type="email" placeholder='Email' className=' text-smClamp p-4 rounded-sm' />
                <input type="text" placeholder='Phone Number' className=' text-smClamp p-4 rounded-sm' />
                <input type="text" placeholder='Topic' className=' text-smClamp p-4 rounded-sm' />
                <textarea name="message" id="" placeholder='Message...' className=' p-4 rounded-sm'></textarea>
                <button type='submit' className=' p-4 bg-[#FF9194] rounded-sm'>Send</button>
            </form>
        </motion.div>
    </div>
  )
}
