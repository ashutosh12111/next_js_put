"use client"
import React from 'react'
import SettingsBox from '../elements/settings-box'
import EditEmailForm from '../elements/edit-email-form'

const EditEmail = () => {
  return (
    <>
      <SettingsBox title="Edit email address" backButtonUrl='/settings'>
        <EditEmailForm />
      </SettingsBox>
    </>
  )
}

export default EditEmail