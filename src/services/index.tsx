// import { setCookie } from "cookies-next";



import { CONSTANTS } from "@/constants";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { deleteCookie } from "cookies-next";

const maxRetries = 4;
let retries = 0;

const isServer = typeof window === 'undefined'
// You can define the token and API_URL here
const token: string = ""; // Update with your actual token
const API_URL: string = ""; // Update with your API's base URL

const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

console.log(process.env.NEXT_PUBLIC_API_BASE_URL, "process.env.NEXT_PUBLIC_API_BASE_URL>>")
console.log(token, '====token')
axiosApi.defaults.headers.common["Authorization"] = token;


axiosApi.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can add your custom response handling logic here
    // For example, you can log the response or perform some actions
    // before returning it


    console.log("getting response from axios", response?.status)


    return response;
  },
  (error: any) => {


    //   if (isServer) {

    //     const { redirect } = (await import('next/navigation'))
    //     redirect("/sign-in")
    // }
    // else {


    // }
    console.log('===error', error)
    console.log('===errorcode', error?.code)

        // Handle errors here if needed
        if (error?.response?.status == 401) {
          deleteCookie(CONSTANTS.COOKIE_JWT)
        }

    if (error.code === 'ECONNRESET' && retries < maxRetries) {
      retries++;
      console.log('Retrying request...');
      return axiosApi(error.config); // Retry the request
    }



    // console.log(error,"getting error response")
    return Promise.reject(error);
  }
);


export async function get<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
  return await axiosApi.get<T>(url, { ...config }).then((response: AxiosResponse<T>) => response?.data);
}

export async function post<T>(url: string, data: any, config: AxiosRequestConfig = {}): Promise<T> {
  return axiosApi
    .post<T>(url, { ...data }, { ...config })
    .then((response: AxiosResponse<T>) => response?.data);
}
export async function postImage<T>(url: string, data: any, config: AxiosRequestConfig = {}): Promise<T> {
  return axiosApi
    .post<T>(url, data , { ...config })
    .then((response: AxiosResponse<T>) => response?.data);
}

export async function put<T>(url: string, data: any, config: AxiosRequestConfig = {}): Promise<T> {
  return axiosApi
    .put<T>(url, { ...data }, { ...config })
    .then((response: AxiosResponse<T>) => response?.data);
}

export async function del<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
  return await axiosApi
    .delete<T>(url, { ...config })
    .then((response: AxiosResponse<T>) => response?.data);
}
