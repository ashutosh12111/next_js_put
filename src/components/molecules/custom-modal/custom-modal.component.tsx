import React, { useEffect } from 'react'
import { ICustomModal } from './custom-modal.types'

const CustomModalComponent = ({ children, isOpen, innerClass = "" }: ICustomModal) => {

  function handleInnerDivClick(event: any) {
    event.stopPropagation();
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])

  return (
    <div className={`inset-0 bg-black bg-opacity-50 fixed top-0 left-0 w-100 h-100 transition-opacity duration-500 ${isOpen ? " z-[100] opacity-100 overflow-x-hidden overflow-y-auto" : "z-[-100] opacity-0 overflow-hidden"
      }`}>
      <div className={`modal-dialog w-[90%] mx-auto modal-dialog-centered flex justify-center ${innerClass}`} onClick={handleInnerDivClick}>
        {children}
      </div>
    </div>
  )
}

export default CustomModalComponent