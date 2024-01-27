"use client"
import React from 'react'
import { IBackBtn } from './types'
import { Icon } from '../icons'
import { useRouter } from 'next/navigation'

const BackBtnComponent = ({title}: IBackBtn) => {


    const router = useRouter()
    
  return (
    <button className="inline-flex items-center gap-2 py-9" onClick={() => {
        router.back()
    }}>
    <Icon.IcBackArrow />
    <span className="text-white-heading text-14 font-semibold leading-20">{title}</span>
  </button>
  )
}

export default BackBtnComponent