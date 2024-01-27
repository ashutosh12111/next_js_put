import { get, post, put, del } from "..";
import { API_ENDPOINTS } from "../endpoints";
import { ISubmitFeedback } from "./types";



export const submitFeedback = (token: string | undefined, data: ISubmitFeedback) => {
  return new Promise((resolve, reject) => {
    post(API_ENDPOINTS.FEEDBACK.SUBMIT_FEEDBACK, data, {
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

