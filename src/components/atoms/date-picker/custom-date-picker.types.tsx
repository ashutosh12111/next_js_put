export interface ICustomDatePicker {
    id?: string;
    name: string,
    label?: string,
    type: "text" | "password" | "email",
    variant?: "normal" | "transparent",
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    value?: string;
    required?: boolean;
    style?: any;
    errorMessage?: string | undefined | null;
    showError?: boolean;
    onClick?: React.MouseEventHandler;
    onChange?: any;
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    containerClassName?: string
}