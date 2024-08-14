import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: [
    "300", // 300 - Light
    "400", // 400 - Regular
    "500", // 500 - Medium
    "600", // 600 - SemiBold
    "700", // 700 - Bold
    "800", // 800 - ExtraBold
    "900", // 900 - Black
  ],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk"
});

export const metadata: Metadata = {
  title: "Dev Stack Over Flow",
  description: "This is a stack over flow clone",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500"
        }
      }}
    >
      <html suppressContentEditableWarning lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
