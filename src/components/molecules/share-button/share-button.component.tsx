"use client";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/atoms/icons";
import useDropdownToggle from "@/hooks/useCustomDropdown";
import { useAuthContext } from "@/context/auth-context";
import ShareTwitter from "../share-twiiiter";
import ShareFb from "../share-fb";
import ShareLinkedin from "../share-linkedin";
import CopyButton from "../copy-button";
import copy from "clipboard-copy";
import { makeProfileShareUrl } from "@/helpers/utils";
const ShareButtonComponent = ({ description }: any) => {
  const { isOpen, toggleDropdown, closeDropdown } = useDropdownToggle(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isCopied, setIsCopied] = useState(false);
  const { user } = useAuthContext();

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

  const handleCopyClick = async () => {
    const url: any = makeProfileShareUrl(user);

    await copy(url);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div
      ref={dropdownRef}
      className="self-start ml-auto sm:ml-0 order-2 sm:order-3"
    >
      <div
        className="flex items-center gap-3 relative cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="bg-white-button rounded-lg border border-gray-500 text-gray-500 text-14 font-semibold leading-20 py-8 px-16 flex items-center gap-2">
          <Icon.IcShare />
          Share
        </div>
        {isCopied && (
          <div className="text-white-para absolute top-[100%] px-20 py-10 bg-gray-900 mt-10 whitespace-nowrap right-0 rounded-md">
            Copied to the clipboard.
          </div>
        )}
        <div
          className={`dropdown-wrapper absolute top-[100%] right-0 min-w-[224px] z-10 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="bg-gray-400 border border-border-color py-7">
            <CopyButton
              handleCopyClick={handleCopyClick}
              isCopied={isCopied}
            />
            <li>
              <ul className="border-t border-border-color">
                <ShareTwitter text={description} />
                <ShareFb />
                <ShareLinkedin />
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShareButtonComponent;
