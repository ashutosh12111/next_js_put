"use client"
import React from 'react'
import TextInput from '@/components/atoms/text-input'
import CustomButton from '@/components/atoms/button'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/context/auth-context'

const SettingsFormComponent = () => {

  const router = useRouter()

  const {user} = useAuthContext()
  return (
    <form className="flex flex-col gap-4">
      <TextInput
        name='Current email address'
        type='email'
        label='Current email address'
        value={user?.email}
        disabled={true}
      />
      <div className="flex items-center gap-4 flex-col sm:flex-row">
        <CustomButton title="Edit email address" variant="primary" className="w-full sm:w-auto" onClick={() => router.push("/settings/edit-email")}></CustomButton>
        <CustomButton title="Edit password" variant="secondary" className="w-full sm:w-auto" onClick={() => router.push("/settings/change-password")}></CustomButton>
      </div>
    </form>
  )
}

export default SettingsFormComponent