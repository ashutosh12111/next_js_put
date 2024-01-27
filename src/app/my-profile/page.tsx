import { Icon } from "@/components/atoms/icons";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import Link from "next/link";
import React from "react";
import { getMyProfile } from "@/services/auth";
import getTokenServerSide from "@/utils/getTokenServerSide";
import { redirect } from "next/navigation";
import Meta from "@/components/molecules/Meta";
import ProfileTabs from "@/components/molecules/profile-tabs";
import BiographyViewComponent from "@/components/organisms/biography/biography-view/biography-view.component";
import ShareButton from "@/components/molecules/share-button";
import { getUserProfileStatus } from "@/helpers/utils";
import PublishProfile from "../edit-profile/elements/publish-profile";
import BackBtn from "@/components/atoms/back-btn";
import type { Metadata, ResolvingMetadata } from "next";
import { headers } from "next/headers";
import { getProtocol } from "@/helpers/utils";

export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const headersList = headers();
  const host = headersList.get("host");

  const proto = getProtocol();

  const currentUrl = `${proto}://${host}/my-profile`;
  const description = `Unlock your professional potential now! Explore the tailored knowledge of our Professional Member section in the Encyclopedia for ambitious achievers like you
  `;

  return {
    title: "Putiton-E - The paid encyclopedia",
    description: description,
    authors: [
      { name: "Putiton-E - The paid encyclopedia" },
      { name: "Putiton-E", url: currentUrl },
    ],
    referrer: "origin-when-cross-origin",
    creator: "Putiton-E",
    alternates: { canonical: currentUrl },
  };
}

const Biography = async ({ searchParams }: any) => {
  console.log(searchParams, "searchParams>>>");
  const token = getTokenServerSide();

  if (!token) redirect("/sign-in");

  console.log("redirct");

  let res: any = await getMyProfile(getTokenServerSide());

  return (
    <>
      <Meta title="My profile - Putiton-E" />
      <>
        <Header />
        <main className="main-container pt-7">
          <div className="flex justify-between sm:items-center mb-16 gap-3 sm:gap-0 flex-wrap">
            <div className="w-auto sm:w-full order-1 sm:order-1 sm:mb-25">
              <Link
                href="/"
                className="inline-flex items-center gap-2 py-9"
              >
                <Icon.IcBackArrow />
                <span className="text-white-heading text-14 font-semibold leading-20">
                  Back
                </span>
              </Link>
              {/* <BackBtn/> */}
            </div>
            <h1 className="text-white-heading text-32 font-semibold leading-40 break-all first-letter-capital w-full sm:w-auto order-3 sm:order-2">
              {res?.data?.name}
              <span className="text-[0]"> (Putiton-E Biograpby)</span>
            </h1>
            {getUserProfileStatus(
              res?.data?.is_publish,
              res?.data?.admin_publish_hidden
            ) == "1" && (
              <ShareButton
                description={`Check out ${res?.data?.name}'s biography on our platform Putiton-E!`}
              />
            )}
          </div>
          <div className="border-t border-b border-border-color flex sm:items-center justify-between mb-24 flex-col sm:flex-row gap-1 sm:gap-4">
            <div className="flex items-centre gap-4 flex-wrap order-2 sm:order-1">
              <ProfileTabs />
            </div>
            <div className="flex items-center gap-3 shrink-0 order-1 sm:order-2 pt-14 sm:pt-0">
              <Link
                href={"/edit-profile"}
                className="py-8 px-24 hover:bg-hover-secondary-button transition duration-[0.4s] border border-white-button text-white-button text-14 font-medium leading-20 rounded-xl focus:outline-none"
              >
                {searchParams?.type != "preview"
                  ? "Edit biography"
                  : "Back to edit"}
              </Link>
              {searchParams?.type == "preview" && (
                <PublishProfile profile={res?.data} />
              )}
            </div>
          </div>
          <BiographyViewComponent
            res={res}
            searchParams={searchParams}
            isEditable={true}
          />
        </main>
        <Footer />
      </>
    </>
  );
};

export default Biography;
