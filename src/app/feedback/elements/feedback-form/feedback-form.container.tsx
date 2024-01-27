"use client"
import React from "react";
import { useRouter} from "next/navigation";
import useLoadingError from "@/hooks/useLoadingError";
import { useFormik } from "formik";
import getTokenClientSide from "@/utils/getTokenClientSide";
import { showToast } from "@/utils";
import { toast } from "react-toastify";
import { TOASTR_TYPES } from "@/types";
import FeedbackFormComponent from "./feedback-form.component";
import { feedbackFormSchema } from "@/validations/feedback-form-schema";
import { submitFeedback } from "@/services/feedback";
import { useAuthContext } from "@/context/auth-context";

const FeedbackFormContainer = () => {

  const router = useRouter();
  const { loading, error, setErrorMsg, reset, startLoading, stopLoading } =
  useLoadingError();
  const {user} = useAuthContext()

  const formik = useFormik({
    initialValues: {
      title: "",
      feedback: "",
      rate: "",
    },
    validationSchema: feedbackFormSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async (values) => {

        try {
          startLoading();
          const res: any = await submitFeedback(getTokenClientSide(), {
            ...values,
            user_id: user?.id
          });
          console.log(res, "response");
          router.push("/");
          showToast(toast, TOASTR_TYPES.SUCCESS, res?.message);
          formik.resetForm();
        } catch (err: any) {
          showToast(toast, TOASTR_TYPES.ERROR, err?.message);
          setErrorMsg(err?.message);
        } finally {
          stopLoading();
        }
      }
  });

  return (
    <FeedbackFormComponent
      formik={formik}
      error={error}
      resetError={reset}
      loading={loading}
    />
  );
};

export default FeedbackFormContainer;
