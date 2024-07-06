import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SearchProvider } from "@/store/SearchContext";
import MainNavigation from "@/components/shared/MainNavigation";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Entertainment Web App",
  description: "Chris A.B.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider>
      <html lang="en">
        <body className={`${outfit.className} bg-almost-black md:px-6 lg:px-0 pb-10`}>
          <MainNavigation />
          {children}
        </body>
      </html>
    </SearchProvider>
  );
}
