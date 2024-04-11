"use client"
import { fadeIn } from '@/lib/variant'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

const social = [
  {
    id: 0,
    url: '/facebook.png'
  },
  {
    id: 1,
    url: '/discord.png'
  },
  {
    id: 2,
    url: '/instagram.png'
  },
  {
    id: 3,
    url: '/twitter.png'
  },
  {
    id: 4,
    url: '/linkedin.png'
  },
  {
    id: 5,
    url: '/telegram.png'
  },
 
]
export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center w-full gap-10 py-10 mt-16 bg-zinc-800'>
      <div className=' flex flex-col items-center justify-center gap-10 px-4 max-w-[1280px] w-full'>
          <motion.img 
          variants={fadeIn('up', .2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.2}}
          className=' mb-10'
          src='/footer.png' width={200} height={200} alt='img'/>

          <motion.div 
           variants={fadeIn('up', .4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.2}}
          className=' flex flex-col md:flex-row items-center justify-center gap-6 text-white'>
              <a href="/">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About Us</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#carreer">Carreer</a>
              <a href="#contact">Contact</a>
          </motion.div>

          <motion.div 
           variants={fadeIn('up', .6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.2}}
          className=' h-1 w-full bg-[#FF9194]'>

          </motion.div>

          
          <motion.div 
           variants={fadeIn('up', .8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.2}}
          className=' flex flex-col md:flex-row items-center justify-between gap-8 w-full text-sm text-zinc-500'>
            <p>@2023 All Rights Reserved</p>
            <div className=' flex items-center justify-center'>
              <a href="" className=' border-r-2 border-zinz-500 px-5'>Privacy Policy</a>
              <a href="" className=' px-5'>Terms of Use</a>
            </div>
            <div className=' flex items-center justify-center gap-4 '>
              { social.map(( socials, idx) => (
                <div key={socials.id}>
                  <Image src={socials.url} width={25} height={25} alt='social media icon' />
                </div>
              ))}
            </div>
          </motion.div>
        
      </div>
        
    </footer>
  )
}
