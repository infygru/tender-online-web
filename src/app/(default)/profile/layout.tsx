"use client";

import Sidebar from "@/components/layout/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:flex lg:flex-row flex-col">
      <Sidebar />
      {children}
    </div>
  );
}
