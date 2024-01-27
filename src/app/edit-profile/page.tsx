import { Icon } from "@/components/atoms/icons";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import Link from "next/link";
import React from "react";
import { getMyProfile } from "@/services/auth";
import getTokenServerSide from "@/utils/getTokenServerSide";
import PersonalDetail from "@/components/organisms/profile/personal-detail";
import AddBio from "./elements/add-bio";
import PublishProfile from "./elements/publish-profile";
import { redirect } from "next/navigation";
import ProfileTabs from "@/components/molecules/profile-tabs";
import PreviewBtn from "./elements/preview-btn";
import { initialBioTitles } from "@/constants";

const Biography = async () => {
  const token = getTokenServerSide();

  if (!token) redirect("/sign-in");
  let res: any = await getMyProfile(getTokenServerSide());

  let firstOccurrenceMap = new Map();

  res?.data?.biography?.forEach((item: any, index: any) => {
    // Check if the title is in the titles array and has not been encountered before
    if (
      initialBioTitles?.includes(item.title) &&
      !firstOccurrenceMap?.has(item?.title)
    ) {
      // Add the disabled property to the object
      item.disabled = true;
      // Add the title and its first occurrence index to the map
      firstOccurrenceMap?.set(item.title, index);
    } else {
      item.disabled = false;
    }
  });

  return (
    <div>
      <Header />
      <main>
        <div className="main-container pt-7">
          <div className="flex justify-between sm:items-center mb-16 gap-3 sm:gap-0 flex-wrap">
            <div className="w-auto sm:w-full order-1 sm:order-1 sm:mb-25">
              <Link
                href="/my-profile"
                className="inline-flex items-center gap-2 py-9"
              >
                <Icon.IcBackArrow />
                <span className="text-white-heading text-14 font-semibold leading-20">
                  Back to Biography
                </span>
              </Link>
              {/* <BackBtn title='Back to Biography'/> */}
            </div>
            <h1 className="text-white-heading text-32 font-semibold leading-40 break-all first-letter-capital w-full sm:w-auto order-3 sm:order-2">
              {res?.data?.name}
            </h1>
          </div>
          <div className="border-t border-b border-border-color flex sm:items-center mb-24 flex-col sm:flex-row gap-1 sm:gap-4">
            <div className="order-2 sm:order-1">
              {/* tabs */}
              <ProfileTabs />
            </div>
            <div className="sm:ml-auto flex items-center gap-3 order-1 sm:order-2 pt-14 sm:pt-0">
              <PreviewBtn />
              <PublishProfile profile={res?.data} />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-7 xl:gap-8">
            <div className="xl:w-1/5 order-2 xl:order-1"></div>
            <div className="xl:w-[60%] order-3 xl:order-2 mb-30">
              <AddBio profile={res?.data} />
            </div>
            <PersonalDetail
              profile={res?.data}
              isEditable={true}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Biography;
