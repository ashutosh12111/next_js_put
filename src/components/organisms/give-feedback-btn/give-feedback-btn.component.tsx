"use client"
import CustomButton from '@/components/atoms/button'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const GiveFeedbackBtnComponent = () => {

    const router = useRouter();
    const pathname = usePathname();

  return (
    <CustomButton title="Give feedback" variant="primary" className={`w-full sm:w-auto ${pathname == "/feedback" ? "hidden":""}`} onClick={() => router.push("/feedback")}></CustomButton>
  )
}

export default GiveFeedbackBtnComponent