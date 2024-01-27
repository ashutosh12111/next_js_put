import { get, post } from ".."
import { API_ENDPOINTS } from "../endpoints";

export const paymentSuccess = (session_id: string ) => {
    return new Promise((resolve, reject) => {
        get(`${API_ENDPOINTS.PAYMENT.PAYMENT_SUCCESS}?session_id=${session_id}`).then((res: any) => {
            resolve(res?.data?.data)
        }).catch(err => {
            console.log('==', err)
            reject(err?.response?.data)
        })
    })

}

