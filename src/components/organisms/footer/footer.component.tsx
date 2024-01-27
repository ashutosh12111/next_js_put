import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white py-44 mt-auto border-t border-border-color">
      <div className="main-container">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-5">
          <div className="text-white-heading text-14 font-normal leading-21">
            © 2023 Put it on. All rights reserved.
          </div>
          <ul className="flex flex-row items-center gap-6">
            <li>
              {" "}
              <Link
                href="/privacy-policy#top"
                className="text-white-heading text-16 font-normal leading-24 border-b border-white-heading hover:border-white transition duration-[0.4s] hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/terms-and-conditions#top"
                className="text-white-heading text-16 font-normal leading-24 border-b border-white-heading hover:border-white transition duration-[0.4s] hover:text-white"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
