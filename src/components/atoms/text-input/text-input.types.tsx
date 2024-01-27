export interface ITextInput {
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
    errorMessage?: string | undefined | null;
    showError?: boolean;
    onClick?: React.MouseEventHandler;
    onChange?: React.ChangeEventHandler<HTMLElement>;
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    containerClassName?: string;
    errorLabelClass?: string;
    autoFocus?: boolean ;
    className?: string;
    allowNumbersOnly?: boolean
}