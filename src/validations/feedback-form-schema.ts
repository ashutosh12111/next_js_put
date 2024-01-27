import * as yup from "yup";

export const feedbackFormSchema = yup.object().shape({
  rate: yup.string().trim().required("Please select rating"),
  title: yup.string().trim().required("Please enter title"),
  feedback: yup.string().trim().required("Please enter feedback"),
});
