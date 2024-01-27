"use client"
import React from 'react'
import SettingsBox from '../elements/settings-box'
import VerifyOtpForm from '../elements/verify-otp-form'


const VerifyOtp = () => {
  return (
    <>
      <SettingsBox title="Settings" backButtonUrl='/settings/edit-email'>
        <VerifyOtpForm/>
      </SettingsBox>
    </>
  )
}

export default VerifyOtp