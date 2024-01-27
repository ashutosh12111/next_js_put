import React from 'react'
import { IConfirmDeleteModal } from './confirm-delete.component.types'
import ConfirmDeleteComponent from './confirm-delete.component'

const ConfirmDeleteContainer = (props:IConfirmDeleteModal ) => {
  return (
   <ConfirmDeleteComponent {...props}/>
  )
}

export default ConfirmDeleteContainer