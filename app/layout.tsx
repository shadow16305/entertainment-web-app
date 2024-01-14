import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { BookmarkProvider } from "@/store/bookmark-context";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Entertainment Web App",
  description: "Chris A.B.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <BookmarkProvider>
      <html lang="en">
        <body className={`${outfit.className} bg-extra-dark-blue`}>{children}</body>
      </html>
    </BookmarkProvider>
  );
}
