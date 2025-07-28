import type { Metadata } from "next";
import "./globals.css";
import NextAuthSessionProvider from "./session";

export const metadata: Metadata = {
  title: "Rivision App Test",
  description: "version 0.0.1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        {/* Prevent iframe embedding issues */}
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <style dangerouslySetInnerHTML={{
          __html: `
            html, body {
              width: 100vw !important;
              height: 100vh !important;
              margin: 0 !important;
              padding: 0 !important;
              overflow-x: hidden !important;
            }
            * {
              box-sizing: border-box !important;
            }
          `
        }} />
      </head>
      <body suppressHydrationWarning>
        <NextAuthSessionProvider>
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
