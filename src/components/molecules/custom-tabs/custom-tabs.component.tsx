import React from 'react'
import { ICustomTabs } from './custom-tabs.types';

const CustomTabsComponent = ({
    activeTab,
    handleTabsChange,
    tabs,
    className = "",
  }: ICustomTabs) => {
  return (
    <>
    {tabs.map((tab:any, i: number) => {
      return (
        <button
          className={`text-14 leading-16 py-14 px-6 ${
            i === activeTab
              ? "text-white-heading border-b-2 border-white-heading font-semibold"
              : "text-white-para font-normal border-b-2 border-b-transparent"
          }`}
          key={i}
          onClick={() => handleTabsChange(undefined, i)}
        >
          {tab.title}
        </button>
      );
    })}
  </>
  )
}

export default CustomTabsComponent