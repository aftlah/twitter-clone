import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const HomePage = () => {
  return (
    <main className=' '>
      <div className='mt-5 px-5 py-5 grid border  grid-cols-7 content-center '>
        <Avatar className=''>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="size-10" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='col-span-6 '>
          <div>
            <p className='font-bold '>
              username
            </p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae corrupti magnam quos, perspiciatis at quia, ducimus accusantium possimus corporis aliquid quis minus. Mollitia laboriosam eos, culpa sed porro pariatur!</p>
          </div>
          <div className='flex text-sm gap-x-2 pt-4'>
            <div>24</div>
            <div>480</div>
            <div>1.5K</div>
            <div>80K</div>
            <div>simpan</div>
            <div>download</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage