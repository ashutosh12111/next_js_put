import { ICustomModal } from "@/components/molecules/custom-modal/custom-modal.types";
import { IRegisterInitialValues } from "@/context/register-context/types";
import { useFormik } from "formik";

export interface IPersonalDetailModalModal extends ICustomModal {
    title?: string;
    message?: string;
    loading?: boolean;
    toggle: () => void;
    onConfirm?: () => void;
    onCancel?: () => void;
    formik?:  ReturnType<typeof useFormik<IRegisterInitialValues>> ;
    isDisabled?: boolean;
    setIsDisabled?: any
  }
  