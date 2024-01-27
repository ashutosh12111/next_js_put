import { Icon } from '@/components/atoms/icons'
import React from 'react'
import { ILinkedin } from './types'

const ShareLinkedinComponent = ({handleClick}:ILinkedin) => {
  return (
    <li onClick={handleClick}>
      <div className="pl-16 py-12 pr-16 flex items-center gap-2 group">
        <Icon.IcLinkedin />
        <span className="text-white-para text-14 font-medium leading-20 whitespace-nowrap group-hover:text-white transition duration-[0.4s]">Share on LinkedIn</span>
      </div>
    </li>
  )
}

export default ShareLinkedinComponent