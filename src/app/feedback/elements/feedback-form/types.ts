import { ISubmitFeedback } from "@/services/feedback/types";
import { useFormik } from "formik";

export interface IFeedbackForm {
    formik:  ReturnType<typeof useFormik<ISubmitFeedback>>;
    error: string | null | undefined;
    resetError: () => void;
    loading: boolean;
}

