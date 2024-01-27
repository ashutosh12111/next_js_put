"use client"
import React from 'react'
import CustomModalComponent from './custom-modal.component'
import { ICustomModal } from './custom-modal.types'

const CustomModalContainer = (props: ICustomModal) => {
  return (
    <CustomModalComponent {...props}/>
  )
}

export default CustomModalContainer