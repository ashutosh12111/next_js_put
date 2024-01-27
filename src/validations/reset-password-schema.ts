import * as yup from "yup";
export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Please enter password")
    .test(
      "no-leading-trailing-space",
      "Password should not start or end with a space",
      (value) => !/^\s|\s$/.test(value)
    )
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter and one numeric value"
    ),
  confirmPassword: yup
    .string()
    .required("Repeat password is required")
    .test(
      "no-leading-trailing-space",
      "Repeat password should not start or end with a space",
      (value) => !/^\s|\s$/.test(value)
    )
    .required("Please enter repeat password")
    .oneOf([yup.ref("password")], "The repeat password and password must match"),
});
