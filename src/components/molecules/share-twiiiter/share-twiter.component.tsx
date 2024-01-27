import { Icon } from '@/components/atoms/icons'
import React from 'react'
import { IShareTwitter } from './types'

const ShareTwiiterComponent = ({handleClick}:IShareTwitter) => {
  return (
    <li onClick={handleClick}>
      <div className="pl-16 py-12 pr-16 flex items-center gap-2 group">
          <Icon.IcTwitter />
          <span className="text-white-para text-14 font-medium leading-20 whitespace-nowrap group-hover:text-white transition duration-[0.4s]">Share on X</span>
      </div>
    </li>
  )
}

export default ShareTwiiterComponent