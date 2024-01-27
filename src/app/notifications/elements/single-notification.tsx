"use client"
import React from "react";
import Link from "next/link";
import { useAuthContext } from "@/context/auth-context";
import { getDate } from "@/utils";
import { getNotificationRedirectLink } from "@/helpers/utils";

const SingleNotification = ({
  created_at,
  title,
  notification_content,
  notification_id,
  key,
  is_read,
}: any) => {


    const {handleReadNotification} = useAuthContext()
  return (
    <li key={key}>
      <Link
        href={getNotificationRedirectLink({title})}
        className={`${
          is_read ? "bg-gray-500" : "bg-gray-400"
        } p-12 flex flex-col gap-3 border-b border-border-color hover:bg-gray-900 transition duration-[0.4s]`}
        onClick={() => {
            handleReadNotification(notification_id)
        }}
      >
        <div className="flex justify-start items-center">
          <div className="py-4 px-8 bg-gray-900 inline-block rounded-[32px]">
            <p className="text-input-text-color text-12 font-normal leading-20">
              <span>{getDate(created_at)?.date}</span> •{" "}
              <span>{getDate(created_at)?.time}</span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-white-para text-16 font-medium leading-24 mb-6 text-left">
            {title}
          </p>
          <p className="text-white-para text-14 font-normal leading-20 text-left">
            {notification_content}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default SingleNotification;
