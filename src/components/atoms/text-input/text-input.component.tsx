"use client"

import { Icon } from "@/components/atoms/icons"
import Label from "../label"
import React, { useEffect, useRef, useState } from 'react'
import ErrorLabel from "../error-label";
import { ITextInput } from "./text-input.types"



const TextInput = ({
  id,
  name,
  label,
  type,
  variant = "normal",
  placeholder,
  disabled,
  readonly,
  value,
  required = false,
  errorMessage = "",
  showError,
  onClick,
  onChange,
  onFocus,
  onBlur,
  onKeyUp,
  containerClassName = "",
  errorLabelClass = "",
  autoFocus,
  allowNumbersOnly
}: ITextInput) => {


  const [inputType, setInputType] = useState(type);
  const [inputClassName, setInputClassName] = useState({
    "normal": `w-full ${type === "password" ? "pl-16 pr-11 py-11" : "px-16 py-11"}  rounded border ${showError && errorMessage ? "border-error-danger-500" : "border-border-color"} bg-input-background text-16 leading-24 font-normal  ${showError && errorMessage ? "text-error-danger-500" : "text-input-text-color"}  placeholder:text-placeholder-text-color focus:outline-none focus:shadow-input-shadow`,
    "transparent": "bg-transparent outline-none placeholder:text-[#e0dbdb99] text-white-heading text-18 font-semibold leading-28 w-full"
  });

  const inputRef: any = useRef(null);


  useEffect(() => {
    setInputClassName({
      "normal": `w-full ${type === "password" ? "pl-16 pr-44 py-11" : "px-16 py-11"}  rounded border ${showError && errorMessage ? "border-error-danger-500" : "border-border-color"} bg-input-background text-16 leading-24 font-normal  ${showError && errorMessage ? "text-error-danger-500" : "text-input-text-color"} placeholder:text-placeholder-text-color focus:outline-none focus:shadow-input-shadow  disabled:text-placeholder-text-color disabled:cursor-not-allowed`,
      "transparent": "bg-transparent outline-none placeholder:text-[#e0dbdb99] text-white-heading text-18 font-semibold leading-28 w-full"
    })
  }, [showError, errorMessage])

  const toggleInputType = () => {


    // Get the current value and cursor position
    const inputValue = inputRef.current.value;
    const cursorPosition = inputRef.current.selectionStart;

    // Toggle the input type
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }

    // Restore the input value and cursor position
    inputRef.current.value = inputValue;
    inputRef.current.setSelectionRange(cursorPosition, cursorPosition);

    // Focus the input
    inputRef.current.focus();
  };

  // Custom function to handle input changes and allow only digits
  const handleInputChange = (e: any) => {
    // Get the input value
    let inputValue = e.target.value;

    if (allowNumbersOnly) {
      inputValue = inputValue.replace(/\D/g, '');
      // Ensure the value doesn't start with zero
      inputValue = inputValue.replace(/^0+/, '');
    }

    e.target.value = inputValue
    // Update the state or perform other actions with the sanitized value
    onChange && onChange(e);
  };


  return (
    <div className={containerClassName}>
      {label && <Label id={id || name} name={label} required={required} className="" />}
      <div className="relative">
        <input
          id={id || name}
          name={name}
          type={inputType}
          className={inputClassName[variant]}
          placeholder={placeholder}
          value={value || ""}
          disabled={disabled}
          readOnly={readonly}
          onClick={onClick}
          onChange={handleInputChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
          autoFocus={autoFocus}
          ref={inputRef}
        />

        {showError && <ErrorLabel message={errorMessage} className={errorLabelClass} />}
        {type === "password" && <div className="absolute top-[0px] right-[0px] pr-16 pl-8 py-14 cursor-pointer" onClick={toggleInputType}>

          {
            <span >
              {inputType === "password" ? <Icon.IcEyeOff /> : <Icon.IcEye />}
            </span>
          }

        </div>}
      </div>
    </div>
  )
}

export default TextInput
