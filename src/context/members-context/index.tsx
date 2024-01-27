
"use client";

import { createContext, useContext } from "react";
import { IMembersContext } from "./types";
import { useMembers } from "@/hooks/useMembers";




const MembersContext = createContext<IMembersContext>({
  members: null,
  loading: null,
  handleLoadMore: null,
  hasMore: true
})


export const MembersContextProvider = ({ children }: any) => {


  const { members, loading, error, handleLoadMore, reset, hasMore } = useMembers();




  return (<MembersContext.Provider value={{ members,loading ,handleLoadMore, hasMore }} >
    {children}
  </MembersContext.Provider>)
}

export const useMembersContext = () => useContext(MembersContext)