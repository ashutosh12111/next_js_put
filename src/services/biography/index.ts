import { del, post, put } from "..";
import { API_ENDPOINTS } from "../endpoints";
import { IChangeOrder, IDeleteSection, IDraftBiography } from "./types";


export const changeOrder = (token: string | undefined, data: IChangeOrder) => {
  return new Promise((resolve, reject) => {
    post(API_ENDPOINTS.BIOGRAPHY.CHANGE_ORDER, data, {
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



export const publishProfile = (token: string | undefined) => {
  return new Promise((resolve, reject) => {
    put(API_ENDPOINTS.BIOGRAPHY.PUBLISH_PROFILE, {}, {
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

export const publishBio = (token: string | undefined) => {
  return new Promise((resolve, reject) => {
    post(API_ENDPOINTS.BIOGRAPHY.PUBLISH_BIO, {}, {
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

export const draftBiography = (token : string  | undefined,data: IDraftBiography) => {
  return new Promise((resolve, reject) => {
    post(API_ENDPOINTS.BIOGRAPHY.DRAFT_BIOGRAPHY, data, {
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
}

export const deleteSection = (token : string  | undefined,data: IDeleteSection) => {
  return new Promise((resolve, reject) => {
    del(`${API_ENDPOINTS.BIOGRAPHY.DELETE_SECTION}?id=${data?.id}`, {
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
}


export const updateUserBio = (token : string  | undefined,data: {
   bio: any
}) => {
  return new Promise((resolve, reject) => {
    put(`${API_ENDPOINTS.BIOGRAPHY.UPDATE_UESR_BIO}`, {
        bio: data?.bio

    } ,{
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
}
