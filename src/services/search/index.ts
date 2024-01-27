import { get, post } from "..";
import { API_ENDPOINTS } from "../endpoints";
import { ISearchAppeared } from "./types";

export const searchUser = (API_ENDPOINT: string, search: string) => {
  return new Promise((resolve, reject) => {
    get(API_ENDPOINT, {
      params: {
        search,
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

export const searchAppeared = (data: ISearchAppeared) => {
  return new Promise((resolve, reject) => {
    post(API_ENDPOINTS.SEARCH.SEARCH_APPEARED, data,{
      headers: {
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

