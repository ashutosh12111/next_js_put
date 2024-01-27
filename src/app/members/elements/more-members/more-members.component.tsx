"use client";
import React from "react";
import MemberCard from "@/components/molecules/member-card";
import { useMembersContext } from "@/context/members-context";

const MoreMembersComponent = () => {
  const { members } = useMembersContext();

  return (
    <>
      {members &&
        members?.map((val: any) => (
          <MemberCard
            key={val.id}
            {...val}
          />
        ))}
    </>
  );
};

export default MoreMembersComponent;
