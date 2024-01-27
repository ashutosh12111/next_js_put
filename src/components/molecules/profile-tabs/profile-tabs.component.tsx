"use client"
import React from 'react'
import { ICustomTabs } from './profile-tabs.types';
import CustomTabs from '../custom-tabs';

const ProfileTabsComponent = ({
    activeTab,
    handleTabsChange,
    tabs,
    className = "",
  }: ICustomTabs) => {
  return (
    <>
        <CustomTabs activeTab={activeTab} handleTabsChange={handleTabsChange} tabs={tabs}/>
    </>
  )
}

export default ProfileTabsComponent