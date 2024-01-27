import { useFormik } from 'formik';


export interface ISignInInitialValues {
     email: string;
     password: string;

}

export interface ISignInForm {
    formik:  ReturnType<typeof useFormik<ISignInInitialValues>>;
    error: string | null | undefined;
    resetError: () => void;
    loading: boolean;
}
