"use client";
import { Icon } from "@/components/atoms/icons";
import useModal from "@/hooks/useModal";
import Image from "next/image";
import React from "react";
import EditDetail from "../edit-detail";
import dayjs from "dayjs";
import { countries } from "@/lib/country";

const PersonalDetailComponent = ({ profile, isEditable }: any) => {
  const { isOpen, toggle } = useModal();

  const handleImageClick = () => {
    toggle();
  };

  return (
    <>
      <div className="xl:w-[30%] order-1 xl:order-3">
        <div className="sm:flex flex-col sm:flex-row xl:flex-col sm:gap-5 xl:gap-0 xl:mb-70">
          <div className="xl:px-20 pb-20 sm:pb-0 xl:pb-20 xl:pt-20 sm:w-1/2 xl:w-full">
            <div className="relative image-gradient-border mb-12 w-full">
              {profile?.image ? (
                <Image
                  className={`w-full h-full ${
                    isEditable ? "cursor-pointer" : ""
                  }`}
                  src={profile?.image}
                  // fill={true}
                  width={100}
                  height={100}
                  objectFit="cover"
                  alt="Featured Member Image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 33vw"
                  onClick={handleImageClick}
                  title={profile?.name}
                  loading="eager"
                />
              ) : (
                <Image
                  className={`w-full h-full ${
                    isEditable ? "cursor-pointer" : ""
                  }`}
                  src={"/assets/images/Profile.svg"}
                  width={100}
                  height={100}
                  objectFit="cover"
                  alt="Featured Member Image"
                  onClick={handleImageClick}
                  title={profile?.name}
                  loading="eager"
                />
              )}
            </div>

            <h2 className="text-white-heading text-20 font-semibold leading-32 tracking-0.4 break-all first-letter-capital">
              {profile?.name}
            </h2>
            <p className="text-white-para text-14 font-medium leading-20 tracking-0.28 first-letter-capital">
              {profile?.profession}
            </p>
            {(profile?.linkedin_link || profile?.twitter_link) && (
              <div className="inline-flex align-center gap-5 pr-10 flex-wrap py-10 mt-4">
                {/* Place the linked in and twitter icons here */}
                {profile?.linkedin_link && (
                  <a
                    href={profile?.linkedin_link}
                    className="cursor-pointer transition duration-[0.4s] hover:scale-110"
                    target="_blank"
                  >
                    <Icon.IcLinkedinIcon />
                  </a>
                )}
                {profile?.twitter_link && (
                  <a
                    href={profile?.twitter_link}
                    className="cursor-pointer transition duration-[0.4s] hover:scale-110"
                    target="_blank"
                  >
                    <Icon.IcTwitterIcon />
                  </a>
                )}
              </div>
            )}
          </div>
          <div className="pt-20 sm:pt-0 xl:pt-20 pb-0 xl:pb-20 px-0 xl:px-20 sm:w-1/2 xl:w-full border-t sm:border-0 xl:border-t border-border-color">
            <div className="flex gap-1 items-center mb-12">
              <h3 className="text-white-heading text-16 font-semibold leading-24">
                Personal details
              </h3>
              {isEditable && (
                <EditDetail
                  isOpen={isOpen}
                  toggle={toggle}
                />
              )}
            </div>
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-5">
                <h4 className="text-white-heading text-14 font-medium leading-20">
                  Born
                </h4>
                <p className="text-white-para text-14 font-normal leading-20 tracking-0.28 first-letter-capital">
                  {profile?.city}
                  {profile?.city && profile?.dob ? <br></br> : ""}
                  {profile?.dob
                    ? dayjs(profile?.dob).format("MMMM D, YYYY")
                    : "-"}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <h4 className="text-white-heading text-14 font-medium leading-20">
                  Nationality
                </h4>
                <p className="text-white-para text-14 font-normal leading-20 tracking-0.28 first-letter-capital">
                  {profile?.country ? countries[profile?.country]?.name : "-"}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <h4 className="text-white-heading text-14 font-medium leading-20">
                  Profession
                </h4>
                <p className="text-white-para text-14 font-normal leading-20 tracking-0.28 first-letter-capital">
                  {profile?.profession ? profile?.profession : "-"}
                </p>
              </div>
              {profile?.education && (
                <div className="grid grid-cols-2 gap-5">
                  <h4 className="text-white-heading text-14 font-medium leading-20">
                    Education
                  </h4>
                  <p className="text-white-para text-14 font-normal leading-20 tracking-0.28 first-letter-capital">
                    {profile?.education}
                  </p>
                </div>
              )}
              {profile?.office_name && (
                <div className="grid grid-cols-2 gap-5">
                  <h4 className="text-white-heading text-14 font-medium leading-20">
                    Office name
                  </h4>
                  <p className="text-white-para text-14 font-normal leading-20 tracking-0.28 first-letter-capital">
                    {profile?.office_name}
                  </p>
                </div>
              )}

              {profile?.height && (
                <div className="grid grid-cols-2 gap-5">
                  <h4 className="text-white-heading text-14 font-medium leading-20">
                    Height
                  </h4>
                  <p className="text-white-para text-14 font-normal leading-20 tracking-0.28 break-words first-letter-capital">
                    {(profile?.height ? profile?.height + " cm" : "") || (
                      <p className="">&ndash;</p>
                    )}
                  </p>
                </div>
              )}
              {profile?.website && (
                <div className="grid grid-cols-2 gap-5">
                  <h4 className="text-white-heading text-14 font-medium leading-20">
                    Website
                  </h4>
                  <p className="text-white-para text-14 font-normal leading-20 tracking-0.28 break-words">
                    {(profile?.website ? (
                      <a
                        href={profile?.website}
                        target="_blank"
                        className="text-blue-link text-14 font-normal leading-20 tracking-[-0.28px] cursor-pointer ellipsis-2"
                      >
                        {profile?.website}
                      </a>
                    ) : (
                      ""
                    )) || <p className="">&ndash;</p>}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetailComponent;
