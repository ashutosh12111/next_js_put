import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuthContext } from "@/context/auth-context";
import { handleSearcAppeared } from "@/helpers/utils";
const SearchSuggestionList = ({ id, name, image, profession, slug }: any) => {
  const { user } = useAuthContext();
  const href = user?.id == id ? `/my-profile` : `/members/${slug}`;

  return (
    <>
      <li className="">
        <Link
          href={href}
          className="cursor-pointer"
          onClick={() => {
            handleSearcAppeared(id, user);
          }}
        >
          <div className="flex gap-4 items-start">
            <div className="w-[54px] h-[54px] relative shrink-0">
              <Image
                src={image || "../assets/images/Profile.svg"}
                fill={true}
                objectFit="cover"
                alt="profile image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                title="Profile"
              />
            </div>
            <div className="">
              <p className="text-16 leading-24 font-semibold text-white-heading capitalize text-left break-all first-letter-capital">
                {name}
              </p>
              <p className="text-14 text-white-para font-medium leading-20 text-left first-letter-capital">
                {profession}
              </p>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default SearchSuggestionList;
