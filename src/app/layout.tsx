import { AuthContextProvider } from "@/context/auth-context";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";

const font = Noto_Sans_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
