"use client";
import React from "react";
import { IMemberCard } from "./member-card.types";
import Image from "next/image";
import { countries } from "@/lib/country";
import {
  capitalizeFirstLetter,
  extractTextFromHTML,
  handleSearcAppeared,
} from "@/helpers/utils";
import Link from "next/link";
import { useAuthContext } from "@/context/auth-context";
import { useSearchParams } from "next/navigation";
const MemberCardComponent = ({
  id,
  slug,
  name,
  profession,
  country,
  image,
  description,
  type = "default",
}: IMemberCard) => {
  const { user } = useAuthContext();
  const search = useSearchParams();

  description = extractTextFromHTML(description);
  const href = user?.id == id ? `/my-profile` : `/members/${slug}`;

  if (type == "default") {
    return (
      <div className="relative bg-gray-400">
        <Link
          href={href}
          className="absolute h-full w-full z-10 text-[0]"
          onClick={() => {
            if (search.get("q")) {
              handleSearcAppeared(id, user);
            }
          }}
        >
          {name}
        </Link>
        <div className="relative w-full shrink-0">
          {image ? (
            <Image
              className="w-full h-full"
              src={image || "assets/images/Profile.svg"}
              width={100}
              height={100}
              alt="profileimage-1e"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXw8AAgMBQLfkYc4AAAAASUVORK5CYII="
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              title={name}
              loading="eager"
            />
          ) : (
            <Image
              className="w-full h-full"
              src={"assets/images/Profile.svg"}
              width={100}
              height={100}
              alt="profileimage-1e"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXw8AAgMBQLfkYc4AAAAASUVORK5CYII="
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              title={name}
              loading="eager"
            />
          )}
        </div>
        <div className="flex flex-col justify-between sm:px-24 pt-16 px-16 pb-16 sm:pb-20">
          <h2 className="text-white-heading text-18 font-semibold leading-28 truncate first-letter-capital">
            {capitalizeFirstLetter(name)}
          </h2>
          <p className="mb-8 text-white-para text-14 font-medium leading-20 truncate first-letter-capital">
            {profession}
          </p>
          <div className="max-w-fit flex items-center pl-6 pr-8 py-5 border border-blue-link mb-8 rounded">
            <div className="rounded-full mr-8 w-[20px] h-[20px] relative shrink-0">
              <Image
                className="rounded-full object-cover max-w-full absolute inset-0 h-[20px] w-[20px] border-[1.5px] border-[#EDEDED]"
                src={countries[country]?.image}
                alt="flag icon"
                objectFit="cover"
                title={country}
                height={19}
                width={19}
                loading="eager"
              />
            </div>
            <div className="text-blue-link text-12 font-normal leading-16 truncate tracking-0.24">
              {countries[country]?.name}
            </div>
          </div>
          <p className="text-white-para text-16 font-normal leading-24 ellipsis-2">
            {description}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="relative mr-24">
          <Link
            href={href}
            className="absolute h-full w-full z-10 text-[0]"
          >
            {name}
          </Link>
          <div className="p-16 flex xl:flex-row flex-col bg-gray-400 gap-6">
            <div className="relative w-full xl:w-[150px] shrink-0">
              <Image
                className="w-full h-full"
                src={image || "assets/images/Profile.svg"}
                width={100}
                height={100}
                objectFit="cover"
                alt="Featured Member Image"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXw8AAgMBQLfkYc4AAAAASUVORK5CYII="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                title={name}
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-white-heading text-18 font-semibold leading-28 ellipsis-1 break-all first-letter-capital">
                {capitalizeFirstLetter(name)}
              </h2>
              <p className="mb-8 text-white-para text-14 font-medium leading-20 ellipsis-1 break-all first-letter-capital">
                {profession}
              </p>
              <div className="max-w-fit flex items-center pl-6 pr-8 py-5 border border-blue-link mb-8 rounded">
                <div className="rounded-full mr-8 w-[20px] h-[20px] relative shrink-0">
                  <Image
                    className="rounded-full object-cover max-w-full absolute inset-0 h-[20px] w-[20px] border-[1.5px] border-[#EDEDED]"
                    src={countries[country]?.image}
                    alt="flag icon"
                    objectFit="cover"
                    title={country}
                    height={19}
                    width={19}
                    loading="eager"
                  />
                </div>
                <div className="text-blue-link text-12 font-normal leading-16 ellipsis-1 break-all tracking-0.24">
                  {countries[country]?.name}
                </div>
              </div>
              <p className="text-white-para text-16 font-normal leading-24 ellipsis-2">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MemberCardComponent;
