import { useState } from 'react';

interface LoadingErrorState {
  loading: boolean;
  error: string | null | undefined;
  reset: () => void;
  startLoading: () => void;
  stopLoading: () => void;
  setErrorMsg: (message: string | null | undefined) => void;
}

const useLoadingError = (): LoadingErrorState => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null | undefined>(null);

  const reset = () => {
    setLoading(false);
    setError(null);
  };

  const startLoading = () => {
    setLoading(true);
    setError(null);
  };
  const stopLoading = () => {
    setLoading(false);
  };

  const setErrorMsg = (message: string | null | undefined) => {
    setLoading(false);
    setError(message);
  };

  return {
    loading,
    error,
    reset,
    startLoading,
    stopLoading,
    setErrorMsg,
  };
};

export default useLoadingError;
