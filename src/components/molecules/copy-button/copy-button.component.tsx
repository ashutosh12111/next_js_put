import { Icon } from '@/components/atoms/icons'
import React from 'react'
import { ICopyButton } from './types'

const CopyButtonComponent = ({ handleCopyClick }: ICopyButton) => {
  return (
    <>

      <li onClick={handleCopyClick}>
        <div className="pl-16 py-12 pr-16 flex items-center gap-2 group">
          <Icon.IcCopy />
          <span className="text-white-para text-14 font-medium leading-20 whitespace-nowrap group-hover:text-white transition duration-[0.4s]">Copy Link</span>
        </div>
      </li>
    </>
  )
}

export default CopyButtonComponent