import { FormikConfig, useFormik } from 'formik';
import { SetStateAction } from 'react';
import { Dispatch } from 'react';



export interface IRegisterInitialValues {
    email: string;
    password: string;
    biography?: IBiography[];
    firstName: string,
    lastName: string,
    country: string,
    city: string,
    dob: string,
    profession: string,
    officeName: string,
    education: string,
    image: string,
}

export interface IBiography {
    title: string;
    description: string;
    disabled?: any
}

export interface IContextProps {
  formikBio:  ReturnType<typeof useFormik<{ biography?: IBiography[];}>> | null;
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
      typeof formik.errors.biography[id] !== 'string'
    ) {
      const biographyError = formik.errors.biography[id] as IBiography;
      if (biographyError && biographyError[field]) {
        return biographyError[field];
      }
    }
    return null; // Return null if there's no error message
 }
  
export function getBiographyIsTouched(
    formik: ReturnType<typeof useFormik<IRegisterInitialValues>> | null,
    id: number,
    field: "title" | "description"
  ): string | false {
    if (
      formik !== null &&
      formik.touched &&
      Array.isArray(formik.errors.biography)
    ) {
    //   const biographyError = formik.errors.biography[id] as IBiography;
    //   if (biographyError && biographyError[field]) {
    //     return biographyError[field];
    //   }
    //   const isTouched = formik?.touched?.biography[id]
    }
    return false; // Return null if there's no error message
 }
  
  
  