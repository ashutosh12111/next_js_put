export interface IVerifyOtpForm {
    error: string | null | undefined;
    resetError: () => void;
    loading: boolean;
    handleSubmit: React.FormEventHandler,
    otp: string,
    setOtp: React.Dispatch<React.SetStateAction<string>>,
}
