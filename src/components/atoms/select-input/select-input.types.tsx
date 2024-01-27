export interface ISelectInput {
    id?: string;
    name: string,
    label?: string,
    options: any;
    type?: "text" | "password" | "email",
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
    onChange?: React.ChangeEventHandler<HTMLElement>;
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    containerClassName?: string;
    children: any
}