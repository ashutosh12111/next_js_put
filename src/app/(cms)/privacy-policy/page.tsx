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

  const currentUrl = `${proto}://${host}/privacy-policy#top`;
  const description = `Unlock your professional potential now! Explore the tailored knowledge of our Professional Member section in the Encyclopedia for ambitious achievers like you
  `;

  return {
    title: "Privacy Policy - Putiton-E",
    description: description,
    authors: [{ name: "Putiton-E - The paid encyclopedia" }],
    referrer: "origin-when-cross-origin",
    creator: "Putiton-E ",
    alternates: { canonical: currentUrl },
    twitter: {
      card: "summary_large_image",
      title: "Privacy Policy - Putiton-E",
      description,
      siteId: "",
      creator: "@Putiton",
      creatorId: "",
      images: [`${proto}://${host}/assets/images/header_logo.svg`],
    },

    openGraph: {
      title: "Privacy Policy - Putiton-E",
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
      <Header showIconBorder={false} />
      <main>
        <div className="bg-gray-400">
          <div className="main-container py-74">
            <p className="text-white text-14 font-normal leading-20 mb-16 px-10 py-4 bg-[#32323233] inline-block border border-[#0000001a]">
              Legal terms
            </p>
            <div className="flex flex-col xl:flex-row justify-between gap-8">
              <div className="w-full xl:w-1/2 h-full">
                <h1 className="text-white-heading text-32 sm:text-64 font-semibold sm:leading-72">
                  Privacy Policy{" "}
                  <span className="text-[0]"> (Putiton-E Privacy Policy)</span>
                </h1>
              </div>
              <div className="w-full xl:w-2/5">
                <p className="text-white-heading text-16 font-normal leading-24">
                  Your privacy is important to us at Putiton-E. We respect your
                  privacy regarding any information we may collect from you
                  across our website.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-64 pb-96">
          <div className="main-container">
            <div className="flex-row ">
              <div className="w-full xl:w-[65%] h-full mx-auto">
                <p className="text-18	text-white-para leading-28	mb-40 font-normal">
                  This Privacy Policy outlines how Putiton-E collects, uses, and
                  protects the information you provide when using our website.
                  We are committed to safeguarding your privacy and ensuring
                  that your personal information is protected.
                </p>
                <h2 className="text-white-heading text-20	 sm:text-30 leading-38 font-semibold	 mb-20	">
                  What information do we collect?
                </h2>
                <p className="text-18	text-white-para leading-28	mb-40 font-normal">
                  We may collect the following types of information:
                </p>
                <h3 className="text-white-heading text-18	 sm:text-24	leading-32	font-semibold	 mb-20	">
                  Personal Information
                </h3>
                <p className="text-18	text-white-para leading-28	mb-32 font-normal">
                  When you use our Service, you may provide us with personal
                  information such as your name, email address, postal address,
                  and phone number. This information is collected when you
                  register an account, make a purchase, subscribe to our
                  newsletter, or contact us for support.
                </p>
                <h3 className="text-white-heading text-18	 sm:text-24	leading-32	font-semibold	 mb-16">
                  Usage Information
                </h3>
                <p className="text-18	text-white-para leading-28	mb-32 font-normal">
                  We may collect information about how you interact with our
                  Service, including your IP address, device type, browser
                  information, pages visited, and actions taken.
                </p>
                <h3 className="text-white-heading text-18	 sm:text-24	leading-32	font-semibold	 mb-16">
                  Cookies and Tracking Technologies
                </h3>
                <p className="text-18	text-white-para leading-28	mb-32 font-normal">
                  {" "}
                  We use cookies and similar tracking technologies to enhance
                  your experience on our Service. Cookies are small data files
                  stored on your device that help us understand your preferences
                  and provide you with a better user experience.
                </p>
                <h3 className="text-white-heading text-18	 sm:text-24	leading-32	font-semibold	 mb-16">
                  How We Use Your Information
                </h3>
                <p className="text-18	text-white-para leading-28	mb-32 font-normal">
                  {" "}
                  We use the information we collect for the following purposes:
                </p>
                <ol className="list-decimal ps-20 mb-40">
                  <li className="text-18	text-white-para leading-28	font-normal">
                    To provide and improve our Service.
                  </li>
                  <li className="text-18	text-white-para leading-28	font-normal">
                    To personalize your experience and customize content.
                  </li>
                  <li className="text-18	text-white-para leading-28	font-normal">
                    To process transactions and send transaction notifications.
                  </li>
                  <li className="text-18	text-white-para leading-28	font-normal">
                    To send periodic emails such as newsletters and updates.
                  </li>
                  <li className="text-18	text-white-para leading-28	font-normal">
                    To respond to your inquiries and provide customer support.
                  </li>
                  <li className="text-18	text-white-para leading-28	 font-normal">
                    To analyze usage patterns and improve our Service.
                  </li>
                </ol>
                <h2 className="text-white-heading text-20	 sm:text-30		leading-38	font-semibold	 mb-20">
                  Data Sharing and Disclosure
                </h2>
                <p className="text-18	text-white-para leading-28	mb-32 font-normal">
                  {" "}
                  We do not sell, trade, or rent your personal information to
                  third parties. However, we may share your information with:
                </p>
                <ol className="list-decimal ps-20 mb-32">
                  <li className="text-18	text-white-para leading-28	font-normal">
                    Service Providers: We may share your information with
                    trusted third-party service providers who assist us in
                    operating our Service and providing necessary
                    functionalities.
                  </li>
                  <li className="text-18	text-white-para leading-28	font-normal">
                    Legal Requirements: We may disclose your information if
                    required by law or in response to valid legal requests.
                  </li>
                </ol>
                <h3 className="text-white-heading text-18	 sm:text-24	leading-32	font-semibold	 mb-16">
                  Data Security
                </h3>
                <p className="text-18	text-white-para leading-28 font-normal">
                  We are committed to ensuring the security of your information.
                  We implement industry-standard security measures to protect
                  against unauthorized access, alteration, disclosure, or
                  destruction of your personal information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
