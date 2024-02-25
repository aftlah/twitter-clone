'use client'
import { HomeIcon } from '@radix-ui/react-icons'
import { Bell, Mail, Search } from 'lucide-react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Navbar = () => {

    const [scrolling, setScrolling] = useState(false)
    const controls = useAnimation()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                if (window.scrollY > 50) {
                }
                if (!scrolling) {
                    setScrolling(true)
                    controls.start({ y: 50 })
                }

            } else {
                if (scrolling) {
                    setScrolling(false)
                    controls.start({ y: 0 })
                }
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrolling, controls])


    return (        
        <motion.div
                initial={{ y: 0 }}
                animate={controls}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                    width: '100%',
                    position: 'fixed',
                    // top: 0,
                    // left: 0,
                    bottom:1,
                    zIndex: 100,
                    height: 'auto',
                }}
            >
        <div className='fixed border w-full bottom-1'>
            <div className='flex justify-between max-w-md mx-auto px-3 items-center'>
                <Link href={'/home'} className='px-5 cursor-pointer py-3'>
                    <HomeIcon className='size-8' />
                </Link>
                <Link href={'/explore'} className='px-5 cursor-pointer py-3'>
                    <Search className='size-8' />
                </Link>
                <Link href={'/notifications'} className='px-5 cursor-pointer py-3'>
                    <Bell className='size-8' />
                </Link>
                <Link href={'/messages'} className='px-5 cursor-pointer py-3'>
                    <Mail className='size-8' />
                </Link>

            </div>
        </div>
        </motion.div>
    )
}

export default Navbar