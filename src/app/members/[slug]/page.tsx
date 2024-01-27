import { Icon } from "@/components/atoms/icons";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import Link from "next/link";
import React from "react";
import { permanentRedirect, redirect } from "next/navigation";
import BiographyViewComponent from "@/components/organisms/biography/biography-view/biography-view.component";
import { getSingleMember } from "@/services/members";
import ShareButton from "@/components/molecules/share-button";
import { headers } from "next/headers";
import type { Metadata, ResolvingMetadata } from "next";
import { extractTextFromHTML, getProtocol } from "@/helpers/utils";
import StructureData from "@/components/atoms/structure-data";

export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let res: any = await getSingleMember({ slug: params?.slug });

  if (!isNaN(params?.slug && res?.data?.slug)) {
    return permanentRedirect(`/members/${res?.data?.slug}`);
  }

  if (Object.keys(res.data).length == 0 || res.data.length === 0) {
    return permanentRedirect("/");
  }

  const headersList = headers();
  const host = headersList.get("host");
  const proto = getProtocol();

  const currentUrl = `${proto}://${host}/members/${params.slug}`;
  const metaDescription = `Unlock your professional potential now! Explore the tailored knowledge of our Professional Member section in the Encyclopedia for ambitious achievers like you
  `;

  const title = res?.data?.name || "Putiton-E - The paid encyclopedia";
  const description =
    extractTextFromHTML(res?.data?.biography[0].description, 20) ||
    "Putiton-E - The paid encyclopedia";

  const image =
    res?.data?.image || `${currentUrl}/../../assets/images/Profile.svg`;

  return {
    title: title,
    description: description,
    authors: [
      { name: "Putiton-E - The paid encyclopedia" },
      { name: "Putiton-E", url: currentUrl },
    ],
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
      images: [image],
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

const Biography = async ({ params }: { params: { slug: string } }) => {
  let res: any = await getSingleMember({ slug: params?.slug });
  if (Object.keys(res.data).length == 0 || res.data.length === 0) {
    return permanentRedirect("/");
  }

  const headersList = headers();
  const host = headersList.get("host");
  const proto = getProtocol();

  const currentUrl = `${proto}://${host}/members/${params.slug}`;
  const homePageUrl = `${proto}://${host}`;

  const userDetailStructureData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: res?.data?.name,
    description:
      extractTextFromHTML(res?.data?.biography[0].description, 20) ||
      "Putiton-E - The paid encyclopedia",
    image: res?.data?.image || `${currentUrl}/../../assets/images/Profile.svg`,

    author: {
      "@type": "Person",
      name: "Putiton-E",
      url: currentUrl,
      image: `${proto}://${host}/assets/images/logo-with-background.jpeg`,
    },
    datePublished: res.data?.created_at || "2024-01-25T08:00:00Z",
    dateModified: res.data?.updated_at || "2024-01-25T10:30:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": currentUrl,
    },
  };
  const breadcrumbStructureData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: homePageUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "User Details",
        item: currentUrl,
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="main-container pt-7">
        <div className="flex justify-between sm:items-center mb-32 gap-3 sm:gap-0 flex-wrap">
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
          </div>
          <h1 className="text-white-heading text-32 font-semibold leading-40 break-all first-letter-capital w-full sm:w-auto order-3 sm:order-2">
            {res?.data?.name}
            <span className="text-[0]"> (Putiton-E Biograpby)</span>
          </h1>
          <ShareButton
            description={`Check out ${res?.data?.name}'s biography on our platform Putiton-E!`}
          />
        </div>
        <BiographyViewComponent
          res={res}
          searchParams={{ type: "preview" }}
          isEditable={false}
        />
      </main>
      <StructureData
        key="websitestructureData"
        data={userDetailStructureData}
      />
      <StructureData
        key="breadcrumbStructureData"
        data={breadcrumbStructureData}
      />

      <Footer />
    </>
  );
};

export default Biography;
