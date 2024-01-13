import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Stack Over Flow",
  description: "This is a stack over flow clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>{children}</body>
    </html>
  );
}
