"use client"
import { AuthContextProvider } from '@/context/auth-context'
import { BioContextProvider } from '@/context/bio-context'
import { MembersContextProvider } from '@/context/members-context'
import { RegisterContextProvider } from '@/context/register-context'
import React from 'react'

const ContextProvider = ({ children }: any) => {

    return (
        <>
        <AuthContextProvider>
        <RegisterContextProvider>
            <BioContextProvider>   
                <MembersContextProvider>
                {children}
                </MembersContextProvider>       
                </BioContextProvider>
        </RegisterContextProvider>
        </AuthContextProvider>
        </>

    )

}

export default ContextProvider