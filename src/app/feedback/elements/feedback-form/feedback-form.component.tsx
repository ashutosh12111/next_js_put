import CustomButton from "@/components/atoms/button";
import TextInput from "@/components/atoms/text-input";
import React from "react";
import { IFeedbackForm } from "./types";
import RatingInput from "@/components/atoms/rating-input";
import TextArea from "@/components/atoms/textarea";

const FeedbackFormComponent = ({
  formik,
  loading,
}: IFeedbackForm) => {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={formik?.handleSubmit}
    >
      <RatingInput
        name="rate"
        label="Rate"
        value={Number(formik?.values.rate)}
        onChange={(value: number | string) =>
         {
          if (value !== 0) {
            formik.setFieldValue("rate", value);
          }
          }
        }
        errorMessage={formik.errors.rate}
        showError={formik?.submitCount > 0}
        required={true}
      />
      <TextInput
        name="title"
        type="text"
        label="Title"
        value={formik.values.title}
        showError={Boolean(formik.touched.title)}
        onChange={(e) => {
          formik.handleChange(e);
        }}
        onBlur={(e) => {
          formik.handleBlur(e);
        }}
        errorMessage={formik.errors.title}
        autoFocus={false}
        required={true}
      />

      <TextArea
        name="feedback"
        label="Feedback"
        value={formik.values.feedback}
        showError={Boolean(formik.touched.feedback)}
        onChange={(e) => {
          formik.handleChange(e);
        }}
        onBlur={(e) => {
          formik.handleBlur(e);
        }}
        errorMessage={formik.errors.feedback}
        autoFocus={false}
        required={true}
      />

      <div className="flex items-center justify-end gap-4 flex-col sm:flex-row">
        <CustomButton
          type="submit"
          title="Send"
          variant="primary"
          className="w-full sm:w-auto"
          loading={loading}
        ></CustomButton>
      </div>
    </form>
  );
};

export default FeedbackFormComponent;
