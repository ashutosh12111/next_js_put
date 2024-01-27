"use client";
import CustomButton from "@/components/atoms/button";
import React from "react";
import { Icon } from "@/components/atoms/icons";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/auth-context";

const NotificationButton = () => {
  const { unreadCount, handleReadAllNotifications } = useAuthContext();
  const router = useRouter();
  const handleClick = () => {
    handleReadAllNotifications();
  };
  return (
    <div className="bg-gray-400 rounded-t-xl p-24 border-b border-border-color flex justify-between items-center gap-2 flex-wrap">
      <div className="flex items-center gap-2">
        <CustomButton
          title=""
          variant="custom_icon"
          onClick={() => {
            router.back();
          }}
        >
          <Icon.IcSettingsBackArrow />
        </CustomButton>
        <h1 className="text-white-heading text-16 font-semibold leading-24">
          Notifications <span className="text-[0]"> (Putiton-E)</span>
        </h1>
      </div>
      {unreadCount > 0 && (
        <button
          className="text-blue-link text-14 font-medium leading-20 hover:text-hover-blue-link transition duration-[0.4s]"
          onClick={handleClick}
        >
          Mark all as read
        </button>
      )}
    </div>
  );
};

export default NotificationButton;
