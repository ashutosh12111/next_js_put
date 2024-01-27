import CustomButton from "@/components/atoms/button";
import TextInput from "@/components/atoms/text-input";
import Recaptcha from "@/components/molecules/reacaptcha";
import React from "react";
import { IChangePassword } from "./types";
import { useRouter } from "next/navigation";

const ChangePasswordFormComponent = ({
  formik,
  resetError,
  loading,
  setRecaptcha,
  isVerified,
}: IChangePassword) => {
  const router = useRouter();

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={formik?.handleSubmit}
    >
      <TextInput
        name="currentPassword"
        type="password"
        label="Current Password"
        value={formik.values.currentPassword}
        showError={Boolean(formik.touched.currentPassword)}
        onChange={(e) => {
          resetError();
          formik.handleChange(e);
        }}
        onBlur={(e) => {
          formik.handleBlur(e);
          resetError();
        }}
        errorMessage={formik.errors.currentPassword}
        autoFocus={false}
        required={true}
      />
      <TextInput
        name="newPassword"
        type="password"
        label="New Password"
        value={formik.values.newPassword}
        showError={Boolean(formik.touched.newPassword)}
        onChange={(e) => {
          resetError();
          formik.handleChange(e);
        }}
        onBlur={(e) => {
          formik.handleBlur(e);
          resetError();
        }}
        errorMessage={formik.errors.newPassword}
        required={true}
      />
      <TextInput
        name="repeatPassword"
        type="password"
        label="Confirm Password"
        value={formik.values.repeatPassword}
        showError={Boolean(formik.touched.repeatPassword)}
        onChange={(e) => {
          resetError();
          formik.handleChange(e);
        }}
        onBlur={(e) => {
          formik.handleBlur(e);
          resetError();
        }}
        errorMessage={formik.errors.repeatPassword}
        required={true}
      />
      <Recaptcha
        setRecaptcha={setRecaptcha}
        showError={formik.submitCount > 0 && !isVerified}
      />
      <div className="flex items-center gap-4 flex-col sm:flex-row">
        <CustomButton
          type="submit"
          title="Save"
          variant="primary"
          className="w-full sm:w-auto"
          loading={loading}
        ></CustomButton>
        <CustomButton
          title="Cancel"
          variant="secondary"
          className="w-full sm:w-auto"
          disabled={loading}
          onClick={() => router.push("/settings")}
        ></CustomButton>
      </div>
    </form>
  );
};

export default ChangePasswordFormComponent;
