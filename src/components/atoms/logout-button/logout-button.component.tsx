"use client"
import React from 'react'
import { Icon } from '../icons'
import { useAuthContext } from '@/context/auth-context'

const LogoutButtonComponent = () => {

    const {handleLogout } = useAuthContext()
    

    return (
        <span className="pl-12 py-12 pr-16 flex items-center gap-2 logout" onClick={handleLogout}>
            <Icon.IcLogout />
            <span className="text-white-heading text-14 font-normal leading-20 whitespace-nowrap">Log out</span>
        </span>
    )
}

export default LogoutButtonComponent