'use client'
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ReactNode } from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    // FormLabel,
    FormMessage,
} from "@/components/ui/form"
import LogoX from "@/components/Logo/LogoX";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/atoms/Navbar";
import { Bell, Bookmark, CircleEllipsis, Home, Mail, NotepadText, Search, Settings, User, UserRound, UsersRound } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from '@/components/ui/use-toast';


const link = [
    {
        id: 1,
        logo: <Home className="size-7" />,
        href: '',
        title: 'Home'
    },
    {
        id: 2,
        logo: <Search className="size-7" />,
        href: '',
        title: 'Search'
    },
    {
        id: 3,
        logo: <Bell className="size-7" />,
        href: '',
        title: 'Notification'
    },
    {
        id: 4,
        logo: <Mail className="size-7" />,
        href: '',
        title: 'Message'
    },
    {
        id: 5,
        logo: <NotepadText className="size-7" />,
        href: '',
        title: 'Note'
    },
    {
        id: 6,
        logo: <Bookmark className="size-7" />,
        href: '',
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
        href: '',
        title: 'Profile'
    },
    {
        id: 9,
        logo: <CircleEllipsis className="size-7" />,
        href: '',
        title: 'More'
    }
]


export default function HomeLayout({ children }: { children: ReactNode }) {

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

    const FormSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
    })


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }



    return (
        <div className='sm:grid grid-cols-12 lg:hidden   w-full content-center overflow-x-hidden  '>
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
                        <Link href={''} className={`text-sm font-bold cursor-pointer border-b-4 py-3 border-blue-500 `}>For you</Link>
                        <Link href={'/login'} className={`text-sm font-normal cursor-pointer py-3 text-gray-400 border-b-4 border-blue-500`}>Following</Link>
                    </div>
                </header>
            </motion.div>

            <div className=' h-screen 0 sm:col-span-1 sm:fixed hidden sm:flex sm:flex-col items-end justify-between  sm:w-[15%] py-4 px-3 '>
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
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="size-9" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Link>
            </div>

            <div className=' col-span-10 col-start-3 max-w-2xl '>
                <header className='hidden sm:flex w-full  justify-between  border-l-2 pr-5 '>
                    <Link href={''} className={`text-sm  w-[100%]  text-center font-bold cursor-pointer   `}>
                        <p className='border-blue-500 border-b-4 py-4 w-28 mx-auto'>For you</p>
                    </Link>
                    <Link href={'/login'} className={`text-sm font-normal text-center  w-[100%]   cursor-pointer  text-gray-400  `}>
                        <p className='border-blue-500  border-b-4 w-28 py-4 mx-auto'>Following</p>
                    </Link>
                    <Link href={''} className=' flex  items-center   h-auto'>
                        <div className='hover:bg-zinc-800 p-1.5 rounded-full'>
                            <Settings />
                        </div>
                    </Link>
                </header>
                <div className='hidden sm:block p-5 border '>
                    <div className='flex items-start gap-x-2'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="size-10" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-[87%] space-y-6">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem >
                                            {/* <FormLabel>Username</FormLabel> */}
                                            <FormControl className='bg-red-800'>
                                                <Input type='text' className='text-xl h-auto font-light border-0 bg-transparent' placeholder="What is happening?!" {...field} />
                                            </FormControl>
                                            {/* <FormDescription>
                                                This is your public display name.
                                            </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="ml-auto rounded-3xl px-6 bg-blue-500 text-white font-semibold hover:bg-blue-500">Post</Button>
                            </form>
                        </Form>
                    </div>
                </div>
                {children}
            </div>
            <Navbar />
        </div>
    )
}



