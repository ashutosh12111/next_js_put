import React from 'react'
import { ILabel } from './label.types'



const Label = ({
  id,
   name,
   required,
   className = ""
}: ILabel) => {
  return (
    <label htmlFor={id} className={`${className} mb-6 text-white-heading text-14 leading-20 font-medium block`}>{name}{required && <span className="ml-2 text-14 font-medium leading-20 text-error-danger-500">*</span>}</label>
  )
}

export default Label