import { useAuthContext } from "@/context/auth-context";
import React from "react";
import SingleNotification from "../single-notification";

const NotificationListingComponent = () => {
  const { notificationList, loadingNotification } = useAuthContext();


  return (
    <>
      <ul>
        {notificationList &&
          notificationList?.map((val: any, i: Number) => (
            <SingleNotification
              {...val}
              key={i}
            />
          ))}
      </ul>
      {notificationList?.length == 0 ? (
        <p className="text-white-heading text-16 font-normal leading-24 text-center mt-40">
        {loadingNotification ? "Loading...":"No notifications found"}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default NotificationListingComponent;
