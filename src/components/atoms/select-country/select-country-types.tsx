export interface ISelectCountry {
    id?: string;
    name: string,
    label?: string,
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    value?: string;
    required?: boolean;
    errorMessage?: string | undefined | null;
    showError?: boolean;
    onSelect? : any;
    onClick?: React.MouseEventHandler;
    onChange?: React.ChangeEventHandler<HTMLElement>;
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    containerClassName?: string
}