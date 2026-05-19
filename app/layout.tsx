import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landload App",
  description: "Vercel deployment and Android APK build starter for landload_app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
