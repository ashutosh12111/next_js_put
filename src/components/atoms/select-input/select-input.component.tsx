"use client"

import Label from "../label"
import React from 'react'
import ErrorLabel from "../error-label";
import { ISelectInput } from "./select-input.types"
import { Select } from 'antd';




const SelectInput = ({
  id,
  name,
  label,
  placeholder,
  required = false,
  errorMessage = "",
  showError,
  containerClassName = ""
}: ISelectInput) => {



  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={containerClassName}>
      {label && <Label id={id || name} name={label} required={required} className="" />}
      <div className="relative">
         
      <Select
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
        placeholder={placeholder}

    />

        {showError && <ErrorLabel message={errorMessage} />}

      </div>
    </div>
  )
}

export default SelectInput
