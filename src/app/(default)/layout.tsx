"use client";
import Footer from "@/components/shared/footer";
import Sidebar from "@/components/shared/sidebar";
import Header from "@/components/ui/header";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <div className="flex">
      {pathName === "/tenders" && <Sidebar />}
      <div className="">{children}</div>
    </div>
  );
}
