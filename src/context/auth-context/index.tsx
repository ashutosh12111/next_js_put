"use client";

import { CONSTANTS } from "@/constants";
import { getMyProfile, logout } from "@/services/auth";
import { TOASTR_TYPES } from "@/types";
import { showToast } from "@/utils";
import getTokenClientSide from "@/utils/getTokenClientSide";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { toast } from "react-toastify";
import { IAuthContextProps } from "./types";
import {
  getNotificationList,
  readNotification,
  updateNotifcaitonListing,
} from "@/services/notification";
import socket, { NOTIFICATION_EVENT } from "@/lib/socket";

const AuthContext = createContext<IAuthContextProps>({
  userId: "",
  setUserId: (): string => "",
  currentStep: 1,
  setCurrentStep: (): number => 1,
  setToken: (): string => "",
  user: {},
  setUser: {},
  getProfile: () => "",
  handleLogout: () => "",
  clearUserData: () => "",
  getNotificaitonListing: () => "",
  setNotificationList: '"',
  handleReadNotification: () => "",
  unreadCount: 0,
  handleReadAllNotifications: () => "",
  loadingNotification: true,
});

export const AuthContextProvider = ({ children }: any) => {
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState(getTokenClientSide());
  const [user, setUser] = useState<any>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [notificationList, setNotificationList] = useState<any>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isConnected, setIsConnected] = useState(socket.connected);

  const [loadingNotification, setLoadingNotification] = useState(true);

  const router = useRouter();

  useEffect(() => {
    getProfile();
  }, [token]);

  useEffect(() => {
    notificationList &&
      setUnreadCount(
        notificationList.filter((val: any) => !val.is_read).length
      );
  }, [notificationList]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      console.log("SOCKET DISCONNECTED");
      setIsConnected(false);
    }

    function onNotificationEvent(data: any) {
      console.log(data, "data from socket>>>>>");
      setNotificationList((prev: any) => [data?.data, ...prev]);
    }


    if (user?.id) {
      socket.on("connect", onConnect);
      socket.on("disconnect", onDisconnect);
      socket.on(`${NOTIFICATION_EVENT}-${user?.id}`, onNotificationEvent);

      return () => {
        socket.off("connect", onConnect);
        socket.off("disconnect", onDisconnect);
        socket.off(`${NOTIFICATION_EVENT}-${user?.id}`, onNotificationEvent);
      };
    }
  }, [user?.id]);

  const getProfile = () => {
    if (token) {
      getMyProfile(token)
        .then((res: any) => {
          setUser(res?.data);
        })
        .catch((err: any) => {
          console.log(err, "error>>>>>>");
          handleLogout();
        });
    }
  };

  const clearUserData = () => {
    deleteCookie(CONSTANTS.COOKIE_JWT);
    setToken("");
    setUser({});
  };

  const handleLogout = () => {
    logout(getTokenClientSide());
    clearUserData();

    router.push("/sign-in");

    setTimeout(() => {
      router.refresh();
      showToast(toast, TOASTR_TYPES.SUCCESS, "You are logged out successfully");
    }, 200);
  };

  const getNotificaitonListing = async () => {
    try {
      setLoadingNotification(true);
      const token = await getTokenClientSide();
      const res: any = await getNotificationList(token);
      setNotificationList(res);
      setUnreadCount(res.filter((val: any) => !val.is_read).length);
    } catch (error) {
      console.error("Error fetching notification data:", error);
    } finally {
      setLoadingNotification(false);
    }
  };

  const handleReadNotification = async (id: string) => {
    await readNotification(getTokenClientSide(), { id });

    const findNotificationIndex = notificationList.findIndex(
      (e: any) => e?.notification_id == id
    );

    setNotificationList((prev: any) => {
      prev[findNotificationIndex].is_read = 1;
      setUnreadCount(prev.filter((val: any) => !val.is_read).length);
      router.refresh();
      return prev;
    });
  };

  const handleReadAllNotifications = async () => {
    try {
      updateNotifcaitonListing(token);
      setNotificationList((prev: any) => {
        const updated = prev.map((e: any) => {
          return {
            ...e,
            is_read: 1,
          };
        });

        setUnreadCount(
          updated.filter((val: any) => !val.is_read).length
        );

        return updated;
      });
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    if (token) getNotificaitonListing();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        userId,
        setUserId,
        user,
        setUser,
        currentStep,
        setCurrentStep,
        getProfile,
        handleLogout,
        setToken,
        clearUserData,
        notificationList,
        getNotificaitonListing,
        setNotificationList,
        handleReadNotification,
        unreadCount,
        handleReadAllNotifications,
        loadingNotification,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
