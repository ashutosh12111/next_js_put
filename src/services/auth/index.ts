import { CONSTANTS } from "@/constants";
import { get, post, postImage, put } from "..";
import { API_ENDPOINTS } from "../endpoints";
import {
  IUserLogin,
  IForgotPassword,
  IVerifyOtp,
  IResetPassword,
  IVerifyRecaptcha,
  IFileUpload,
  ICheckEmailExists,
  IRegisterUser,
} from "./types";
import { capitalizeFirstLetter } from "@/helpers/utils";
import axios from "axios";

export const loginUser = (data: IUserLogin) => {
  return new Promise((resolve, reject) => {
    post(API_ENDPOINTS.AUTH.SIGN_IN, {
      ...data,
      password: data?.password?.trim(),
      type: CONSTANTS.LOGIN_TYPE.WEBSITE,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err?.response?.data);
      });
  });
};
export const registerUser = (data: IRegisterUser) => {
  return new Promise((resolve, reject) => {
    post(API_ENDPOINTS.AUTH.REGISTER, {
      ...data,
      password: data?.password?.trim(),
      first_name: capitalizeFirstLetter(data?.first_name),
      last_name: capitalizeFirstLetter(data?.last_name),
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err?.response?.data);
      });
  });
};

export const getMyProfile = (token: string | undefined) => {
  return new Promise((resolve, reject) => {
    get(API_ENDPOINTS.AUTH.MY_PROFILE, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log("===err", err);

        reject(err?.response?.data);
      });
  });
};

export const updateProfile = (
  token: string | undefined,
  data: IRegisterUser
) => {
  return new Promise((resolve, reject) => {
    put(
      API_ENDPOINTS.AUTH.UPDATE_PROFILE,
      {
        ...data,
        first_name: capitalizeFirstLetter(data?.first_name),
        last_name: capitalizeFirstLetter(data?.last_name),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err?.response?.data);
      });
  });
};

var timerId: NodeJS.Timeout;

let cancelTokenSource = axios.CancelToken.source();

export const checkEmailExists = (data: ICheckEmailExists) => {
  clearTimeout(timerId);
  // Cancel the previous request
  cancelTokenSource.cancel();

  // Create a new CancelToken source for the current request
  cancelTokenSource = axios.CancelToken.source();

  return new Promise((resolve, reject) => {
    timerId = setTimeout(() => {
      post(API_ENDPOINTS.AUTH.CHECK_EMAIL_EXISTS, data, {
        cancelToken: cancelTokenSource.token,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err?.response?.data);
        });
    }, 500);
  });
};

export const forgotPassword = (data: IForgotPassword) => {
  return new Promise((resolve, reject) => {
    post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, {
      ...data,
      type: CONSTANTS.LOGIN_TYPE.WEBSITE,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err?.response?.data);
      });
  });
};

export const verifyOtp = (data: IVerifyOtp) => {
  return new Promise((resolve, reject) => {
    post(`${API_ENDPOINTS.AUTH.VERIFY_OTP}?token=${data?.token}`, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err?.response?.data);
      });
  });
};

export const resetPassword = (data: IResetPassword) => {
  return new Promise((resolve, reject) => {
    post(`${API_ENDPOINTS.AUTH.RESET_PASSWORD}?token=${data?.token}`, {
      password: data?.password?.trim(),
      confirm_password: data?.confirmPassword?.trim(),
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err?.response?.data);
      });
  });
};

export const verifyRecaptcha = (data: IVerifyRecaptcha) => {
  return new Promise((resolve, reject) => {
    post(`${API_ENDPOINTS.AUTH.VERIFY_RECAPTCHA}?token=${data?.token}`, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err?.response?.data);
      });
  });
};

export const uploadFile = (data: IFileUpload) => {
  const formData = new FormData();
  const uniqueFileName = `croppedImage_${Date.now()}.jpg`;
  formData.append("image", data.image, uniqueFileName);

  return new Promise((resolve, reject) => {
    postImage(`${API_ENDPOINTS.AUTH.UPLOAD_FILE}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err?.response?.data);
      });
  });
};
export const getUserProfile = (data: IFileUpload) => {
  return new Promise((resolve, reject) => {
    post(`${API_ENDPOINTS.AUTH.UPLOAD_FILE}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err?.response?.data);
      });
  });
};

export const logout = (token: string | undefined) => {
  return new Promise((resolve, reject) => {
    post(
      API_ENDPOINTS.AUTH.LOGOUT,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err?.response?.data);
      });
  });
};
