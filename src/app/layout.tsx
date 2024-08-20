import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.scss";

const inter = Inter({ subsets: ["latin"] });

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
       <link rel="icon" href="/image/logo.jpg" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
