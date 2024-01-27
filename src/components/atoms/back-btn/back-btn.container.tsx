import React from 'react'
import BackBtnComponent from './back-btn.component'
import { IBackBtn } from './types'

const BackBtnContainer = ({title = "Back"}: IBackBtn) => {
  return (
    <BackBtnComponent title={title}/>
  )
}

export default BackBtnContainer