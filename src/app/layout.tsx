import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { BackToTop } from "@/components/layout/BackToTop";
import { CookieConsent } from "@/components/layout/CookieConsent";
import "@/styles/globals.css";
import "@/styles/variables.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QwickIn IT Services | Innovative Solutions for Every Business",
  description:
    "QwickIn IT Services delivers custom app development, cybersecurity, cloud infrastructure, managed IT, digital signage, and web development across Australia and India.",
  keywords: "IT services, app development, cybersecurity, cloud, managed IT, Melbourne, Australia",
  openGraph: {
    title: "QwickIn IT Services",
    description: "Innovative Solutions for Every Business",
    siteName: "QwickIn",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-[#1A1A1A] antialiased`}>
        <Navigation />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
