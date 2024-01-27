import { useFormik } from "formik";

export interface IChangePassword {
    formik:  ReturnType<typeof useFormik<{
         currentPassword: string,
         newPassword: string,
         repeatPassword: string
        }>>;
    error: string | null | undefined;
    resetError: () => void;
    loading: boolean;
    recaptcha: string;
    setRecaptcha: (arg0: string) => void;
    isVerified: boolean
}

