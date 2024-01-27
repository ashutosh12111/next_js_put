"use client";

import Label from "../label";

import React, { useEffect, useRef, useState } from "react";
import ErrorLabel from "../error-label";
import { ITextArea } from "./textarea.types";

const TextArea = ({
  id,
  name,
  label,
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
  containerClassName = "",
  errorLabelClass = "",
  autoFocus,
}: ITextArea) => {
  const [inputClassName, setInputClassName] = useState({
    normal: `w-full rounded border ${
      showError && errorMessage
        ? "border-error-danger-500"
        : "border-border-color"
    } bg-input-background text-16 leading-24 font-normal  ${
      showError && errorMessage
        ? "text-error-danger-500"
        : "text-input-text-color"
    }  placeholder:text-placeholder-text-color focus:outline-none focus:shadow-input-shadow min-h-[128px]`,
    transparent:
      "bg-transparent outline-none placeholder:text-[#e0dbdb99] text-white-heading text-18 font-semibold leading-28 w-full",
  });

  const textareaRef: any = useRef(null);

  useEffect(() => {
    setInputClassName({
      normal: `w-full px-16 py-11  rounded border ${
        showError && errorMessage
          ? "border-error-danger-500"
          : "border-border-color"
      } bg-input-background text-16 leading-24 font-normal  ${
        showError && errorMessage
          ? "text-error-danger-500"
          : "text-input-text-color"
      } placeholder:text-placeholder-text-color focus:outline-none focus:shadow-input-shadow  disabled:text-placeholder-text-color disabled:cursor-not-allowed min-h-[128px]`,
      transparent:
        "bg-transparent outline-none placeholder:text-[#e0dbdb99] text-white-heading text-18 font-semibold  w-full",
    });
  }, [showError, errorMessage]);

  const [textareaHeight, setTextareaHeight] = useState("auto");

  const handleTextareaChange = (event: any) => {
    onChange && onChange(event);

    // Update the textarea height based on its scrollHeight
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight + 10
      }px`;
    }
  };

  return (
    <div className={containerClassName}>
      {label && (
        <Label
          id={id || name}
          name={label}
          required={required}
          className=""
        />
      )}
      <div className="relative">
        <textarea
          style={{
            height: textareaHeight,
            overflowY: "auto",
            resize: "none",
            display: "block",
            maxHeight: "500px",
          }}
          id={id || name}
          name={name}
          className={inputClassName[variant]}
          placeholder={placeholder}
          value={value || ""}
          disabled={disabled}
          readOnly={readonly}
          onClick={onClick}
          onChange={handleTextareaChange}
          onFocus={onFocus}
          onBlur={onBlur}
          autoFocus={autoFocus}
          ref={textareaRef}
        />

        {showError && (
          <ErrorLabel
            message={errorMessage}
            className={errorLabelClass}
          />
        )}
      </div>
    </div>
  );
};

export default TextArea;
