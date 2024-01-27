"use client"
import useLoadingError from '@/hooks/useLoadingError'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import React, { useState } from 'react'
import VerifyOtpForm from './verify-otp-form.component'
import { editEmail, emailVerifyCode } from '@/services/settings';
import getTokenClientSide from '@/utils/getTokenClientSide';
import { showToast } from '@/utils';
import { toast } from 'react-toastify';
import { TOASTR_TYPES } from '@/types';
import { useAuthContext } from '@/context/auth-context';
import moment from 'moment';

const VerifyOtpFormContainer = () => {

    const router = useRouter();
    const searchParams = useSearchParams()
    const token = searchParams.get('token') || ""
    const email = searchParams.get('email') || ""
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();


    const { loading, error, setErrorMsg, reset, startLoading, stopLoading } = useLoadingError()
    const { loading: loadingResend, error: errorResend, reset: resetResend, startLoading: startLoadingResend, stopLoading: stopLoadingResend } = useLoadingError()
    const [otp, setOtp] = useState("");

    const { getProfile } = useAuthContext()
    


    const handleSubmit = async (e: React.FormEvent) => {
        try {

            e.preventDefault()

            if(otp?.length < 6){
                return setErrorMsg("Please enter OTP")
            }
            startLoading();
            const res: any = await emailVerifyCode(getTokenClientSide(),{
                code: otp,
                token,
                email
            });
            console.log(res, "res");
            showToast(toast,TOASTR_TYPES.SUCCESS, res?.message)
            getProfile()
            sessionStorage.removeItem("otpRequestTimestampEditEmail")
            router.push(`/settings`)


        } catch (err: any) {
            setErrorMsg(err?.message)
        } finally {
            // stopLoading()
        }
    }

    const resendOtp = async() => {
        try {

            reset()
            startLoadingResend()
            const res:any =  await editEmail(getTokenClientSide(), {email});

            params.set("token", res?.data?.token);
            router.replace(`${pathname}?${params}`);
            showToast(toast, TOASTR_TYPES.SUCCESS, res?.message)
            sessionStorage.setItem("otpRequestTimestampEditEmail", moment().toString());
     
           } catch (err: any) {
                showToast(toast, TOASTR_TYPES.SUCCESS, err?.message)
           } finally{
            resetResend()
           }
    }


    return (
        <>
            <VerifyOtpForm error={error} resetError={reset} loading={loading} handleSubmit={handleSubmit} otp={otp} setOtp={setOtp} resendOtp={resendOtp} loadingResend={loadingResend}/>
        </>
    )
}

export default VerifyOtpFormContainer