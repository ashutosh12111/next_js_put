import * as yup from "yup";
export const changePasswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .trim()
    .required("Please enter current password"),

  newPassword: yup
    .string()
    .required("Please enter new password")
    .test(
      "no-leading-trailing-space",
      "New password should not start or end with a space",
      (value) => !/^\s|\s$/.test(value)
    )
    .min(8, "New password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d).+$/,
      "New password must contain at least one uppercase letter and one numeric value"
    ),
  repeatPassword: yup
    .string()
    .required("Please repeat password")
    .oneOf([yup.ref("newPassword")], "The new password and confirm password must match"),
});
