import CustomButton from '@/components/atoms/button'
import TextInput from '@/components/atoms/text-input'
import React from 'react'
import { IEditEmailForm } from './types'
import { useRouter } from 'next/navigation'

const EditEmailFormComponent = ({formik}: IEditEmailForm) => {

  const router = useRouter()
  return (
    <form className="flex flex-col gap-4" onSubmit={formik?.handleSubmit}>
        <TextInput
            name='email'
            type='text'
            label='Fill in new email address'
            required={true}
            value={formik?.values.email} 
            showError={Boolean(formik?.touched.email)}
            onChange={formik?.handleChange}
            onBlur={(e) => {
              formik?.handleBlur(e);
            }}
            errorMessage={formik?.errors.email}
            autoFocus={false}
        />
        <div className="flex items-center gap-4 flex-col sm:flex-row">
            <CustomButton title="Send OTP code" variant="primary" className="w-full sm:w-auto" type='submit' loading={formik?.isValid && formik?.isSubmitting}></CustomButton>
            <CustomButton title="Cancel" variant="secondary" className="w-full sm:w-auto" onClick={() => router.push("/settings") }></CustomButton>
        </div>
    </form>
  )
}

export default EditEmailFormComponent