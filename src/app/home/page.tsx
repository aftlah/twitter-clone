'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bookmark, Heart, KanbanIcon, MessageSquare, MoreHorizontal, Pencil, Repeat2, Share2 } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'



const data = [
  {
    id: 1,
    username: 'pulu pulu',
    avatar: '',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae corrupti magnam quos, perspiciatis at quia, ducimus accusantium possimus corporis aliquid quis minus. Mollitia laboriosam eos, culpa sed porro pariatur!',
  },
  {
    id: 2,
    username: 'aftalh',
    avatar: '',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae corrupti magnam quos, perspiciatis at quia, ducimus accusantium possimus corporis aliquid quis minus. Mollitia laboriosam eos, culpa sed porro pariatur!',
  },
  {
    id: 3,
    username: 'dlifalde',
    avatar: '',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae corrupti magnam quos, perspiciatis at quia, ducimus accusantium possimus corporis aliquid quis minus. Mollitia laboriosam eos, culpa sed porro pariatur!',
  },
  {
    id: 4,
    username: 'nawreen',
    avatar: '',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae corrupti magnam quos, perspiciatis at quia, ducimus accusantium possimus corporis aliquid quis minus. Mollitia laboriosam eos, culpa sed porro pariatur!',
  },
  {
    id: 5,
    username: 'narenath',
    avatar: '',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae corrupti magnam quos, perspiciatis at quia, ducimus accusantium possimus corporis aliquid quis minus. Mollitia laboriosam eos, culpa sed porro pariatur!',
  },
  {
    id: 6,
    username: 'coki guslaw',
    avatar: '',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae corrupti magnam quos, perspiciatis at quia, ducimus accusantium possimus corporis aliquid quis minus. Mollitia laboriosam eos, culpa sed porro pariatur!',
  },
  {
    id: 7,
    username: 'ronaldonyo',
    avatar: '',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae corrupti magnam quos, perspiciatis at quia, ducimus accusantium possimus corporis aliquid quis minus.'
  }
]


const HomePage = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scroll])

  return (
    <main className='mt-32 realtive sm:mt-0 '>
      <Link href={''} className={`fixed py-2 right-5  size-14 bottom-24 z-50 rounded-full hover:opacity-90 bg-blue-500 ${scroll ? 'opacity-50' : "opacity-100"}`}>
        <div className='w-fit  h-full justify-center m-auto flex items-center'>
          <Pencil className="size-6 " />
        </div>
      </Link>

      {data?.map((data, i) => (
        <div key={data.id} className=' px-5 py-5 grid border grid-cols-8 sm:grid-cols-12 content-center sm:gap-x-5 md:gap-x-0 '>
          <Avatar className='col-span-1'>
            <Link href={''}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="size-10" />
              <AvatarFallback>Profile</AvatarFallback>
            </Link>
          </Avatar>
          <div className='col-span-7 sm:col-span-10 '>
            <div className='flex justify-between mb-1'>
              <Link href={''} className='font-bold hover:underline'>
                {data.username}
              </Link>
              <Link href={''}>
                <MoreHorizontal />
              </Link>
            </div>
            <Link href={''}>
              <p className='text-xs md:text-sm'>
                {data.contents}
              </p>
            </Link>

            <div className='flex text-sm gap-x-3 text-gray-500 pt-4 items-center'>
              <Link href={''} className='flex gap-1 items-center px-1'>
                <MessageSquare className="size-4" />
                <span>2.3k</span>
              </Link>
              <Link href={''} className='flex gap-1 items-center px-1'>
                <Repeat2 className="size-4" />
                <span>480</span>
              </Link>
              <Link href={''} className='flex gap-1 items-center px-1'>
                <Heart className="size-4" />
                <span>1.5K</span>
              </Link>
              <Link href={''} className='flex gap-1 items-center px-1'>
                <KanbanIcon className="size-4 rotate-180" />
                <span>80K</span>
              </Link>
              <Link href={''} className='flex items-center'>
                <Bookmark className="size-4" />
              </Link>
              <Link href={''} className='flex items-center'>
                <Share2 className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}

export default HomePage