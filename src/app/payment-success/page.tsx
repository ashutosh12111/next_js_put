"use client"
import CustomButton from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icons'
import { useAuthContext } from '@/context/auth-context'
import { paymentSuccess } from '@/services/payment'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'


const PaymentSuccess = () => {

  const router = useRouter()
  const searchParams = useSearchParams()
  const {getProfile} = useAuthContext()
  const session_id = searchParams.get('session_id') || ""

  useEffect(() => {
    paymentSuccess(session_id).then((res => {

      getProfile()
      router.refresh()
      console.log(res, "response ")
    })).catch(err => {
      console.log(err, "erro")
    })
  }, [])


  return (
    <main className="h-full flex items-center justify-center mt-0">
      <div className="main-container">
        <div className="xl:w-[526px] mx-auto flex flex-col items-center">
          <div className="mb-32 flex items-center justify-center">
            <div className="w-[120px] h-[120px] bg-gray-800 rounded-[28px] flex items-center justify-center">
              <Icon.IcExclamation />
            </div>
          </div>
          <div className="mb-24">
            <h4 className="mb-8 text-white-heading text-36 font-bold leading-44 tracking-0.72 text-center">Congratulations!</h4>
            <p className="mb-8 text-white-para text-14 font-normal leading-20 text-center">Congratulations on becoming the 90/100th member, you are entitled to free access forever.</p>
          </div>
          <CustomButton title='Continue' className="min-w-[206px]" onClick={() => {
            router.push("/")
          }} />
        </div>
      </div>
    </main>
  )
}

export default PaymentSuccess