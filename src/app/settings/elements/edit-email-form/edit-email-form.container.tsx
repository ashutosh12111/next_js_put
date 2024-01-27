import React from 'react'
import EditEmailFormComponent from './edit-email-form.component'
import { useFormik } from 'formik'
import { editEmailSchema } from '@/validations/edit-email-schema';
import { editEmail } from '@/services/settings';
import getTokenClientSide from '@/utils/getTokenClientSide';
import { showToast } from '@/utils';
import { toast } from 'react-toastify';
import { TOASTR_TYPES } from '@/types';
import { useRouter } from 'next/navigation';
import moment from 'moment';

const EditEmailFormContainer = () => {

  const router = useRouter()

  const formik = useFormik({
    initialValues: {
       email: ""
    },
    validationSchema: editEmailSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async (values: any) => {

      try {

       const res:any =  await editEmail(getTokenClientSide(), values);
       showToast(toast, TOASTR_TYPES.SUCCESS, res?.message)
       router.push(`/settings/verify-otp?token=${res?.data?.token}&email=${encodeURIComponent(values?.email)}`)
       sessionStorage.setItem("otpRequestTimestampEditEmail", moment().toString());

      } catch (err: any) {
           showToast(toast, TOASTR_TYPES.SUCCESS, err?.message)
      }


    },
  });

  return (
    <EditEmailFormComponent formik={formik}/>
  )
}

export default EditEmailFormContainer