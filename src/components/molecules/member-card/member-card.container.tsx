import React from 'react'
import MemberCardComponent from './member-card.component'
import { IMemberCard } from './member-card.types'

const MemberCardContainer = (props: IMemberCard) => {
  return (
   <MemberCardComponent {...props}/>
  )
}

export default MemberCardContainer