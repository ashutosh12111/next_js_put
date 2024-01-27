"use client"
import React from 'react'
import { useRegisterContext } from '@/context/register-context'
import { Icon } from '@/components/atoms/icons'



const AddSectionComponent = ({formik}: any) => {

    const { handleAddSection} = useRegisterContext()


    return (
        <div className="flex items-center justify-center">
        <button
          onClick={() => handleAddSection(formik)}
          className="flex items-center gap-2 blue-link-with-icon"
        >
          <Icon.IcPlus />{" "}
          <span className="text-blue-link text-18 font-normal leading-28">
            Add Section
          </span>
        </button>
      </div>
    )
}

export default AddSectionComponent