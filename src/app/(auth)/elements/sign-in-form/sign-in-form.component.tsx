import React from 'react'
import FormHeader from '../form-header/form-header.component'
import CustomButton from '@/components/atoms/button'
import TextInput from '@/components/atoms/text-input'
import Link from 'next/link'
import { ISignInForm } from './sign-in-form.types'
import ErrorLabel from '@/components/atoms/error-label'


const SignInForm = ({
  formik,
  error,
  resetError,
  loading
}: ISignInForm) => {
  console.log('===formik', formik)

  return (
    <div className="">
      <FormHeader title='Welcome back!' description='Enter your Putit-on Encyclopedia account login information to access Putit-on Encyclopedia.' />
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-32">
          <TextInput name='email' type='email' label='Email' containerClassName='mb-16' value={formik.values.email} showError={Boolean(formik.touched.email)}
            onChange={(e) => {
              resetError()
              formik.handleChange(e)
            }}
            onBlur={(e) => {
              formik.handleBlur(e);
              resetError()
            }}
            errorMessage={formik.errors.email}
            autoFocus={false}
            required={true}
          />
          <TextInput name='password' type='password' label='Password' containerClassName='mb-16' value={formik.values.password} showError={Boolean(formik.touched.password)}
            onChange={(e) => {
              resetError()
              formik.handleChange(e)
            }}
            onBlur={(e) => {
              formik.handleBlur(e);
              resetError()
            }}
            errorMessage={formik.errors.password} 
            required={true}
            />
          {Boolean(error) && <ErrorLabel message={error} />}
          <Link href="/forgot-password" className="text-blue-link transition duration-[0.4s] hover:text-hover-blue-link text-14 leading-20 font-semibold">Forgot password?</Link>
        </div>
        <CustomButton title='Login' type="submit" className='w-full' loading={loading} variant='primary' />
      </form>
      <div className="mt-16 text-white-para text-center text-16 leading-24 font-normal">Don't have an account? <Link href="/register" className="text-blue-link hover:text-hover-blue-link text-16 leading-24 font-semibold whitespace-nowrap">Become a member</Link></div>
    </div>
  )
}

export default SignInForm 