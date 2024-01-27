import { validations } from "@/constants";
import { checkEmailExists } from "@/services/auth";
import * as yup from "yup";

let focusedEmailValidationResult:any = undefined; // Variable to store the result obtained during focus


export const registerSchema = yup.object().shape({
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
      async function (value) {
        const emailInput = document.getElementById("email");
        const isEmailInputFocused = document.activeElement === emailInput;

        if (isEmailInputFocused) {
          try {
            const res:any = await checkEmailExists({ email: value });
            focusedEmailValidationResult = !res?.data; // Store the result during focus
            return focusedEmailValidationResult; // Return true if email doesn't exist
          } catch (err) {
            focusedEmailValidationResult = false;
            return false;
          }
        } else {
          return focusedEmailValidationResult; // Use the stored result when unfocused
        }
      }
    ),
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
  firstName: yup.string().trim().required("Please enter first name"),
  lastName: yup.string().trim().required("Please enter last name"),
  country: yup.string().trim().required("Please enter country"),
  dob: yup.string().trim().required("Please enter date of birth"),
  profession: yup.string().trim().required("Please enter profession"),
  height: yup.string().trim().required("Please enter height"),
  twitterLink: yup.string().trim().matches(validations.URL,"Please enter a valid url"),
  linkedinLink: yup.string().trim().matches(validations.URL,"Please enter a valid url"),
  website: yup.string().trim().matches(validations.URL,"Please enter a valid url"),
  biography: yup.array().of(
    yup.object().shape({
      title: yup.string().required("Title is required").
      test("is-unique", "Title must be unique", function (value, context) {
        
        let newThis:any = this;
        if(this.from){


        const titles: any = this.from[1].value?.biography.map((bio: any) => bio?.title);
        const current_index: number | undefined = newThis?.options?.index;


        const isValueUnique = titles.every((title:any, index:any) => index === current_index || title?.trim() !== value?.trim());

          console.log(isValueUnique); // This will be true if the value is unique, false otherwise
        console.log(isValueUnique,"isValueUnique>>>")
        return isValueUnique
 
        }
         
         return
     
      }),
      description: yup.string().required("Description is required"),
    })
  ),
});
