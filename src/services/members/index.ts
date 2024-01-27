import { get } from "..";
import { API_ENDPOINTS } from "../endpoints";
import { ISingleMember, IMembersList } from "./types";

export const getMemberList = ({ search, per_page, page }: IMembersList) => {
  return new Promise((resolve, reject) => {
    get(API_ENDPOINTS.MEMBERS.MEMBER_LIST, {
      params: {
        search,
        per_page,
        page,
      },
      headers: {},
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

export const getSingleMember = (query: ISingleMember) => {
  return new Promise((resolve, reject) => {
    get(`${API_ENDPOINTS.MEMBERS.VIEW_MEMBER}?slug=${query?.slug}`, {
      params: {
        search: query,
      },
      headers: {},
    })
      .then((res: any) => {
        resolve(res);
      })
      .catch((err) => {
        console.log("==", err);
        reject(err?.response?.data);
      });
  });
};
