
"use client";

import { useFormik } from "formik";
import { createContext, useContext, useState } from "react";
import { IContextProps } from "./types";
import { registerSchema } from "@/validations/register-schema";
import { toast } from "react-toastify";



const BioContext = createContext<IContextProps>({
  formikBio: null,
})


export const BioContextProvider = ({ children }: any) => {


  const [initialValues, setInitialValues] = useState({
    biography: [],
  })



  const formikBio = useFormik({
    initialValues,
    validationSchema: registerSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async (values: any) => {

      try {



      } catch (err: any) {
        toast(err?.message)
        console.log(err, "error")
      }


    },
  });









  return (<BioContext.Provider value={{ formikBio }} >
    {children}
  </BioContext.Provider>)
}

export const useBioContext = () => useContext(BioContext)