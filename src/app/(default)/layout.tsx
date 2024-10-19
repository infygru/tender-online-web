"use client";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <div className="">
      {/* {pathName === "/tenders" && <Sidebar />} */}
      <div className="">{children}</div>
    </div>
  );
}
