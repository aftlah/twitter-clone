'use client'
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import type { ReactNode } from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import LogoX from "@/components/Logo/LogoX";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/atoms/Navbar";
import { Bell, Bookmark, CircleEllipsis, Home, Mail, NotepadText, Search, Settings, User, UserRound, UsersRound, MoreHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';

import { z } from 'zod';
import { SizeIcon } from '@radix-ui/react-icons';


const link = [
    {
        id: 1,
        logo: <Home className="size-7" />,
        href: '/home',
        title: 'Home'
    },
    {
        id: 2,
        logo: <Search className="size-7" />,
        href: '/search',
        title: 'Search'
    },
    {
        id: 3,
        logo: <Bell className="size-7" />,
        href: 'notifications',
        title: 'Notification'
    },
    {
        id: 4,
        logo: <Mail className="size-7" />,
        href: '/messages',
        title: 'Message'
    },
    {
        id: 5,
        logo: <NotepadText className="size-7" />,
        href: '/progile_name/lists',
        title: 'Note'
    },
    {
        id: 6,
        logo: <Bookmark className="size-7" />,
        href: '/bookmark',
        title: 'Bookmark'
    },
    {
        id: 7,
        logo: <UsersRound className="size-7" />,
        href: '',
        title: 'Group'
    },
    {
        id: 8,
        logo: <UserRound className="size-7" />,
        href: '/profile',
        title: 'Profile'
    },
    {
        id: 9,
        logo: <CircleEllipsis className="size-7" />,
        href: 'seting',
        title: 'More'
    }
]

const data = [
    {
        id: 1,
        country: 'Indonesia',
        title: 'Haid',
        posts: 7000
    },
    {
        id: 2,
        country: 'Indonesia',
        title: 'Haid',
        posts: 7000
    },
    {
        id: 3,
        country: 'Malaysia',
        title: 'Ikan apa tu man',
        posts: 6500
    },
    {
        id: 4,
        country: 'Singapore',
        title: 'Bird fly',
        posts: 8090
    },


]


export default function IndexLayout({ children }: { children: ReactNode }) {

    const [scrolling, setScrolling] = useState(false)
    const controls = useAnimation()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                if (!scrolling) {
                    setScrolling(true)
                    controls.start({ y: -130 })
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
        <div className='sm:grid grid-cols-12 lg:grid-cols-6 w-full content-center overflow-x-hidden'>
            <motion.div
                initial={{ y: 0 }}
                animate={controls}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                    width: '100%',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 100,
                    height: 'auto',
                }}
                className='sm:hidden'
            >
                <header className="px-5 pt-5 border ">
                    <div className="flex pb-4 justify-between items-center">
                        <Avatar>
                            <Link href={''}>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="size-10" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Link>
                        </Avatar>
                        <div className="size-5">
                            <LogoX />
                        </div>
                        <Link href={''} className=' hover:bg-zinc-800 p-1.5 rounded-full'>
                            <Settings />
                        </Link>
                    </div>

                    <div className="flex items-center justify-around">
                        <Link href={''} className={"text-sm font-bold cursor-pointer border-b-4 py-3 border-blue-500 "}>For you</Link>
                        <Link href={''} className={"text-sm font-normal cursor-pointer py-3 text-gray-400 border-b-4 border-blue-500"}>Following</Link>
                    </div>
                </header>
            </motion.div>

            <div className=' h-screen sm:fixed hidden sm:flex sm:flex-col items-end justify-between  sm:w-[15%] py-4 px-3 '>
                <div>
                    <div className='size-7'>
                        <LogoX />
                    </div>
                    <div className='flex flex-col gap-y-3 py-6'>
                        {link.map((link, i) => (
                            <Link href={link.href} className=' mx-auto size-10 cursor-pointer w-auto gap-x-1 items-center flex flex-row lg:mx-0' key={link.id}>
                                <p>{link.logo}</p>
                                <p className='hidden lg:block'>{link.title}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                <Link href={''}>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="size-10" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Link>
            </div>
            <div className=' col-span-10 col-start-3 lg:col-span-3 lg:col-start-2 max-w-2xl  '>
                
                {children}
            </div>
            <div className='hidden lg:block col-span-2  h-full mx-auto'>
                <div className='border flex flex-row items-center rounded-full my-3 px-2'>
                    <div className='px-2'>
                        <Search className="size-4" />
                    </div>
                    <Input placeholder='Search' className='focus:outline-none  w-[87%] ' />
                </div>
                <div className='max-w-xs space-y-3'>
                    <div className='bg-transparent p-4 rounded-2xl flex flex-col gap-y-2 border'>
                        <h1 className='font-bold text-lg'>Subscribe to Premium</h1>
                        <p className='text-sm'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                        <Button className='bg-blue-500 text-white rounded-3xl w-fit px-5 py-1 hover:bg-blue-400'>Subscribe</Button>
                    </div>
                    <div className='bg-transparent p-4 rounded-2xl flex flex-col gap-y-5 border'>
                        <h1 className='font-bold text-lg'>Trends for you</h1>
                        {data.map((data, _) => (
                            <Link href={''} key={data.id} className='flex justify-between '>
                                <div>
                                    <p className='text-xs text-gray-400 font-light'>Trending In {data.country}</p>
                                    <h3 className=''>{data.title}</h3>
                                    <p className='text-xs text-gray-400 font-light'>{data.posts} posts</p>
                                </div>
                                <Link href={''} className=' h-fit rounded-full p-1 hover:bg-blue-500'>
                                    <MoreHorizontal className="size-5" />
                                </Link>
                            </Link>
                        ))}
                        <Link href={''} className='text-blue-500 text-sm'>
                            Show more
                        </Link>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}



