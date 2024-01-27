"use client";
import { Icon } from "@/components/atoms/icons";
import { useRouter } from "next/navigation";
import React from "react";
import { ISettingsBox } from "./types";
import DeleteAccount from "../delete-account";

const SettingsBox = ({
  title,
  description,
  children,
  backButtonUrl,
  showDeleteAccount = false,
}: ISettingsBox) => {
  const router = useRouter();

  return (
    <div>
      <div className="w-full xl:w-[65%] h-full mx-auto">
        <div className="">
          <div className="bg-gray-400 rounded-t-xl p-24 border-b border-border-color">
            <div className="flex items-center gap-2">
              <div
                className="p-4 cursor-pointer"
                onClick={() => {
                  if (backButtonUrl) {
                    router.push(backButtonUrl);
                  } else {
                    router.back();
                  }
                }}
              >
                <Icon.IcSettingsBackArrow />
              </div>
              <h1 className="text-white-heading text-16 font-semibold leading-24">
                {title} <span className="text-[0]"> (Putiton-E)</span>
              </h1>
            </div>
            {description && (
              <div className="mt-24 text-white-para text-14 font-normal leading-20">
                {description}
              </div>
            )}
          </div>
          <div className="bg-gray-400 rounded-b-xl p-24">{children}</div>
        </div>
        {showDeleteAccount && <DeleteAccount />}
      </div>
    </div>
  );
};

export default SettingsBox;
