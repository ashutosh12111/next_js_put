import React from "react";
import FormHeader from "../form-header/form-header.component";
import CustomButton from "@/components/atoms/button";
import TextInput from "@/components/atoms/text-input";
import { IResetPasswordForm } from "./reset-password-form.types";
import ErrorLabel from "@/components/atoms/error-label";
import Recaptcha from "@/components/molecules/reacaptcha";

const ResetPasswordForm = ({
  formik,
  error,
  resetError,
  loading, 
  setRecaptcha,
  isVerified,
}: IResetPasswordForm) => {


  return (
    <>
      <div className="">
        <FormHeader
          title="Reset password"
          description="Enter your new password for access your account."
        />
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-32">
            <TextInput
              name="password"
              type="password"
              label="Password"
              containerClassName="mb-16"
              value={formik.values.password}
              showError={Boolean(formik.touched.password)}
              onChange={(e) => {
                resetError();
                formik.handleChange(e);
              }}
              onBlur={(e) => {
                formik.handleBlur(e);
                resetError();
              }}
              errorMessage={formik.errors.password}
              autoFocus={true}
              required={true}
            />
            <TextInput
              name="confirmPassword"
              type="password"
              label="Repeat password"
              containerClassName="mb-16"
              value={formik.values.confirmPassword}
              showError={Boolean(formik.touched.confirmPassword)}
              onChange={(e) => {
                resetError();
                formik.handleChange(e);
              }}
              onBlur={(e) => {
                formik.handleBlur(e);
                resetError();
              }}
              errorMessage={formik.errors.confirmPassword}
              required={true}
            />
            {Boolean(error) && <ErrorLabel message={error} />}

            <Recaptcha
              setRecaptcha={setRecaptcha}
              showError={formik.submitCount > 0 && !isVerified}
            />
          </div>
          <CustomButton
            title="Save"
            className="w-full"
            type="submit"
            loading={loading}
          />
        </form>
      </div>
    </>
  );
};

export default ResetPasswordForm;
