import * as yup from "yup";

export const bioSchema = yup.object().shape({
  biography: yup.array().of(yup.object().shape({
    title: yup
      .string()
      .required("Title is required"),
    description: yup
      .string()
      .required("Description is required")
  }))
});
