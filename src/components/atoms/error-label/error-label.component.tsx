import React from 'react'

interface IErrorLabel {
  message: string | null | undefined;
  className?: string
}

const ErrorLabel = ({
  message,
  className = ""
}: IErrorLabel) => {
  return (
    <>
      {message ? <div className={`mt-6 text-error-danger-500 text-12 font-normal leading-18 ${className}`}>{message}</div> : <></>}

    </>
  )
}

export default ErrorLabel