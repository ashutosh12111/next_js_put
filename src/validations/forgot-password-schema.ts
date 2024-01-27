import { validations } from "@/constants";
import * as yup from "yup";
export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter email")
    .matches(
      validations.EMAIL,
      "Invalid email address"
    ),
});
