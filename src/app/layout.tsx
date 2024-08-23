import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.scss";
import PrincipalHeader from "@/components/headers/PrincipalHeader";
import { AnimatePresence } from "framer-motion";

export const metadata: Metadata = {
  title: "ConsultorIA",
  description: "Digitalización Inteligente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/image/brand/icon.svg" />
          <body >
            <PrincipalHeader />
            {children}
          </body>
    </html>
  );
}
