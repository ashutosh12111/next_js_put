import { verifyRecaptcha } from "@/services/auth";
import { useState, useEffect } from "react";
import useLoadingError from "./useLoadingError";

interface IRecaptchaState {
  recaptcha: string;
  setRecaptcha: (arg0: string) => void;
  isVerified: boolean;
}

const useRecaptcha = (): IRecaptchaState => {

  const [recaptcha, setRecaptcha] = useState("");
  const {  error, setErrorMsg} = useLoadingError()
  const [isVerified, setIsVerified] = useState(false)



  useEffect(() => {

    if (recaptcha) {
      console.log(recaptcha)
      setErrorMsg("");
      verifyRecaptcha({ token: recaptcha }).then((res:any) => {
         
        setIsVerified(res?.success)
         if(!res?.success){
          setErrorMsg(res?.message);
         }
         
      }).catch(((err) => {
          setIsVerified(false)
          // setErrorMsg(err?.response?.message);
      })).finally(()=> {
          // setIsVerified(true)
      });
    }
  }, [recaptcha]);

  return {
    recaptcha,
    setRecaptcha,
    isVerified: recaptcha ? isVerified : Boolean(error),
  };
};

export default useRecaptcha;
