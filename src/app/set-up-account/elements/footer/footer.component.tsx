"use client"
import React from 'react'
import CustomButton from '@/components/atoms/button'
import { useRegisterContext } from '@/context/register-context'
import { useRouter } from 'next/navigation'


const Footer = () => {

  const { formik} = useRegisterContext()
  const router = useRouter()

  return (
    <div className="bg-gray-400 text-white mt-auto border-t border-border-color sticky bottom-0 w-full z-20 py-15 sm:py-24">
      <div className="main-container">
        <div className="flex flex-row items-center justify-end gap-5">
          <CustomButton title="Back" variant='secondary' className="w-full sm:w-auto" onClick={() => {
              router.push("/register")
          }} />
          <CustomButton title="Next" variant='primary' className="w-full sm:w-auto" onClick={() => {
            formik?.handleSubmit()
          }
        } 
          loading={formik?.isSubmitting && formik.isValid}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer