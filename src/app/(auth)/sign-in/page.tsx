// "use client"

import React from "react";
import SignInForm from "../elements/sign-in-form";
import { redirect } from "next/navigation";
import getTokenServerSide from "@/utils/getTokenServerSide";
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

  const currentUrl = `${proto}://${host}/sign-in`;
  const description = `Login to publish your profile for ambitious achievers`;

  return {
    title: "Login - Putiton-E",
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
      title: "Login - Putiton-E ",
      description,
      url: currentUrl,
      siteName: "Login - Putiton-E",
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

const SignIn = () => {
  const token = getTokenServerSide();

  if (token) redirect("/");

  return (
    <>
      <div className="">
        <SignInForm />
      </div>
    </>
  );
};

export default SignIn;
