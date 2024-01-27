import Hero from "./elements/hero";
import FeaturedMember from "./elements/featured-members";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import Members from "../../components/molecules/members";
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
  const currentUrl = `${proto}://${host}`;

  const description = `Unlock your professional potential now! Explore the tailored knowledge of our Professional Member section in the Encyclopedia for ambitious achievers like you
  `;

  return {
    title: "Putiton-E - The paid encyclopedia",
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
      title: "Putiton-E ",
      description,
      url: currentUrl,
      siteName: "Biography - Putiton-E",
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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedMember />
        <Members />
      </main>

      <Footer />
    </>
  );
}
