import { motion } from 'framer-motion'
import { fadeIn, containerVariant, itemVariant } from '@/lib/variant'
import Image from 'next/image'

const data = [
    {
        url: '/games.png'
    },
    {
        url: '/monitor.png'
    },
     {
        url: '/mobile.png'
    },
     {
        url: '/2d.png'
    },
     {
        url: '/dimensions.png'
    },
     {
        url: '/blockchain.png'
    },
]

export default function About() {
    return(
        <div id='about' className=" grid grid-cols-1 md:grid-cols-2 gap-16 py-10 scroll-m-16">
            <div className=" flex flex-col items-start gap-4">
                <motion.div 
                 variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=" flex items-center gap-2">
                    <h2 className=" text-mdClamp font-semibold">About Us</h2>
                    <div className=" h-2 w-16 bg-[#FF9194]">
                    </div>
                </motion.div>
                <motion.p 
                 variants={fadeIn('right', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=" text-smClamp text-zinc-500">Providing Comprehensive IT Solutions with Competence and an Extensive Range of Capabilities</motion.p>
                <motion.p 
                 variants={fadeIn('right', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' text-smClamp text-zinc-500'>For nearly a decade, the CBS core team has designed and developed cost-effective, scalable software applications, games, and web development solutions. Leveraging our experience and relationships in the IT industry, we've created a unique company that is dedicated to our clients, partners, and co-workers.Unlike other companies that prioritize numbers, we prioritize the success and satisfaction of those we work with, embracing new challenges and opportunities to drive growth and innovation.</motion.p>
            </div>

            <div className=' flex items-center justify-center'>
            <motion.div 
             variants={containerVariant}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.4 }}
            className='grid w-full grid-cols-2 lg:grid-cols-3 gap-4'>
                {data.map(( icon, idx)=>(
                    <motion.div key={idx} 
                    variants={itemVariant}
                    className=' flex items-center justify-center h-[150px] bg-zinc-800'>
                        <Image src={icon.url} width={50} height={50} alt='icon'/>
                    </motion.div>
                ))}
            </motion.div>
            </div>
        </div>
    )
}