"use client"
import React from 'react'
import CopyButtonComponent from './copy-button.component'

import { ICopyButton } from './types';


const CopyButtonContainer = ({ handleCopyClick, isCopied }: ICopyButton) => {

  return (
    <CopyButtonComponent handleCopyClick={handleCopyClick} isCopied={isCopied} />
  )
}

export default CopyButtonContainer