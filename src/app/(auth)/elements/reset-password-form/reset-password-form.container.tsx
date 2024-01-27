"use client"
import React from 'react'
import { useFormik } from 'formik'
import { useRouter, useSearchParams } from 'next/navigation'
import useLoadingError from '@/hooks/useLoadingError';
import { resetPassword } from '@/services/auth';
import ResetPasswordForm from './reset-password-form.component';
import { resetPasswordSchema } from '@/validations/reset-password-schema';
import useRecaptcha from '@/hooks/useRecaptcha';

const ResetPasswordFormContainer = () => {


  const router = useRouter()
  const { loading, error, setErrorMsg, reset, startLoading, stopLoading } = useLoadingError();
  const searchParams = useSearchParams()
  const token = searchParams.get('token') || ""
  const { setRecaptcha, isVerified, recaptcha } = useRecaptcha();



  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async (values) => {

      if (isVerified) {

        try {

          startLoading();
          const res: any = await resetPassword({ ...values, token })
          console.log(res, "response")
          router.push("/reset-password-success");


        } catch (err: any) {

          setErrorMsg(err?.message)
        } finally {
          stopLoading()
        }

      }


    },
  });




  return (
    <ResetPasswordForm formik={formik} error={error} resetError={reset} loading={loading} isVerified={isVerified} recaptcha={recaptcha} setRecaptcha={setRecaptcha} />
  )
}

export default ResetPasswordFormContainer