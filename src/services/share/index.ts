import { post } from "..";
import { API_ENDPOINTS } from "../endpoints";
import { IShareProfile } from "./types";

export const shareProfile = (token: string | undefined,data: IShareProfile) => {
  return new Promise((resolve, reject) => {
    post(API_ENDPOINTS.SHARE.SHARE_PROFILE, data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res: any) => {
        resolve(res?.data);
      })
      .catch((err) => {
        console.log("==", err);
        reject(err?.response?.data);
      });
  });
};

export const profileImpression = (data: IShareProfile) => {
  return new Promise((resolve, reject) => {
    post(API_ENDPOINTS.SHARE.PROFILE_IMPRESSION, data)
      .then((res: any) => {
        resolve(res?.data);
      })
      .catch((err) => {
        console.log("==", err);
        reject(err?.response?.data);
      });
  });
};

export const profileVisit = (data: IShareProfile) => {
  return new Promise((resolve, reject) => {
    post(API_ENDPOINTS.SHARE.PROFILE_VISIT, data)
      .then((res: any) => {
        resolve(res?.data);
      })
      .catch((err) => {
        console.log("==", err);
        reject(err?.response?.data);
      });
  });
};

