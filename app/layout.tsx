import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Orbitron, Montserrat } from '@next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'], 
  variable: "--orbitron-font"
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--montserrat-font"
});


export const metadata: Metadata = {
  title: "Math AI",
  description: "Advanced AI for your math needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black ${orbitron.variable} ${montserrat.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
     </html>
  );
}
