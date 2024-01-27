"use client"
import React from 'react'

const ContentsComponent = ({ bio, activeSection, handleSidebarItemClick }: any) => {



  return (
    <div className="xl:w-1/5 order-2 xl:order-1  xl:block hidden">
      <div className="sticky top-[135px]">
        <div className="mb-8 text-blue-link text-18 font-semibold leading-28">Contents <span>({bio?.length})</span></div>
        <ul className="flex flex-col gap-2 biography-side-bar">
          {
            bio?.map((bio: any, key: number) => {
              return <li key={key} id={"section-" + key} onClick={() => handleSidebarItemClick(key)} className={activeSection == `${key}` ? 'active' : ''} >
                <span className="text-white-heading text-16 font-semibold leading-24 cursor-pointer" >{bio?.title}</span>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default ContentsComponent