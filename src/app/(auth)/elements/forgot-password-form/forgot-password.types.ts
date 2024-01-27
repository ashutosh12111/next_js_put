import { useFormik } from 'formik';


export interface IForgotPasswordInitialValues {
     email: string;

}

export interface IForgotPasswordForm {
    formik:  ReturnType<typeof useFormik<IForgotPasswordInitialValues>>;
    error: string | null | undefined;
    resetError: () => void;
    loading: boolean;
}
