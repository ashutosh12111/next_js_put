import { io } from 'socket.io-client';


const URL:string = process.env.NEXT_PUBLIC_SOCKET_BASE_URL || ""

const socket = io(URL);

export const NOTIFICATION_EVENT = process.env.NEXT_PUBLIC_NOTIFICATION_EVENT
export default socket;