"use client";

import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const sidebarItems = [
    { title: "Active Tenders", path: "/tenders" },
    { title: "Closed Tenders", path: "/tenders" },
    { title: "Demo", path: "/tenders" },
  ];

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="max-w-[320px] w-full">
      <div className="py-4 h-full max-h-full rounded-3xl bg-gray-100  mt-14 ml-6 mr-6">
        <div className="px-6">
          <Image
            src="/TO-logo.png"
            alt="logo"
            width={123}
            height={123}
            className="w-full"
          />
        </div>
        <nav>
          <ul className="mt-8 pl-6">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className={`py-3 text-base font-semibold mb-4 rounded-l-full px-6 cursor-pointer ${
                  pathName === item.path ? "bg-blue-500 text-white" : "bg-white"
                }`}
                onClick={() => handleClick(item.path)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
