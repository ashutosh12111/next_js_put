import React from 'react'
import FormHeader from '../form-header/form-header.component'
import CustomButton from '@/components/atoms/button'
import TextInput from '@/components/atoms/text-input'
import { IForgotPasswordForm } from './forgot-password.types'
import ErrorLabel from '@/components/atoms/error-label'


const ForgotPasswordForm = ({
  formik,
  error,
  resetError,
  loading
}: IForgotPasswordForm) => {


  return (
    <div>
      <div className="">
        <FormHeader title='Forgot password' description='Enter the email address associated with your account to receive a 6-digit verification code ' />
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-32">
            <TextInput name='email' type='email' label='Email' containerClassName='' value={formik.values.email} showError={Boolean(formik.touched.email)}
              onChange={(e) => {
                resetError()
                formik.handleChange(e)
              }}
              onBlur={(e) => {
                formik.handleBlur(e);
                resetError()
              }}
              errorMessage={formik.errors.email} 
              required={true}
              />
            {Boolean(error) && <ErrorLabel message={error} 
            
            />}
          </div>

          <CustomButton title='Send' className='w-full' loading={loading} type='submit' />
        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordForm