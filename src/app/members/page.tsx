import React from "react";

import { getMemberList } from "@/services/members";
import MemberListing from "./elements/member-listing";
import { headers } from "next/headers";
import { Metadata, ResolvingMetadata } from "next";
import { getProtocol } from "@/helpers/utils";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // console.log(searchParams, "searchParams>>>");

  const headersList = headers();
  const host = headersList.get("host");
  const proto = getProtocol();

  const currentUrl = `${proto}://${host}/members${
    searchParams?.q ? "?q=" + searchParams?.q : ""
  }`;
  const metaDescription = `Unlock your professional potential now! Explore the tailored knowledge of our Professional Member section in the Encyclopedia for ambitious achievers like you
  `;

  const title = "Putiton-E - The paid encyclopedia";
  const description = "Putiton-E - The paid encyclopedia";

  const image = `${proto}://${host}/assets/images/logo-with-background.jpeg`;
  const headerImage = `${proto}://${host}/assets/images/header_logo.svg`;

  return {
    title: "Biography - Putiton-E",
    description: metaDescription,
    authors: [{ name: "Putiton-E - The paid encyclopedia" }],
    referrer: "origin-when-cross-origin",
    creator: "Putiton-E ",
    alternates: { canonical: currentUrl },
    twitter: {
      card: "summary_large_image",
      title: title,
      description,
      siteId: "",
      creator: "@Putiton",
      creatorId: "",
      images: [headerImage],
    },

    openGraph: {
      title: title,
      description,
      url: currentUrl,
      siteName: "Biography - Putiton-E",
      images: [
        {
          url: image,
          width: 500,
          height: 500,
          alt: "Putiton-E Profile",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

const MemberPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const data: any = await getMemberList({
    search: searchParams.q,
    per_page: 20,
    page: 1,
  });

  return (
    <>
      <MemberListing
        data={data}
        searchQuery={searchParams.q}
      />
    </>
  );
};

export default MemberPage;
