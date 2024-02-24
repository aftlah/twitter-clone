import { ReactNode, SVGProps } from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import LogoX from "@/components/Logo/LogoX";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const EpSetting = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1024 1024" {...props}>
        <path fill="currentColor" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256z"></path>
    </svg>
)



export const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <header className="px-5 pt-3 border ">
                    <div className="flex pb-7 justify-between items-center">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="size-9" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="size-5">
                            <LogoX />
                        </div>
                        <Button variant={'ghost'}>
                            <EpSetting className="size-5" />
                        </Button>
                    </div>

                    <div className="flex items-center justify-around">
                        <Link href={''} className={`text-sm font-bold cursor-pointer border-b-4 py-3 border-blue-500 `}>For you</Link>
                        <Link href={'/login'} className={`text-sm font-normal cursor-pointer py-3 text-gray-400 border-b-4 border-blue-500`}>Following</Link>
                    </div>
            </header>

            {children}
        </>
    )
}

export default HomeLayout;
