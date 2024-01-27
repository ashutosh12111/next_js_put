"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  return (
    <ToastContainer autoClose={2000} position={toast.POSITION.TOP_RIGHT} theme="dark" hideProgressBar={true}
    />
  )
}

export default ToastProvider