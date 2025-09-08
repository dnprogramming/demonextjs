import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import HubspotChat from "@/components/hubspot/hubspot";
import Analytics from "@/components/analytics/analytics";
import Social from "@/components/social/social";
import Navbar from "@/components/navbar/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import SocialContent from "@/content/social";

export const metadata: Metadata = {
  title: "Demo Next.js App",
  description: "This is a demo site built in NextJS to show code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="wzQm5NOiwK09swcef4UzvX97APVJkMOF2nypu2VPKOY" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
        <Social socials={SocialContent}/>
        <HubspotChat hubspot=""/>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
