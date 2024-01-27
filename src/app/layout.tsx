import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/antd-registery";
import ContextProvider from "@/providers/context-provider";
import ToastProvider from "@/providers/toast-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Putiton-E",
  viewport: "width=device-width, initial-scale=1",
  robots:
    process.env.SEARCH_ENGINE_CRAWLING == "true" ? "all" : "noindex,nofollow",
  themeColor: "#0F1014",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <link
        rel="icon"
        href="../assets/images/fav_icon.png"
        sizes="any"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="../assets/images/fav_icon.png"
      />

      <StyledComponentsRegistry>
        <ContextProvider>
          <body className={inter.className}>
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-ZVX75YDVNM"
            />
            <Script>
              {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
           
             gtag('config', 'G-ZVX75YDVNM');
           `}
            </Script>

            <ToastProvider />
            {children}
          </body>
        </ContextProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
