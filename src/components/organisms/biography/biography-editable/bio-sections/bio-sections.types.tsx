import { IRegisterInitialValues } from "@/context/register-context/types";
import { useFormik } from "formik";

export interface IBioSections{
    formik: ReturnType<typeof useFormik<IRegisterInitialValues>> | null;
    saveOnFocusOut: boolean;
    saveOnDragEnd: boolean;
}

