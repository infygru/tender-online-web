"use client";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      {/* {pathName === "/tenders" && <Sidebar />} */}

        <div className="">{children}</div>

    </div>
  );
}
