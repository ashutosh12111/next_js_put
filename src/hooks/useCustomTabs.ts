"use client"
import { ICustomTabs } from "@/types";
import { useState, useEffect } from "react";



const useCustomTabs = (key: string, defaultTab?: number): ICustomTabs => {

  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
  //  typeof window !== undefined && sessionStorage.setItem(key, activeTab.toString());
  }, [key, activeTab]);

  const handleTabsChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return {
    activeTab,
    handleTabsChange,
  };
};

export default useCustomTabs;
