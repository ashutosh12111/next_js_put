import ErrorLabel from '@/components/atoms/error-label';
import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";


interface IRecaptcha {
  recaptcha?: string;
  setRecaptcha: (arg0: string) => void;
  showError: boolean;
}

const Recaptcha = ({ setRecaptcha, showError }: IRecaptcha) => {
  return (
    <div>
      <ReCAPTCHA
        className="recaptcha-container w-full mb-2"
        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY || ""}
        onChange={(value: string | null) => setRecaptcha(value || "")}
        onExpired={() => setRecaptcha("")}
        onError={() => setRecaptcha("")}
      />
      {showError && (
        <ErrorLabel
          message="Please check the reCAPTCHA checkbox"
        />
      )}
    </div>
  );
};

export default Recaptcha