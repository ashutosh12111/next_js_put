import React from "react";
import { IRatingInput } from "./types";
import "./rating-input.style.css"
import { Rate } from "antd";
import ErrorLabel from "../error-label";
import Label from "../label";

const RatingInputComponent = ({
  id,
  name,
  value,
  label,
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
  autoFocus
}: any) => {
  return (
    <div className="table-rating">
  
         {label && <Label id={id || name} name={label} required={required} className="" />}
        <Rate
          // allowHalf
          
          className="rounded-[40px] !py-4 !px-8 bg-gray-300 inline-flex items-center !text-16"
          value={value}
          onChange={onChange}
          autoFocus={true}
        />
          {showError && <ErrorLabel message={errorMessage} className={errorLabelClass}/>}
    </div>
  );
};

export default RatingInputComponent;
