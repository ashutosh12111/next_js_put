import React from "react";
import Image from "next/image";

import Link from "next/link";
import { IFeatureMember } from "@/types";
import MemberCard from "@/components/molecules/member-card";

const MemberComponent = ({ memberList }: any) => {
  return (
    <div className="pt-32 pb-64">
      <div className="main-container">
        <div className="flex items-center justify-between mb-24 gap-2 flex-wrap">
          <h2 className="text-white-heading text-24 font-semibold leading-32">
            Our Members
          </h2>
          {memberList?.length >= 16 && (
            <Link
              href="/members"
              className="text-18 font-semibold leading-28 text-blue-link hover:text-hover-blue-link"
            >
              See all
            </Link>
          )}
        </div>
        {memberList?.length == 0 && (
          <p className="text-white-heading text-16 font-normal leading-24">
            Currently, there are no members.
          </p>
        )}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
          {memberList.map((val: IFeatureMember, i: any) => (
            <MemberCard
              key={`member_key_${i}`}
              {...val}
              type="default"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberComponent;
