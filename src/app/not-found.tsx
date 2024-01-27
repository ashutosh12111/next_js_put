"use client";

import CustomButton from "@/components/atoms/button";
import { Icon } from "@/components/atoms/icons";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="grid h-screen px-4 place-content-center bg-gray-500">
      <div className="text-center">
        <div className="mb-32 flex items-center justify-center">
          <div className="w-[120px] h-[120px] bg-gray-800 rounded-[28px] flex items-center justify-center">
            <Icon.IcExclamation />
          </div>
        </div>
        <h1 className="text-white-heading text-36 font-bold leading-44 tracking-0.72 mb-8">
          404
        </h1>
        <p className="text-white-para text-16 font-normal leading-24 mb-24">
          Oops! page not found.
        </p>
        <CustomButton
          title="Go Back"
          variant="primary"
          className="min-w-[206px]"
          onClick={() => {
            router.push("/");
          }}
        />
      </div>
    </div>
  );
};

export default NotFound;
