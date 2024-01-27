import React from "react";
import MembersComponent from "./members.component";
import { getFeatureMembers } from "@/services/homePage";
import { headers } from "next/headers";
import { extractTextFromHTML, getProtocol } from "@/helpers/utils";
import StructureData from "@/components/atoms/structure-data";

const MembersContainer = async () => {
  const headersList = headers();
  const host = headersList.get("host");
  const proto = getProtocol();

  const currentUrl = `${proto}://${host}`;
  const memberList: any = await getFeatureMembers(1);
  const websitestructureData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: currentUrl,
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${currentUrl}/members/q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    ],
    publisher: {
      "@type": "Organization",
      logo: `${proto}://${host}/assets/images/header_logo.svg`,
      url: currentUrl,
      name: "Putiton-E",
      description:
        "Unlock your professional potential now! Explore the tailored knowledge of our Professional Member section in the Encyclopedia for ambitious achievers like you",
      // "email": "contact@example.com",
    },
  };
  const memberStructureData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: memberList.map((val: any, i: number) => ({
      "@type": "ListItem",
      position: Number(i) + 1,
      item: {
        "@type": "Person",
        name: val?.name,
        image: val?.image,
        url: `${currentUrl}/members/${val?.slug}`,
        description: extractTextFromHTML(val?.description, 20),
      },
    })),
  };
  const breadcrumbStructureData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: currentUrl,
      },
    ],
  };
  return (
    <>
      <MembersComponent memberList={memberList} />
      <StructureData
        key="websitestructureData"
        data={websitestructureData}
      />
      <StructureData
        key="memberStructureData"
        data={memberStructureData}
      />
      <StructureData
        key="breadcrumbStructureData"
        data={breadcrumbStructureData}
      />
    </>
  );
};

export default MembersContainer;
