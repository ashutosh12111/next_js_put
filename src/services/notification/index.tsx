import { API_ENDPOINTS } from "../endpoints";
import { get, post, put } from "..";
import { IReadNotification } from "./types";



export const getNotificationList = (token: any) => {
    return new Promise((resolve, reject) => {
        get(API_ENDPOINTS.NOTIFICATION.LISTING, {
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


export const updateNotifcaitonListing = (token: any) => {
    return new Promise((resolve, reject) => {
        put(API_ENDPOINTS.NOTIFICATION.CLEAR_NOTIFICATION, {}, {
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

export const readNotification = (token: any, data: IReadNotification) => {
    return new Promise((resolve, reject) => {
        post(API_ENDPOINTS.NOTIFICATION.READ_NOTIFICATIONS, data, {
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


