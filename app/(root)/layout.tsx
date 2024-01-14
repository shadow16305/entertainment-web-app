import MainNavigation from "@/components/shared/MainNavigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainNavigation />
      <main className="px-4 md:px-6 lg:ps-[164px] lg:px-0 pb-10">{children}</main>
    </>
  );
}