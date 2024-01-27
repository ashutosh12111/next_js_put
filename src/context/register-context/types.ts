import { useFormik } from "formik";
import { SetStateAction } from "react";
import { Dispatch } from "react";

export interface IRegisterInitialValues {
  email: string;
  password: string;
  biography?: IBiography[];
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  dob: string;
  profession: string;
  officeName: string;
  education: string;
  image: string;
  height: string,
  website: string,
  twitterLink: string,
  linkedinLink: string
}

export interface IBiography {
  id?: any;
  title: string;
  description: string;
  disabled?: any
}

export interface IContextProps {
  formik: ReturnType<typeof useFormik<IRegisterInitialValues>> | null;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  handleOnDragEnd: any;
  handleOnDragStart: any;
  handleDelete: (
    id: number,
    formik: any,
    saveOnFocusOut: boolean,
    callback: any
  ) => void;
  handleAddSection: (formik: any) => void;
  isProfileEdit: boolean;
  setIsProfileEdit: Dispatch<SetStateAction<boolean>>;
  deleteId : number | undefined,
  setDeleteId: Dispatch<SetStateAction<number | undefined>>,
}

export function getBiographyError(
  formik: ReturnType<typeof useFormik<IRegisterInitialValues>> | null,
  id: number,
  field: "title" | "description"
): string | null {
  if (
    formik !== null &&
    formik.errors &&
    Array.isArray(formik.errors.biography) &&
    typeof formik.errors.biography[id] !== "string"
  ) {
    const biographyError = formik.errors.biography[id] as IBiography;
    if (biographyError && biographyError[field]) {
      return biographyError[field];
    }
  }
  return null; // Return null if there's no error message
}

