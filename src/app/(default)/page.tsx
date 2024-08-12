"use client";

import LoginForm from "@/components/shared/login-form";
import Header from "@/components/ui/header";
import React from "react";
interface SectionData {
  title: string;
  description: string;
  hasBorder?: boolean;
}

const sections: SectionData[] = [
  {
    title: "The People",
    description: "Bringing the Quality of Life",
    hasBorder: true,
  },
  {
    title: "The People",
    description: "Bringing the Quality of Life",
    hasBorder: true,
  },
  {
    title: "The People",
    description: "Bringing the Quality of Life",
    hasBorder: false,
  },
];

export default function Home() {
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <main className="relative">
      <Header />
      <div className="flex h-screen">
        {/* Left Pane */}
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className=" text-center relative">
            <img
              src="https://images.unsplash.com/photo-1529653762956-b0a27278529c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover w-full h-screen"
              alt=""
            />
            <div className="absolute top-[20%] px-24">
              <h1 className="text-white text-[32px] not-italic font-semibold leading-[51px] uppercase">
                Join The Line Up Of Bidders For Government Tenders
              </h1>

              <div className="flex pl-12 pt-8 gap-8">
                <button className="px-6 py-1 rounded-md bg-gray-100 ">
                  About us
                </button>
                <button className="px-6 py-1 rounded-md bg-gray-100 ">
                  pricing
                </button>
              </div>

              <div className="bg-[rgba(20,20,20,0.58)] py-3 px-4 flex items-center justify-between rounded-xl mt-8">
                {sections.map((section, index) => (
                  <>
                    <div
                      key={index}
                      className={section.hasBorder ? " w-full " : " w-full"}
                    >
                      <h2 className="px-6 py-4 text-white text-sm">
                        {section.title}
                      </h2>
                      <p className="text-white text-[10px] font-normal">
                        {section.description}
                      </p>
                    </div>
                    {section.hasBorder && (
                      // <hr className="border-t rotate-90 w-24 h-0" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="95"
                        viewBox="0 0 10 95"
                        fill="none"
                      >
                        <line
                          x1="2.5"
                          y1="2.18557e-08"
                          x2="2.5"
                          y2="95"
                          stroke="#757575"
                        />
                        <path
                          d="M10 48L2.5 54.9282L2.5 41.0718L10 48Z"
                          fill="#757575"
                          fill-opacity="0.78"
                        />
                      </svg>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Right Pane */}
        <div className="w-full  lg:w-1/2 flex items-center justify-center">
          <LoginForm setIsLogin={setIsLogin} />
        </div>
      </div>
    </main>
  );
}
