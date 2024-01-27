import {
  Dispatch,
  SetStateAction,
} from "react";

export interface IAuthContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  setToken: Dispatch<SetStateAction<string | undefined>>;
  user: any;
  setUser: any;
  getProfile: () => void;
  handleLogout: () => void;
  clearUserData: () => void;
  notificationList?: any;
  getNotificaitonListing: () => void;
  setNotificationList: any;
  handleReadNotification: any;
  unreadCount: any;
  handleReadAllNotifications: any;
  loadingNotification: any
}
