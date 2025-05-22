import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
