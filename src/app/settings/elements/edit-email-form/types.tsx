import { useFormik } from "formik";

export interface IEditEmailForm {
    formik: ReturnType<typeof useFormik<{email: string}>> | null;
}
