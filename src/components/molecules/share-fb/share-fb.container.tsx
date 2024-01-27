"use client";
import React from "react";
import ShareFbComponent from "./share-fb.component";
import { makeProfileShareUrl } from "@/helpers/utils";
import { useAuthContext } from "@/context/auth-context";
import { useParams } from "next/navigation";
import { shareProfile } from "@/services/share";
import getTokenClientSide from "@/utils/getTokenClientSide";

const ShareTwitterContainer = () => {
  const { user } = useAuthContext();
  const { slug } = useParams();

  const handleClick = () => {
    const url = makeProfileShareUrl(user);
    window.open(`https://www.facebook.com/sharer.php?u=${url}`);
    if(slug){
      shareProfile(getTokenClientSide(), {
        from_user: user?.id || null,
        to_user: slug
     })
    }
  };
  return <ShareFbComponent handleClick={handleClick} />;
};

export default ShareTwitterContainer;
