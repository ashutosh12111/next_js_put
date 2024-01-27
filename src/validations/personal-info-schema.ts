import { validations } from "@/constants";
import * as yup from "yup";





export const personalInfoSchema = yup.object().shape({
  firstName: yup.string().trim().required("Please enter first name"),
  lastName: yup.string().trim().required("Please enter last name"),
  country: yup.string().trim().required("Please enter country"),
  dob: yup.string().trim().required("Please enter date of birth"),
  profession: yup.string().trim().required("Please enter profession"),
  height: yup.string().trim().required("Please enter height"),
  twitterLink: yup.string().trim().matches(validations.URL,"Please enter a valid url"),
  linkedinLink: yup.string().trim().matches(validations.URL,"Please enter a valid url"),
  website: yup.string().trim().matches(validations.URL,"Please enter a valid url"),
});
