import React from 'react'
import { IRatingInput } from './types'
import RatingInputComponent from './rating-input.component'

const RatingInputContainer = (props: any) => {
  return (
   <RatingInputComponent {...props}/>
  )
}

export default RatingInputContainer