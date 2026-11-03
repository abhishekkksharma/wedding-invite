import React from 'react'
import VanshuAndGourav from "@/assets/vanshu.jpeg"
import Frame from "@/assets/edited-photo.png"
import Image from 'next/image'

function Photo() {
  return (
    <div className='items-center justify-center flex flex-col px-4 py-10 '>
        <Image className='w-[80vw] h-auto ' src={Frame} alt='frame'/>
    </div>
  )
}

export default Photo