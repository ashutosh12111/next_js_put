import { CONSTANTS } from '@/constants';
import { getCookie } from 'cookies-next';

export default function getTokenClientSide (){
   const cookie = getCookie(CONSTANTS?.COOKIE_JWT);

   return cookie
}