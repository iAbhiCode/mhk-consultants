import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StartPro - Enterprise Solutions",
  description: "Transform your business with our enterprise solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {/* <TopBar/> */}
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
