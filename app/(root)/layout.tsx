import MainNavigation from "@/components/shared/MainNavigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainNavigation />
      <main className=" md:px-6 lg:px-0 pb-10">{children}</main>
    </>
  );
}
