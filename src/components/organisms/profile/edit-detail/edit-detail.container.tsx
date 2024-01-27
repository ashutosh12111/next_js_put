import React from 'react'
import EditDetailComponent from './edit-detail.component'
import { IEditDetail } from './types'

const EditDetailContainer = (props: IEditDetail) => {
  return (
   <EditDetailComponent {...props}/>
  )
}

export default EditDetailContainer