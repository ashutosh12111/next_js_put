import React from "react";
import SettingsBox from "@/app/settings/elements/settings-box";
import SettingsForm from "./elements/settings-form";
import getTokenServerSide from "@/utils/getTokenServerSide";
import { redirect } from "next/navigation";
import { getProtocol } from "@/helpers/utils";
import type { Metadata, ResolvingMetadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const headersList = headers();
  const host = headersList.get("host");
  const proto = getProtocol();

  const currentUrl = `${proto}://${host}/settings`;
  const description = `Unlock your professional potential now! Explore the tailored knowledge of our Professional Member section in the Encyclopedia for ambitious achievers like you
  `;

  return {
    title: "Settings - Putiton-E",
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
      title={"Settings"}
      backButtonUrl="/"
      showDeleteAccount={true}
    >
      <SettingsForm />
    </SettingsBox>
  );
};

export default Settings;
