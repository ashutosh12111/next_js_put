"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Icon } from "@/components/atoms/icons";
import useDropdownToggle from "@/hooks/useCustomDropdown";
import { getDate } from "@/utils";
import { updateNotifcaitonListing } from "@/services/notification";

import getTokenClientSide from "@/utils/getTokenClientSide";
import { formatNumber, getNotificationRedirectLink } from "@/helpers/utils";
import { useRouter } from "next/navigation";

const Notifications = ({
  notificationList,
  unreadCount,
  getNotificaitonListing,
  handleReadNotification,
}: any) => {
  const { isOpen, toggleDropdown, closeDropdown } = useDropdownToggle(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = async () => {
    const token = await getTokenClientSide();
    await updateNotifcaitonListing(token);
    getNotificaitonListing();
  };

  return (
    <div ref={dropdownRef}>
      <button
        className="flex items-center gap-3 relative p-5"
        onClick={toggleDropdown}
      >
        <Icon.IcNotificationBell />
        {unreadCount > 0 && (
          <span className="bg-[#E52B36] absolute w-auto min-w-[14px] h-[14px] rounded-full top-[-2px] right-0 z-10 text-[10px] flex items-center justify-center p-5">
            {formatNumber(formatNumber(unreadCount))}
          </span>
        )}
        <div
          className={`dropdown-wrapper absolute top-[100%] z-30 right-[-95px] w-[300px] sm:w-[400px] mt-20 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="w-full">
            <div
              className={` bg-gray-300 py-16 px-12 flex items-center justify-between gap-3 flex-wrap`}
            >
              <p className="text-white text-16 font-bold leading-24">
                Notifications
              </p>

              {unreadCount > 0 && (
                <span
                  className="text-blue-link text-14 font-medium leading-24 hover:text-hover-blue-link transition duration-[0.4s]"
                  onClick={handleClick}
                >
                  Mark all as read
                </span>
              )}
            </div>
            {notificationList && notificationList.length > 0 && (
              <ul className="bg-gray-500 flex flex-col modal-scroll scroll-smooth overflow-y-auto md:max-h-96 max-h-80">
                {notificationList &&
                  notificationList.map((element: any, index: any) => (
                    <li key={index}>
                      <div
                        className={`${
                          element.is_read ? "bg-gray-500" : "bg-gray-400"
                        } p-12 flex flex-col gap-3 hover:bg-gray-900 transition duration-[0.4s]`}
                        onClick={() => {
                          if (!element.is_read) {
                            handleReadNotification(element?.notification_id);
                          }
                          router.push(getNotificationRedirectLink(element));
                        }}
                      >
                        <div className="flex justify-start items-center">
                          <div className="py-4 px-8 bg-gray-900 inline-block rounded-[32px]">
                            <p className="text-input-text-color text-12 font-normal leading-20">
                              <span>{getDate(element.created_at).date}</span> •{" "}
                              <span>{getDate(element.created_at).time}</span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-white-para text-16 font-medium leading-24 mb-6 text-left">
                            {element?.title}
                          </p>
                          <p className="text-white-para text-14 font-normal leading-20 text-left">
                            {element?.notification_content || element?.title}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            )}
            {notificationList && notificationList.length == 0 && (
              <div className="py-16 px-12 bg-gray-400 border border-border-color">
                <p className="text-white-heading text-16 font-normal leading-24 text-left">
                  You don't have new notifications
                </p>
              </div>
            )}

            {notificationList && notificationList.length > 0 && (
              <div className="bg-gray-300 py-16 px-12">
                <Link
                  href={"/notifications"}
                  className="text-14 font-medium leading-20 text-gray-500 rounded-lg bg-white-button py-8 px-26 flex justify-center items-center hover:bg-hover-white-button transition duration-[0.4s]"
                >
                  See all notifications
                </Link>
              </div>
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

export default Notifications;
