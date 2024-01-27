"use client"
import React from 'react'
import { IResendOtpButton } from './resend-otp-button.types'
import { convertToMinutesAndSeconds } from '@/utils'


const ResendOtpButtonComponent = ({
    countdownTime,
    resendOtp,
    type
}: IResendOtpButton) => {

    if (type == 1) {
        return <>
            {Number(countdownTime) <= 0 ? <div className="mt-5 flex justify-center cursor-pointer" onClick={resendOtp}>
                <div className="inline-block rounded-full px-20 py-12 text-white text-12 font-medium leading-6">Resend OTP</div>
            </div> : <div className="mt-20 flex justify-center">
                <div className="inline-block rounded-full bg-[#556477] px-20 py-12 text-white text-12 font-medium leading-6">{convertToMinutesAndSeconds(countdownTime || 0)}</div>
            </div>}

        </>
    } else {
        return <>
            {Number(countdownTime) <= 0 ? <></> : 
             <div className="flex items-center justify-center">
             <div className="py-4 px-8 bg-[#EBEEF1] rounded-[32px] text-12 font-mormal leading-20">{convertToMinutesAndSeconds(countdownTime || 0)}</div>
            </div>}

        </>
    }
}

export default ResendOtpButtonComponent