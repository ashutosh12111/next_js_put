"use client"
import React from 'react'
import { useRegisterContext } from '@/context/register-context'
import { IDeleteButton } from './delete-button.types'
import { Icon } from '@/components/atoms/icons'


const DeleteButtonComponent = ({ id, formik, saveOnFocusOut,toggle }: IDeleteButton) => {

    const { setDeleteId, handleDelete } = useRegisterContext();
 
    return (
        <>
            <button className="absolute right-[-11px] top-[-11px] delete-section group-hover:block hidden " onClick={() => {
                const {title, description, id: idx} = formik?.values?.biography[id];
                if(idx){
                    setDeleteId(id)
                    toggle();
                }else{
                    handleDelete(id, formik, Boolean(saveOnFocusOut),() => {})
                }
            }}>
                <Icon.IcBin />
            </button>
        </>
    )
}

export default DeleteButtonComponent