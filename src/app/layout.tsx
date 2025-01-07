import localFont from "next/font/local";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import SiteHeader from "@/components/navigation/site-header";
import SiteFooter from "@/components/navigation/site-footer";
import React from "react";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Fednail-LL - Portfolio',
  description: 'Portfolio de FEDNAIL LECLERCQ -  Développeur informatique, je suis un développeur web et mobile, j\'aime le développement web, le développement mobile et le développement de jeux vidéo.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <SiteHeader/>
        {children}

        <SiteFooter/>
      </ThemeProvider>
      </body>
    </html>
  );
}
