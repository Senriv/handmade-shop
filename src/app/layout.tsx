import type { Metadata } from "next";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "HandMade Shop",
  description: "HandMade Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
