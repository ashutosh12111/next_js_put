import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IAuthLayout {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: IAuthLayout) => {
  return (
    <div className="h-full">
      <div className="xl:grid grid-cols-2 h-full">
        <div className="">
          <div className="px-20 py-20 xl:py-28 xl:px-54">
            <Link href={"/"}>
              <Image
                className="mb-26 pb-2"
                src="/assets/images/PIO_logo.svg"
                width={182}
                height={34}
                alt="Brand Logo"
                title="Brand Logo"
                loading="eager"
              />
            </Link>
            <h1 className="mb-8 text-white-heading text-40 font-semibold leading-54">
              Welcome to{" "}
              <span className="gradient-text whitespace-nowrap">Putiton-E</span>
            </h1>
            <h2 className="text-white-heading text-24 sm:text-36 font-medium leading-32 sm:leading-44 tracking-0.72">
              A professional contact platform where leaning is ”No Option”
            </h2>
          </div>
          <div className="image-container hidden xl:block">
            <img
              className="w-full"
              src="/assets/images/map.svg"
              alt="map"
              height="100%"
              width="100%"
              loading="eager"
              title="Image"
            />
          </div>
        </div>
        <div className="flex items-center justify-center pl-20 pb-20 pr-20 xl:p-0">
          <div className="mx-auto w-[412px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
