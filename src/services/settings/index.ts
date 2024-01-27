import { get, post, put, del } from "..";
import { API_ENDPOINTS } from "../endpoints";
import { IChangePassword, IEmailVerifyCode } from "./types";


export const editEmail = (token: string | undefined, data: {email: string}) => {
  return new Promise((resolve, reject) => {
    put(API_ENDPOINTS.SETTINGS.EDIT_EMAIL, data, {
      headers: {
        Authorization: `Bearer ${token}`,
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


export const emailVerifyCode = (token: string | undefined, data: IEmailVerifyCode) => {
  return new Promise((resolve, reject) => {
    post(API_ENDPOINTS.SETTINGS.EMAIL_VERIFY_CODE, data, {
      headers: {
        Authorization: `Bearer ${token}`,
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

export const changePassword = (token: string | undefined, data: IChangePassword) => {
  return new Promise((resolve, reject) => {
    post(API_ENDPOINTS.SETTINGS.CHANGE_PASSWORD, {
      current_password: data?.currentPassword,
      new_password: data?.newPassword,
      repeat_password: data?.repeatPassword
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
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

export const deleteAccount = (token: string | undefined) => {
  return new Promise((resolve, reject) => {
    del(API_ENDPOINTS.SETTINGS.DELETE_ACCOUNT,{
      headers: {
        Authorization: `Bearer ${token}`,
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