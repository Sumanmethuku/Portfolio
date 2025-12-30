/* eslint-disable */

'use client'

import React from "react";
import {
  SiReact,
  SiOpenjdk,
  SiCss3,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiBootstrap,
  SiExpress,
  SiSocketdotio,
  SiPostman
} from '@icons-pack/react-simple-icons'
import { Marquee } from '@/components/ui/marquee'
import { ZapIcon } from 'lucide-react'

const StacksCard = () => {
  return (
    <div className='shadow-feature-card dark:bg-black flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <ZapIcon className='size-[18px]' />
        <h2 className='text-sm font-light'>Stacks</h2>
      </div>
      <Marquee gap='20px' className='py-4' fade pauseOnHover>
        <SiOpenjdk className='size-12' />
        <SiReact className='size-12' />
        <SiNextdotjs className='size-12' />
        <SiJavascript className='size-12' />
        <SiTypescript className='size-12' />
        <SiNodedotjs className='size-12' />
        <SiExpress className='size-12' />
        <SiPostgresql className='size-12' />
        <SiMysql className='size-12' />
        <SiHtml5 className='size-12' />
      </Marquee>
      <Marquee gap='20px' className='py-4' reverse fade pauseOnHover>
        <SiCss3 className='size-12' />
        <SiTailwindcss className='size-12' />
        <SiBootstrap className='size-12' />
        <SiGit className='size-12' />
        <SiSocketdotio className='size-12' />
        <SiVisualstudiocode className='size-12' />
        <SiFigma className='size-12' />
        <SiPostman className='size-12' />
      </Marquee>
    </div>
  )
}

export default StacksCard