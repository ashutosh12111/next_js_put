import { validations } from "@/constants";
import * as yup from "yup";
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter email")
    .email("Invalid email address")
    .matches(
      validations.EMAIL,
      "Invalid email address"
    ),
  password: yup.string().trim().required("Please enter password"),
});
