import { ICustomModal } from "@/components/molecules/custom-modal/custom-modal.types";

export interface IConfirmDeleteModal extends ICustomModal {
    title?: string;
    message?: string;
    loading?: boolean;
    toggle: () => void;
    onConfirm: () => void;
    onCancel?: () => void;
  }