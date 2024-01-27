"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Icon } from "@/components/atoms/icons";
import Image from "next/image";
import useDropdownToggle from "@/hooks/useCustomDropdown";
import { useAuthContext } from "@/context/auth-context";
import LogoutButton from "@/components/atoms/logout-button";
import { useRouter } from "next/navigation";

const UserProfileDropDown = () => {
  const { isOpen, toggleDropdown, closeDropdown } = useDropdownToggle(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user } = useAuthContext();
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

  return (
    <div ref={dropdownRef}>
      <button
        className="flex items-center gap-3 relative"
        onClick={toggleDropdown}
      >
        <div className="relative profile-pic w-[44px] h-[44px]">
          <Image
            className="object-top"
            src={user?.image || "/assets/images/Profile.svg"}
            objectFit="cover"
            alt="profile-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            title="Profile"
            height={44}
            width={44}
            loading="eager"
          />
        </div>

        <div
          className={`arrow transition duration[0.4s] ${
            isOpen ? "rotate-[180deg] " : ""
          }`}
        >
          <Icon.IcDownArrow />
        </div>

        <div
          className={`dropdown-wrapper absolute top-[100%] right-0 z-30 min-w-[126px] mt-10 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="bg-gray-400 border border-border-color">
            <li>
              <span
                onClick={() => {
                  router.refresh();
                  router.push("/my-profile");
                }}
                className="pl-12 py-12 pr-16 flex items-center gap-2 white-link-with-icon"
              >
                <Icon.IcMyProfile />
                <span className="text-white-heading text-14 font-normal leading-20 whitespace-nowrap">
                  My profile
                </span>
              </span>
            </li>
            <li>
              <Link
                href="/feedback"
                className="pl-12 py-12 pr-16 flex items-center gap-2 white-link-with-icon"
              >
                <Icon.IcFeedback />
                <span className="text-white-heading text-14 font-normal leading-20 whitespace-nowrap">
                  Give feedback
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="pl-12 py-12 pr-16 flex items-center gap-2 white-link-with-icon"
              >
                <Icon.IcSettings />
                <span className="text-white-heading text-14 font-normal leading-20 whitespace-nowrap">
                  Settings
                </span>
              </Link>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </div>
      </button>
    </div>
  );
};

export default UserProfileDropDown;
