"use client"
import Label from "../label"
import { DatePicker } from "antd"
import React from 'react'
import ErrorLabel from "../error-label";
import { ICustomDatePicker } from "./custom-date-picker.types";
import "./custom-date-picker.css"
import dayjs from 'dayjs';



const CustomDatePicker = ({
  id,
  name,
  label,
  type,
  placeholder,
  disabled,
  value,
  required = false,
  errorMessage = "",
  showError,
  onChange,
  containerClassName = ""
}: ICustomDatePicker) => {


  const disabledDate = (current: any) => {
    // Always return true to disable all dates
    return current && current.valueOf() > Date.now();
  };





  return (
    <div className={`${containerClassName} ${errorMessage && showError ? "date-error" : ""}`}>
      {label && <Label id={id || name} name={label} required={required} className="" />}
      <div className="relative">
        <DatePicker onChange={onChange} placeholder={placeholder} disabled={disabled} value={value ? dayjs(value) : null} disabledDate={disabledDate}
          allowClear={false}
          format={"DD-MM-YYYY"}
        />

        {showError && <ErrorLabel message={errorMessage} />}

      </div>
    </div>
  )
}

export default CustomDatePicker
