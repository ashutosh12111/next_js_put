import React from "react";
import Image from "next/image";
import Search from "@/components/molecules/search";
import Link from "next/link";
import CustomButton from "@/components/atoms/button";
import { Icon } from "@/components/atoms/icons";
import UserProfileDropDown from "@/components/molecules/user-profile-dropdown";
import getTokenServerSide from "@/utils/getTokenServerSide";
import Notifications from "../notifications";
import GiveFeedbackBtn from "../give-feedback-btn";

const Header = ({ hideButtons, showIconBorder = true }: any) => {
  const token = getTokenServerSide();
  return (
    <header id="top">
      <div className="bg-gray-400 text-white border-b border-border-color xl:fixed top-0 w-full z-30 px-16 xl:px-32 pt-12 pb-8 sm:pt-15 sm:pb-15">
        <div className="flex items-center flex-wrap gap-x-4 gap-y-3 xl:gap-0">
          {/* logo */}
          <Link
            href="/"
            className="shrink-0 order-1 xl:order-1 sm:mr-24"
          >
            <Image
              src="/assets/images/header_logo.svg"
              width={30}
              height={29}
              alt="Brand Logo"
              title="Brand Logo"
              loading="eager"
            />
          </Link>

          <div
            className={`w-[1px] h-[44px] bg-[#63676C] mr-24 order-2 hidden xl:block ${
              showIconBorder ? "" : "invisible"
            }`}
          ></div>

          <Search />

          <nav
            className="order-2 xl:order-4 ml-auto flex items-center gap-4 justify-end"
            aria-label="main"
          >
            {/* {Boolean(token) && <GiveFeedbackBtn/>} */}

            {Boolean(token) ? (
              <>
                <Notifications />
                <div className="profile-dropdown">
                  <UserProfileDropDown /* Make sure UserProfileDropDown is correct */
                  />
                </div>
              </>
            ) : (
              !hideButtons && (
                <>
                  <Link
                    href="/sign-in"
                    className="py-5 px-12 md:py-11 md:px-32 hover:bg-hover-secondary-button transition duration-[0.4s] border border-white-button text-white-button text-14 md:text-16 font-medium leading-20  md:leading-24 rounded-lg md:rounded-xl focus:outline-none disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 relative"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="py-6 px-12 md:py-12 md:px-32 bg-white-button hover:bg-hover-white-button transition duration-[0.4s] text-gray-500 text-14 md:text-16 font-medium leading-20 md:leading-24 rounded-lg md:rounded-xl focus:outline-none relative disabled:cursor-not-allowed"
                  >
                    Register
                  </Link>
                </>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
