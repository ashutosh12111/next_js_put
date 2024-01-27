import { Button } from "antd";
import React from "react";
import { ICustomButton } from "./button.types";
import ButtonLoader from "../button-loader/button-loader.component";

const CustomButton = ({
  title,
  type = "button",
  className = "",
  loading = false,
  variant = "primary",
  onClick,
  disabled = false,
  children,
}: ICustomButton) => {
  if (variant === "primary") {
    return (
      <>
        <button
          className={`py-12 px-32 bg-white-button hover:bg-hover-white-button transition duration-[0.4s] text-gray-500 leading-24 text-16 font-medium rounded-xl focus:outline-none  disabled:cursor-not-allowed relative ${className}`}
          type={type}
          onClick={onClick}
          disabled={loading || disabled}
        >
          <ButtonLoader loading={loading} />{" "}
          <span className={`${loading ? "opacity-0" : ""}`}>{title}</span>
        </button>
      </>
    );
  } else if (variant === "custom") {
    return (
      <>
        <button
          className={` ${className} relative`}
          type={type}
          onClick={onClick}
          disabled={loading}
        >
          <ButtonLoader loading={loading} />{" "}
          <span className={`${loading ? "opacity-0" : ""}`}>{title}</span>
        </button>
      </>
    );
  } else if (variant === "custom_icon") {
    return (
      <>
        <button className={`${className}`} onClick={onClick}>
          {children || title}
        </button>
      </>
    );
  } else {
    return (
      <>
        <button
          className={`py-11 px-32 hover:bg-hover-secondary-button transition duration-[0.4s] border border-white-button text-white-button text-16 font-medium leading-24 rounded-xl focus:outline-none disabled:hover:bg-transparent disabled:cursor-not-allowed relative disabled:opacity-50 ${className}`}
          type={type}
          onClick={onClick}
          disabled={loading || disabled}
        >
          <ButtonLoader loading={loading} />{" "}
          <span className={`${loading ? "opacity-0" : ""}`}>{title}</span>
        </button>
      </>
    );
  }
};

export default CustomButton;
