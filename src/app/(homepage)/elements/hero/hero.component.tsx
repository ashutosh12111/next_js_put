import React from "react";
import GlobalSearch from "@/components/molecules/global-search";

const Hero = () => {
  return (
    <div className="bg-gray-400 bg-hero-image bg-no-repeat bg-right-bottom xl:bg-right relative z-[9] bg-contain">
      <div className="main-container bg-black bg-opacity-50 md:bg-transparent">
        <div className="flex flex-col xl:flex-row py-70 md:py-86 justify-between gap-8">
          <div className="w-full xl:w-1/2 h-full">
            <p className="text-white text-24 font-normal leading-20 pb-16">
              Welcome to
            </p>
            <h1 className="text-white-heading text-32 sm:text-64 font-semibold leading-36 sm:leading-72">
              <span className="gradient-text whitespace-nowrap">Putiton-E</span>{" "}
              - The paid encyclopedia
            </h1>
          </div>
          <div className="w-full xl:w-1/2 flex items-end">
            <div className="bg-hero-gradient backdrop-blur-[3px] rounded-[10px] pr-16 py-16 pl-16">
              <h2 className="mb-12 text-white-heading text-16 font-normal leading-24">
                Unlock your professional potential now! Explore the tailored
                knowledge of our Professional Member section in the Encyclopedia
                for ambitious achievers like you.
              </h2>
              <GlobalSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
