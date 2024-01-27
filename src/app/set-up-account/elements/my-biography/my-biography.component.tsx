"use client"
import BiographyEditable from '@/components/organisms/biography/biography-editable'
import { useRegisterContext } from '@/context/register-context';
import React, { useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation';

const MyBiographyComponent = () => {

  const { formik } = useRegisterContext();
  const router = useRouter();


  console.log(formik?.values,"formik set up account")

  useLayoutEffect(() => {

    if(!formik?.values?.email || !formik?.values?.password){
         router.push("/register")
    }
     
  },[])

  return (
    <BiographyEditable className="bg-gray-400 border border-border-color rounded-b-xl border-t-0 p-20 default-section-template biography-section-height" showHeader={true} formik={formik} />
  )
}

export default MyBiographyComponent