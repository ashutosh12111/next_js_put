"use client"
import React, { useState } from 'react'
import CustomButton from '@/components/atoms/button'
import CustomInputOTP from '@/components/molecules/custom-otp-input'
import { IVerifyOtpForm } from './verify-otp-form.types'
import ErrorLabel from '@/components/atoms/error-label'
import dynamic from 'next/dynamic'

const ResendOtpButton = dynamic(() => import('../../../(auth)/elements/resend-otp-button'), { ssr: false })



const VerifyOtpForm = ({
    error,
    loading,
    handleSubmit,
    otp,
    setOtp,
    resendOtp,
    loadingResend
}: IVerifyOtpForm) => {

    const [canResendOtp, setCanResendOtp] = useState(true)


    return (
        <>
           <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="settings-forget-otp-input">
                            <CustomInputOTP setOtp={setOtp} />
                            {Boolean(error) && <ErrorLabel message={error} />}
                        </div>
                        <ResendOtpButton keyName="otpRequestTimestampEditEmail" type={2} setCanResendOtp={setCanResendOtp}/>
                        <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
                            <CustomButton type='submit' title="Save change" variant="primary" className="w-full sm:w-auto"  loading={loading}></CustomButton>
                            <CustomButton title="Re-send code" variant="secondary" className="w-full sm:w-auto" disabled={canResendOtp || loadingResend} onClick={resendOtp} loading={loadingResend}></CustomButton>
                        </div>
           </form>
        </>
    )
}

export default VerifyOtpForm