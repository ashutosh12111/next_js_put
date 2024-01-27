"use client"
import React from 'react'
import FormHeader from '../form-header/form-header.component'
import CustomButton from '@/components/atoms/button'
import CustomInputOTP from '@/components/molecules/custom-otp-input'
import { IVerifyOtpForm } from './verify-otp-form.types'
import ErrorLabel from '@/components/atoms/error-label'
import dynamic from 'next/dynamic'

const ResendOtpButton = dynamic(() => import('../resend-otp-button'), { ssr: false })



const VerifyOtpForm = ({
    error,
    resetError,
    loading,
    handleSubmit,
    setOtp,
}: IVerifyOtpForm) => {


    return (
        <div className="">
            <FormHeader title='Enter verification code' description='Enter the 6-digit verification code that was sent to your email to change your password.' />
            <form onSubmit={handleSubmit}>
                <div className="mb-32">
                    <CustomInputOTP setOtp={setOtp} />
                    {Boolean(error) && <ErrorLabel message={error} />}
                    <ResendOtpButton keyName="otpRequestTimestamp" type={1} resetError={resetError}/>
                </div>
                <CustomButton title='Next' className='w-full' loading={loading} type="submit" variant='primary' />
            </form>
        </div>
    )
}

export default VerifyOtpForm