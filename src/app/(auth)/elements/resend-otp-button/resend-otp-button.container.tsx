"use client"
import React, { useEffect, useRef, useState } from 'react'
import ResendOtpButtonComponent from './resend-otp-button.component'
import { usePathname, useSearchParams } from 'next/navigation';
import moment from 'moment';
import { forgotPassword } from '@/services/auth';
import { useRouter } from 'next/navigation';


const ResendOtpButtonContainer = ({resetError, type , keyName,setCanResendOtp}: any) => {

 

  const [countdownTime] = useState(300);
  const [difference, setDifference] = useState(0);
  const intervalRef = useRef<any>(null);

  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ""
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter()


  const otpRequestTimestamp = sessionStorage.getItem(keyName);

  useEffect(() => {
    const handleInterval = () => {
      const currentTime = moment();
      const differenceInSeconds = currentTime.diff(
        otpRequestTimestamp,
        "seconds"
      );

      setDifference(differenceInSeconds);

      if (differenceInSeconds >= countdownTime) {
        setCanResendOtp && setCanResendOtp(false);
        clearInterval(intervalRef.current);
      }
    };

    if (otpRequestTimestamp) {
      const currentTime = moment();
      const differenceInSeconds = currentTime.diff(
        otpRequestTimestamp,
        "seconds"
      );

      if (differenceInSeconds <= countdownTime) {
        setCanResendOtp && setCanResendOtp(true);
        handleInterval();
        intervalRef.current = setInterval(handleInterval, 1000);
      } else {
        setCanResendOtp && setCanResendOtp(false);
      }
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [otpRequestTimestamp, countdownTime]);

  const handleClickResendOtp = () => {
    resetError()
    setDifference(0);
    setCanResendOtp && setCanResendOtp(true);
    forgotPassword({email}).then((res:any) => {
       console.log(res?.data?.token)
       params.set("token", res?.data?.token);
       router.replace(`${pathname}?${params}`);
    }).catch((err: any) => {
       console.log(err,"error")
    })
    sessionStorage.setItem(keyName, moment().toString());
  };



    return (
        <ResendOtpButtonComponent countdownTime={countdownTime - difference} resendOtp={handleClickResendOtp} keyName={keyName} type={type}/>
    )
}

export default ResendOtpButtonContainer