import { validations } from "@/constants";
import { checkEmailExists } from "@/services/auth";
import * as yup from "yup";

export const editEmailSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter email")
    .email("Invalid email address")
    .matches(
      validations.EMAIL,
      "Invalid email address"
    )
    .test(
      "checkEmail",
      "Email already exists, please use a different one",
      async (value) => {
        try {
          const res: any = await checkEmailExists({ email: value });
          return !res?.data; // Return true if email doesn't exist
        } catch (err) {
          return false;
        }
      }
    ),
});
