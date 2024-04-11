"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { IoMdMenu } from "react-icons/io";
import { ThemeSwitcher } from '@/components/Theme/ThemeSwitcher';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variant';

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

export default function Navbar() {
   const [isOpen, setIsOpen] = useState( true)
  const handleNavClick = () => {
    setIsOpen(!isOpen)
  };
  return (
    <nav className=' sticky flex items-center justify-center px-4 top-0 z-10 h-20 bg-inherit w-full'>
        <div className=' flex items-center justify-between max-w-[1280px] min-w-[350px] w-[100%]'>
            <a href="/">
                <Image src='/logo.png' width={70} height={70} alt='logo'/>
            </a>
            <ul className=' hidden md:flex items-center justify-center gap-6'>
                <a href="/">Home</a>
                <a href="#services">Services</a>
                <a href="#about">About Us</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#carreer">Carreer</a>
                <a href="#contact">Contact</a>
                <ThemeSwitcher/>
            </ul>
            <div className=' flex items-center gap-4 md:hidden'>
              <ThemeSwitcher/>
              <div className=' md:hidden'>
                <Sheet>
                  <SheetTrigger>
                    <IoMdMenu size={25}/>
                    </SheetTrigger>
                  <SheetContent>
                    <div className=' flex flex-col items-center justify-center gap-6 mt-10'>
                      <motion.div
                        variants={fadeIn('up', .1)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once:false, amount: 0.2}}  
                      >
                          <ThemeSwitcher/>
                      </motion.div>
                          <motion.a href="/"
                            variants={fadeIn('up', .2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false, amount: 0.2}}
                          >Home</motion.a>
                          <motion.a href="#services"
                             variants={fadeIn('up', .3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false, amount: 0.2}}
                          >Services</motion.a>
                          <motion.a href="#about"
                             variants={fadeIn('up', .4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false, amount: 0.2}}
                          >About Us</motion.a>
                          <motion.a href="/"
                             variants={fadeIn('up', .6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false, amount: 0.2}}
                          >Portfolio</motion.a>
                          <motion.a href="/"
                             variants={fadeIn('up', .8)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false, amount: 0.2}}
                          >Carreer</motion.a>
                          <motion.a href="#contact"
                             variants={fadeIn('up', 1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false, amount: 0.2}}
                          >Contact</motion.a>
                           <motion.div 
                           variants={fadeIn('up', 1.2)}
                          initial='hidden'
                          whileInView={'show'}
                          viewport={{once:false, amount: 0.2}}
                           className=' flex items-center justify-center gap-4 '>
                              { social.map(( socials, idx) => (
                                <div key={socials.id}>
                                  <Image src={socials.url} width={25} height={25} alt='social media icon' />
                                </div>
                              ))}
                            </motion.div>
                        <motion.p 
                        variants={fadeIn('up', 1.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount: 0.2}}
                        className=' text-xs text-center'>@2023 All Rights Reserved</motion.p>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
        </div>
    </nav>
  )
}
