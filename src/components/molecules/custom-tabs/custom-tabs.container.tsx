import React from 'react'
import CustomTabsComponent from './custom-tabs.component'
import { ICustomTabs } from './custom-tabs.types'

const CustomTabsContainer = (props: ICustomTabs) => {
  return (
    <CustomTabsComponent {...props}/>
  )
}

export default CustomTabsContainer