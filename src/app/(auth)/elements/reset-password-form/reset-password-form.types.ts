import { useFormik } from 'formik';


export interface IResetPasswordInitialValues {
     password: string;
     confirmPassword: string;

}

export interface IResetPasswordForm {
    formik:  ReturnType<typeof useFormik<IResetPasswordInitialValues>>;
    error: string | null | undefined;
    resetError: () => void;
    loading: boolean;
    recaptcha: string;
    setRecaptcha: (arg0: string) => void;
    isVerified: boolean
}
