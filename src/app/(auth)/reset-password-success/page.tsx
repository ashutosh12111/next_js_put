"use client";
import { Icon } from "@/components/atoms/icons";
import React from "react";
import CustomButton from "@/components/atoms/button";
import { useRouter } from "next/navigation";
import Meta from "@/components/molecules/Meta";

const ResetPasswordSuccess = () => {
  const router = useRouter();
  return (
    <>
      <Meta title="Reset password success - Putiton-E" />
      <div className="text-center">
        <div className="mb-32 flex items-center justify-center">
          <div className="w-[120px] h-[120px] bg-gray-800 rounded-[28px] flex items-center justify-center">
            <Icon.IcPrs />
          </div>
        </div>
        <div className="mb-32">
          <h4 className="mb-8 text-white-heading text-36 font-bold leading-44 tracking-0.72">
            Success!
          </h4>
          <p className="mb-8 text-white-para text-14 font-normal leading-20">
            Your password has been successfully changed
          </p>
        </div>
        <CustomButton
          title="Back to login page"
          onClick={() => {
            router.push("/sign-in");
          }}
        />
      </div>
    </>
  );
};

export default ResetPasswordSuccess;
