"use client"
import React from 'react'
import SignInForm from './sign-in-form.component'
import { useFormik } from 'formik'
import { loginSchema } from '@/validations/login-schema';
import { useRouter } from 'next/navigation'
import useLoadingError from '@/hooks/useLoadingError';
import { loginUser } from '@/services/auth';
import { setCookie } from 'cookies-next';
import { useAuthContext } from '@/context/auth-context';
import { CONSTANTS } from '@/constants';
import { getUserProfileStatus } from '@/helpers/utils';

const SignInFormContainer = () => {


  const router = useRouter()
  const { loading, error, setErrorMsg, reset, startLoading, stopLoading } = useLoadingError()
  const { setToken } = useAuthContext()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async (values) => {

      try {

        startLoading();
        const res: any = await loginUser(values);

        setCookie(CONSTANTS.COOKIE_JWT, res?.data?.access_token);
        setCookie(CONSTANTS.COOKIE_UESR_JWT, res?.data?.id);
        setToken(res?.data?.access_token)

        router.refresh()

        const publishStatus = getUserProfileStatus(res?.data?.isPublished, res?.data?.admin_publish_hidden)

        if(publishStatus == "false" || publishStatus == "0"){
          router.push("/my-profile?type=preview")
        }else{
          router.push("/my-profile")
        }


        


      } catch (err: any) {

        setErrorMsg(err?.message)
      } finally {
        stopLoading()
      }

    },
  });




  return (
    <SignInForm formik={formik} error={error} resetError={reset} loading={loading} />
  )
}

export default SignInFormContainer