"use client"
import OTPInput from "@/lib/otp-input";
import React from "react";


const  CustomInputOTP = ({ setOtp }: { setOtp?: any }) => {

  const [
    { otp, numInputs, separator, minLength, maxLength, placeholder, inputType },
    setConfig,
  ] = React.useState({
    otp: "",
    numInputs: 6,
    separator: "-",
    minLength: 0,
    maxLength: 40,
    placeholder: "------",
    inputType: "number" as const,
  });

  const handleOTPChange = (otp: string) => {
    setOtp(otp);
    setConfig((prevConfig) => ({ ...prevConfig, otp }));
  };

  return (
    <OTPInput
      inputStyle="inputStyle"
      numInputs={numInputs}
      onChange={handleOTPChange}
      value={otp}
      placeholder={placeholder}
      inputType={inputType}
      renderInput={(props: any) => <input {...props} />}
      shouldAutoFocus
    />
  );
}

export default CustomInputOTP;
