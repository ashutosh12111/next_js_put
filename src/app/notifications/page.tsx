import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import React from "react";
import getTokenServerSide from "@/utils/getTokenServerSide";
import { redirect } from "next/navigation";

import NotificationButton from "./elements/notificaiton.button";
import NotificationListing from "./elements/notification-listing";
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

  const currentUrl = `${proto}://${host}/notifications`;
  const description = `Unlock your professional potential now! Explore the tailored knowledge of our Professional Member section in the Encyclopedia for ambitious achievers like you
  `;

  return {
    title: "Notifications - Putiton-E",
    description: description,
    authors: [{ name: "Putiton-E - The paid encyclopedia" }],
    referrer: "origin-when-cross-origin",
    creator: "Putiton-E ",
    alternates: { canonical: currentUrl },
  };
}

const Notifications = async () => {
  const token = await getTokenServerSide();
  if (!token) redirect("/sign-in");

  return (
    <>
      <Header />
      <main>
        <div className="main-container pt-26 pb-69">
          <div className="w-full xl:w-[65%] h-full mx-auto">
            <NotificationButton />
            <NotificationListing />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Notifications;
