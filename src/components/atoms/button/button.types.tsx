export interface ICustomButton {
    title: string;
    type?: "button" | "submit";
    className?: string;
    loading?: boolean;
    variant?: "primary" | "secondary" | "custom" | "custom_icon";
    onClick?: () => void;
    disabled?: boolean
    children?: any
}

