import { get } from "..";
import { API_ENDPOINTS } from "../endpoints";

export const getFeatureMembers = (type: number) => {
  return new Promise((resolve, reject) => {
    get(API_ENDPOINTS.HOMEPAGE.MEMBERS, {
      params: {
        type,
      },
      headers: {},
    })
      .then((res: any) => {
        resolve(res?.data?.data);
      })
      .catch((err) => {
        reject(err?.response?.data);
      });
  });
};

export const featureMember = () => {
  return new Promise((resolve, reject) => {
    get(API_ENDPOINTS.HOMEPAGE.FEATURE_MEMBERS, {
      params: {},
      headers: {},
    })
      .then((res: any) => {
        resolve(res?.data?.data);
      })
      .catch((err) => {
        reject(err?.response?.data);
      });
  });
};

export const getPublishedUserSlugs = () => {
  return new Promise((resolve, reject) => {
    get(API_ENDPOINTS.HOMEPAGE.GET_PUBLISHEDUSER_SLUGS, {
      params: {},
      headers: {},
    })
      .then((res: any) => {
        resolve(res?.data);
      })
      .catch((err) => {
        reject(err?.response?.data);
      });
  });
};
