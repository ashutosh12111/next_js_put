"use client"
import useLoadingError from '@/hooks/useLoadingError'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

import { verifyOtp } from '@/services/auth';
import VerifyOtpForm from './verify-otp-form.component'

const VerifyOtpFormContainer = () => {

    const router = useRouter();
    const searchParams = useSearchParams()
    const token = searchParams.get('token') || ""
    const { loading, error, setErrorMsg, reset, startLoading } = useLoadingError()
    const [otp, setOtp] = useState("")

    console.log(router)
    const handleSubmit = async (e: React.FormEvent) => {
        try {

            // alert(otp)
            e.preventDefault()

            if(otp?.length < 6){
                return setErrorMsg("Please enter OTP")
            }
            startLoading();
            const res: any = await verifyOtp({
                code: otp,
                token
            });
            console.log(res, "res");
            router.push(`/reset-password?token=${token}`)

        } catch (err: any) {
            setErrorMsg(err?.message)
        } finally {
            // stopLoading()
        }
    }


    return (
        <>
            <VerifyOtpForm error={error} resetError={reset} loading={loading} handleSubmit={handleSubmit} otp={otp} setOtp={setOtp} />
        </>
    )
}

export default VerifyOtpFormContainer