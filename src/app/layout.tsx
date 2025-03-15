import type { Metadata } from "next";
import "./ui/globals.css";

import ClientProvider from "@/components/ClientProvider";

export const metadata: Metadata = {
  title: "HandMade Shop",
  description: "HandMade Shop",
  icons: {
    icon: "favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
