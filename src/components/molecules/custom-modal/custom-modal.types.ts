export interface ICustomModal {
    children?: React.ReactElement;
    isOpen: boolean;
    showCloseBtn?: boolean;
    innerClass?: string;
    toggle?: () => void;
    openModal?: () => void;
    closeModal?: () => void;
}