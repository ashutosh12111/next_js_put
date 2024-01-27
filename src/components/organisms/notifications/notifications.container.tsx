"use client";
import React from "react";
import NotificationsComponent from "./notifications.component";
import { useAuthContext } from "@/context/auth-context";

const NotificationsContainer = () => {
  const {
    user,
    notificationList,
    getNotificaitonListing,
    handleReadNotification,
    unreadCount
  } = useAuthContext();



  return (
    <NotificationsComponent
      notificationList={notificationList}
      user={user}
      unreadCount={unreadCount}
      getNotificaitonListing={getNotificaitonListing}
      handleReadNotification={handleReadNotification}
    />
  );
};

export default NotificationsContainer;
