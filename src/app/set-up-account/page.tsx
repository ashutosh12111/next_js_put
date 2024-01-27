import React from "react";

import getTokenServerSide from "@/utils/getTokenServerSide";
import { redirect } from "next/navigation";
import Header from "@/components/organisms/header";
import Footer from "./elements/footer";
import MainSection from "./elements/main-section";

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

  const currentUrl = `${proto}://${host}/register`;
  const description = `Register to publish your profile for ambitious achievers`;

  return {
    title: "Set up  account - Putiton-E",
    description: description,
    authors: [{ name: "Putiton-E - The paid encyclopedia" }],
    referrer: "origin-when-cross-origin",
    creator: "Putiton-E ",
    alternates: { canonical: currentUrl },
    twitter: {
      card: "summary_large_image",
      title: "Putiton-E - The paid encyclopedia",
      description,
      siteId: "",
      creator: "@Putiton",
      creatorId: "",
      images: [`${proto}://${host}/assets/images/header_logo.svg`],
    },

    openGraph: {
      title: "Set up  account - Putiton-E",
      description,
      url: currentUrl,
      siteName: "Putiton-E",
      images: [
        {
          url: `${proto}://${host}/assets/images/logo-with-background.jpeg`,
          width: 400,
          height: 400,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

const Regsiter = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const token = getTokenServerSide();
  console.log(searchParams, "params");

  if (token) redirect("/");

  return (
    <>
      <Header
        hideButtons={true}
        showIconBorder={false}
      />
      <MainSection />
      <Footer />
    </>
  );
};

export default Regsiter;
