import React from "react";
import SettingsBox from "@/app/settings/elements/settings-box";

import getTokenServerSide from "@/utils/getTokenServerSide";
import { redirect } from "next/navigation";
import FeedbackForm from "./elements/feedback-form";

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

  console.log(proto, "proto>>>");

  const currentUrl = `${proto}://${host}/feedback`;
  const description = `Unlock your professional potential now! Explore the tailored knowledge of our Professional Member section in the Encyclopedia for ambitious achievers like you
  `;

  return {
    title: "Putiton-E - The paid encyclopedia",
    description: description,
    authors: [{ name: "Putiton-E - The paid encyclopedia" }],
    referrer: "origin-when-cross-origin",
    creator: "Putiton-E",
    alternates: { canonical: currentUrl },
  };
}

const Settings = () => {
  const token = getTokenServerSide();

  if (!token) redirect("/sign-in");

  return (
    <SettingsBox
      title={"Type your insight or feedback here"}
      description="Assist us in improving this platform by contributing your valuable insights and ideas to help us further improve the quality."
      backButtonUrl=""
      showDeleteAccount={false}
    >
      <FeedbackForm />
    </SettingsBox>
  );
};

export default Settings;
