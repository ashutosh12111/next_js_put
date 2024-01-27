"use client"
import React from 'react'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import useLoadingError from '@/hooks/useLoadingError';
import { forgotPassword } from '@/services/auth'
import ForgotPasswordForm from './forgot-password-form.component'
import { forgotPasswordSchema } from '@/validations/forgot-password-schema'
import moment from 'moment';


const ForgotPasswordFormContainer = () => {

  const router = useRouter();
  const { loading, error, setErrorMsg, reset, startLoading, stopLoading } = useLoadingError()

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async (values) => {
      try {

        startLoading();
        const res: any = await forgotPassword(values);
        console.log(res, "res");
        router.push(`/verify-otp?token=${res?.data?.token}&email=${encodeURIComponent(formik.values.email)}`);
        sessionStorage.setItem("otpRequestTimestamp", moment().toString());

      } catch (err: any) {
        setErrorMsg(err?.message)
      } finally {
        stopLoading()
      }
    },
  });


  return (
    <ForgotPasswordForm formik={formik} error={error} resetError={reset} loading={loading} />
  )
}

export default ForgotPasswordFormContainer