"use client"
import { useState, useEffect, useCallback } from 'react';
import useLoadingError from './useLoadingError'; // Update the path accordingly
import { getMemberList } from '@/services/members';

export const useMembers = () => {
  const { loading, error, reset, startLoading, stopLoading, setErrorMsg } = useLoadingError();
  const [members, setMembers] = useState<any>([]);
  const [page, setPage] = useState(2); // Initial page value
  const [hasMore, setHasmore] = useState(true); // Initial page value

  const getMembers = useCallback(async () => {
    try {
      startLoading();
      // Replace the following line with your actual API call
      const res:any = await getMemberList({
        search: "",
        per_page: 20,
        page: page,
      });

      // console.log(res?.meta?.pagination?.links?.next,"response ????????????/")
      setMembers((prev:any) => [...prev, ...res?.data]);
      setHasmore(Boolean(res?.meta?.pagination?.links?.next))
    } catch (err:any) {
      setErrorMsg(err?.message);
    } finally {
      stopLoading();
    }
  }, [page]);


  const handleLoadMore = () => {
    getMembers()
    setPage((prevPage) => prevPage + 1);
  };

  return {
    members,
    loading,
    error,
    handleLoadMore,
    reset,
    hasMore
  };
};
