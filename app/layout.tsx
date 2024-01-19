import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import AuthProvider from "./Providers";
import { SearchProvider } from "@/store/SearchContext";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Entertainment Web App",
  description: "Chris A.B.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider>
      <html lang="en">
        <body className={`${outfit.className} bg-almost-black`}>
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
    </SearchProvider>
  );
}
