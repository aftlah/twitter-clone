'use client'
import LogoX from '@/components/Logo/LogoX'
import { ModeToggle } from '@/components/theme/ModeToggle'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginPage = () => {

    const router = useRouter()

    const hadleLoginSubmit = () => {
        // alert('login')
        router.push('/')
    }


    return (
        <>
            <div className='grid grid-cols-1  lg:hidden max-w-md p-5  mx-auto '>
                {/* <div className='p-5'>
                    <div className='size-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                    </div>
                    <div className=''>
                        <div>
                            <h1 className='text-[2.4rem] pt-12 pb-8 font-bold'>Happening now</h1>
                        </div>
                        <h5 className=' text-2xl font-bold '>Join today.</h5>
                    </div>
                </div> */}


                <div className=' mx-auto mb-28'>
                    <div className='size-10'>
                        <LogoX/>
                    </div>
                </div>

                <div className=' mx-auto w-full px-7'>
                    <div className=''>
                        <h1 className='text-2xl font-bold py-5'>Sing in to X</h1>
                        <div className='flex flex-col items-center'>
                            <Button variant={"secondary"} className='bg-white w-full rounded-full text-gray-500 text-sm '>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 262" className='size-5 mx-1'>
                                    <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
                                    <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
                                    <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" />
                                    <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
                                </svg>
                                Login dengan Google</Button>
                        </div>

                    </div>

                    <div className='flex py-5 items-center gap-2'>
                        <div className='bg-gray-400 w-full h-[.1px] '></div>
                        <div>or</div>
                        <div className='bg-gray-400 w-full h-[.1px] '></div>
                    </div>

                    <form  onSubmit={hadleLoginSubmit}>
                        <div className=''>
                            <Label htmlFor="username">username</Label>
                            <Input type="text" id="username" placeholder="Username" className='py-7' />
                        </div>
                        <div className='py-3'>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" placeholder="********" className='py-7' />
                        </div>
                        <div className='py-3 flex justify-center w-full'>
                            <Button type='submit'  variant="secondary" className='bg-white rounded-full text-gray-700 w-full '>Login</Button>
                        </div>
                    </form>
                    <div className='mt-10'>
                        <span className='text-sm text-gray-500'>Don&apos;t have an account? <Link href="/" className='text-blue-500'>Sign Up</Link> </span>
                    </div>
                </div>

            </div>

        </>

    )
}

export default LoginPage


