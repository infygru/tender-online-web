"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SidebarItem {
  title: string;
  path: string;
  queryKey: string;
  queryValue: string;
}

const Sidebar: React.FC = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const [activeQueries, setActiveQueries] = useState<Record<string, string>>(
    {}
  );

  const sidebarItems: SidebarItem[] = [
    {
      title: "State",
      path: "/tenders",
      queryKey: "state",
      queryValue: "state",
    },
    {
      title: "Location",
      path: "/tenders",
      queryKey: "location",
      queryValue: "location",
    },
    {
      title:"Department",
      path: "/tenders",
      queryKey: "department",
      queryValue: "department",
    }
  ];

  useEffect(() => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    setActiveQueries(params);
  }, [searchParams]);

  const handleClick = (item: SidebarItem) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    if (currentParams.get(item.queryKey) === item.queryValue) {
      currentParams.delete(item.queryKey);
    } else {
      currentParams.set(item.queryKey, item.queryValue);
    }
    router.push(`${item.path}?${currentParams.toString()}`);
  };

  return (
    <div className="w-[300px]">
      <div className="py-4 h-full max-h-full rounded-3xl bg-gray-100 mt-14 ml-6 mr-6">
        <div className="px-6">
          <Image
            src="/TO-logo.png"
            alt="logo"
            width={123}
            height={123}
            className="w-full"
          />
        </div>
        <div className="text-center text-2xl font-bold mt-4">Filter</div>

        <nav>
          <ul className="mt-8 pl-6">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className={`py-3 text-base font-semibold mb-4 rounded-l-full px-6 cursor-pointer ${
                  activeQueries[item.queryKey] === item.queryValue
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => handleClick(item)}
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
