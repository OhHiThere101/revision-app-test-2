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
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
