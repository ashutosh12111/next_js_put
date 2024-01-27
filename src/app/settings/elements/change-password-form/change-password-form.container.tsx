import React from 'react'
import ChangePasswordFormComponent from './change-password-form.component'
import { useRouter, useSearchParams } from 'next/navigation'
import useLoadingError from '@/hooks/useLoadingError'
import useRecaptcha from '@/hooks/useRecaptcha'
import { useFormik } from 'formik'
import { changePasswordSchema } from '@/validations/change-password-schema'
import { changePassword } from '@/services/settings'
import getTokenClientSide from '@/utils/getTokenClientSide'
import { showToast } from '@/utils'
import { toast } from 'react-toastify'
import { TOASTR_TYPES } from '@/types'

const ChangePasswordFormContainer = () => {


  const router = useRouter()
  const { loading, error, setErrorMsg, reset, startLoading, stopLoading } = useLoadingError();
  const searchParams = useSearchParams()
  const { setRecaptcha, isVerified, recaptcha } = useRecaptcha();



  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      repeatPassword: ""
    },
    validationSchema: changePasswordSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async (values) => {

      if (isVerified) {

        try {

          startLoading();
          const res: any = await changePassword(getTokenClientSide(), values)
          console.log(res, "response")
          router.push("/settings");
          showToast(toast,TOASTR_TYPES.SUCCESS,res?.message);
          formik.resetForm()


        } catch (err: any) {

          showToast(toast,TOASTR_TYPES.ERROR,err?.message)
          setErrorMsg(err?.message)
        } finally {
          stopLoading()
        }

      }


    },
  });





  return (
    <ChangePasswordFormComponent formik={formik} error={error} resetError={reset} loading={loading} isVerified={isVerified} recaptcha={recaptcha} setRecaptcha={setRecaptcha} />
  )
}

export default ChangePasswordFormContainer