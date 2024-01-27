"use client";
import React from "react";
import SettingsBox from "../elements/settings-box";
import ChangePasswordForm from "../elements/change-password-form";

const VerifyOtp = () => {
  return (
    <>
      <SettingsBox
        title="Change Password"
        backButtonUrl="/settings"
      >
        <ChangePasswordForm />
      </SettingsBox>
    </>
  );
};

export default VerifyOtp;
