import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
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

  const currentUrl = `${proto}://${host}/terms-and-conditions#top`;
  const description = `Unlock your professional potential now! Explore the tailored knowledge of our Professional Member section in the Encyclopedia for ambitious achievers like you
  `;

  return {
    title: "Terms and Conditions - Putiton-E",
    description: description,
    authors: [{ name: "Putiton-E - The paid encyclopedia" }],
    referrer: "origin-when-cross-origin",
    creator: "Putiton-E",
    alternates: { canonical: currentUrl },
    twitter: {
      card: "summary_large_image",
      title: "Terms and Conditions - Putiton-E",
      description,
      siteId: "",
      creator: "@Putiton",
      creatorId: "",
      images: [`${proto}://${host}/assets/images/header_logo.svg`],
    },

    openGraph: {
      title: "Terms and Conditions - Putiton-E",
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

export default function Home() {
  return (
    <>
      <>
        <Header showIconBorder={false} />
        <main>
          <div className="bg-gray-400">
            <div className="main-container py-74">
              <p className="text-white text-14 font-normal leading-20 mb-16 px-10 py-4 bg-[#32323233] inline-block border border-[#0000001a]">
                Legal terms
              </p>
              <div className="flex flex-col xl:flex-row justify-between gap-8">
                <div className="w-full xl:w-1/2 h-full justify-self-center">
                  <h1 className="text-white-heading text-32 sm:text-64 font-semibold leading-36 sm:leading-72">
                    Terms of Service
                    <span className="text-[0]">
                      {" "}
                      (Putiton-E Privacy Policy)
                    </span>
                  </h1>
                </div>
                <div className="w-full xl:w-2/5 flex items-end ">
                  <p className="text-white-heading text-16 font-normal leading-24">
                    These Terms of Service govern your use of Putiton-E. By
                    using our Service, you agree to comply with these Terms.
                    Please read this Agreement carefully.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-64 pb-96">
            <div className="main-container">
              <div className="flex-row ">
                <div className="w-full xl:w-[65%] h-full mx-auto">
                  <h2 className="text-white-heading text-18	 sm:text-24	leading-32	font-semibold	 mb-20">
                    Use of the Service
                  </h2>
                  <ol className="list-decimal ps-20 mb-32">
                    <li className="text-18	text-white-para leading-28	font-normal">
                      You must be 17 years old or older to use this Service.
                    </li>
                    <li className="text-18	text-white-para leading-28	font-normal">
                      You agree to use the Service only for lawful purposes and
                      in compliance with all applicable laws and regulations.
                    </li>
                    <li className="text-18	text-white-para leading-28	font-normal">
                      You are responsible for maintaining the confidentiality of
                      your account credentials and for all activities associated
                      with your account.
                    </li>
                    <li className="text-18	text-white-para leading-28	font-normal">
                      You agree not to engage in any activity that could harm,
                      disrupt, or compromise the integrity of our Service or its
                      users.
                    </li>
                  </ol>
                  <h2 className="text-white-heading text-18	 sm:text-24	leading-32	font-semibold	 mb-16">
                    Intellectual Property
                  </h2>
                  <ol className="list-decimal ps-20 mb-32">
                    <li className="text-18	text-white-para leading-28	font-normal">
                      The content, design, graphics, logos, and other materials
                      on the Service are protected by intellectual property laws
                      and are the property of Putiton-E or its licensors.
                    </li>
                    <li className="text-18	text-white-para leading-28	font-normal">
                      You may not use, reproduce, modify, or distribute any of
                      the content from the Service without our explicit written
                      consent.
                    </li>
                  </ol>
                  <h2 className="text-white-heading text-18	 sm:text-24	leading-32	font-semibold	 mb-16">
                    User Content
                  </h2>
                  <ol className="list-decimal ps-20 mb-32">
                    <li className="text-18	text-white-para leading-28	font-normal">
                      You may submit content to the Service, such as comments,
                      reviews, or other materials.
                    </li>
                    <li className="text-18	text-white-para leading-28	font-normal">
                      By submitting User Content, you grant us a non-exclusive,
                      worldwide, royalty-free, and transferable license to use,
                      display, and distribute the content for the purpose of
                      operating and improving the Service.
                    </li>
                    <li className="text-18	text-white-para leading-28	font-normal">
                      You are solely responsible for your User Content. You
                      agree not to submit content that is unlawful, offensive,
                      infringing, or violates the rights of others.
                    </li>
                  </ol>
                  <h2 className="text-white-heading text-18	 sm:text-24	leading-32	font-semibold	 mb-16">
                    Third-Party Links
                  </h2>
                  <ol className="list-decimal ps-20">
                    <li className="text-18	text-white-para leading-28	font-normal">
                      Our Service may contain links to third-party websites or
                      services that are not owned or controlled by us.
                    </li>
                    <li className="text-18	text-white-para leading-28	font-normal">
                      We do not endorse or assume responsibility for any
                      content, privacy policies, or practices of these
                      third-party websites or services.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    </>
  );
}
