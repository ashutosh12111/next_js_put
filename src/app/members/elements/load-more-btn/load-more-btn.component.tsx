"use client"
import CustomButton from '@/components/atoms/button'
import { useMembersContext } from '@/context/members-context'
import React from 'react'

const LoadMoreBtnComponent = ({showButton}: any) => {

  const {handleLoadMore, loading, hasMore} = useMembersContext()

  return (
    <div className="flex justify-center text-white">
        {(showButton && hasMore)&& <CustomButton title="Load more" variant="secondary" className='mt-48' onClick={() => {
                       (handleLoadMore) && handleLoadMore()
                    }} loading={loading}/>}
    </div>
  )
}

export default LoadMoreBtnComponent