"use client"
import React from 'react'
import CustomTabsComponent from './profile-tabs.component'
import { ICustomTabs } from './profile-tabs.types'
import ProfileTabsComponent from './profile-tabs.component'
import useCustomTabs from '@/hooks/useCustomTabs'

const ProfileTabsContainer = () => {

  const {handleTabsChange, activeTab} = useCustomTabs("0")
  const tabs = [{title: "Information"}]

  return (
    <ProfileTabsComponent handleTabsChange={handleTabsChange} activeTab={activeTab} tabs={tabs}/>
  )
}

export default ProfileTabsContainer