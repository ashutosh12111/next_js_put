import { CONSTANTS } from '@/constants';
import { cookies } from 'next/headers'; // Import cookies

export default function getTokenServerSide() {
    const nextCookies = cookies()
    const token = nextCookies.get(CONSTANTS.COOKIE_JWT)
    return token?.value
}
export function getUserServerSide():any {
    const nextCookies = cookies()
    const token = nextCookies.get(CONSTANTS.COOKIE_UESR_JWT)
    return token?.value
}

