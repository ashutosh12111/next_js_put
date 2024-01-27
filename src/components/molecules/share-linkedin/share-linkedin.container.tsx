import React from "react";
import ShareLinkedinComponent from "./share-linkedin.component";
import { makeProfileShareUrl } from "@/helpers/utils";
import { useAuthContext } from "@/context/auth-context";
import getTokenClientSide from "@/utils/getTokenClientSide";
import { shareProfile } from "@/services/share";
import { useParams } from "next/navigation";

const ShareLinkedinContainer = () => {
  const { user } = useAuthContext();
  const { slug } = useParams();

  const handleClick = () => {
    const url = makeProfileShareUrl(user);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);

    if (slug) {
      shareProfile(getTokenClientSide(), {
        from_user: user?.id || null,
        to_user: slug,
      });
    }
  };

  return <ShareLinkedinComponent handleClick={handleClick} />;
};

export default ShareLinkedinContainer;
