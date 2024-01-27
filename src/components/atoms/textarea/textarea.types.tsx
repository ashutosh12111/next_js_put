export interface ITextArea {
    id?: string;
    name: string,
    label?: string,
    variant?: "normal" | "transparent",
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    value?: string;
    required?: boolean;
    errorMessage?: string | undefined | null;
    showError?: boolean;
    onClick?: React.MouseEventHandler;
    onChange?: React.ChangeEventHandler<HTMLElement>;
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    containerClassName?: string;
    errorLabelClass?: string;
    autoFocus?: boolean 
}