"use client"
import CustomButton from '@/components/atoms/button'
import { useBioContext } from '@/context/bio-context'
import { scrollToBioError } from '@/helpers/utils'
import useLoadingError from '@/hooks/useLoadingError'
import { useRouter } from 'next/navigation'
import React from 'react'

const PreviewBtnComponent = () => {

  const {loading, startLoading, stopLoading} = useLoadingError()
  const {formikBio} = useBioContext();
  


  const router = useRouter()


  const handleOnClick  = () => {

    formikBio?.submitForm()

    if(!formikBio?.errors?.biography){

      formikBio?.submitForm()

        startLoading();

        setTimeout(() => {

          router.refresh()
          router.push(`/my-profile?type=preview`)
          stopLoading()

        },1500)

    }else{
      scrollToBioError()
    }


    
  }


  return (
    <>
    <CustomButton loading={loading}  onClick={handleOnClick} className='py-8 px-24 hover:bg-hover-secondary-button transition duration-[0.4s] border border-white-button text-white-button text-14 font-medium leading-20 rounded-xl focus:outline-none' variant='custom' title='Preview'/>
    </>
  )
}

export default PreviewBtnComponent