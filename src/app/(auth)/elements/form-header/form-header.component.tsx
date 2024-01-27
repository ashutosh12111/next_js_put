import React from 'react'
import { IFormHeader } from './form-header.types'



const FormHeader = ({
    title,
    description
}: IFormHeader) => {
  return (
    <div className="mb-32">
        <h2 className="mb-8 text-32 sm:text-36 font-bold leading-40 sm:leading-44 text-white-heading">{title}</h2>
        <p className="text-14 sm:text-16 font-normal leading-20 sm:leading-24 text-white-para">{description}</p>
    </div>
  )
}

export default FormHeader