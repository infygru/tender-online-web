"use client";

import LoginForm from "@/components/shared/login-form";
import Header from "@/components/ui/header";
import Link from "next/link";
import React from "react";
import Signup from "../(auth)/signup/page";
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
    title: "The Government",
    description: "Ideal Selection Of Bidders",
    hasBorder: true,
  },
  {
    title: "The Business",
    description: "Scale New Heights in Your Business",
    hasBorder: false,
  },
];

export default function Home() {
  const [isLogin, setIsLogin] = React.useState(true);
  return (
    <main className="relative">
      <Header />
      <div className="flex h-screen">
        {/* Left Pane */}
        <div className="hidden lg:flex h-screen relative w-full items-center justify-center flex-1 bg-white text-black">
          <div className=" text-center  w-full relative">
            <div className="fill-black bg-black opacity-50 absolute inset-0"></div>
            <img
              src="/login.png"
              className="object-cover  w-full h-screen"
              alt=""
            />
            <div className="absolute h-[65%] flex items-center justify-between flex-col top-[23%] px-24">
              <div className="">
                <h1 className="text-white text-start w-full text-[32px] not-italic font-semibold leading-[51px] uppercase">
                  Join The Line Up Of Bidders For Government Tenders
                </h1>
                <div className="flex pl-0 pt-8 gap-8">
                  <Link
                    target="_black"
                    href={"/about-us"}
                    className="px-6 py-1 rounded-md bg-gray-100 "
                  >
                    About us
                  </Link>
                  <Link
                    target="_black"
                    href={"/pricing"}
                    className="px-6 py-1 rounded-md bg-gray-100 "
                  >
                    Pricing
                  </Link>
                </div>
                <div className="bg-[rgba(20,20,20,0.58)] py-3 px-4 flex items-center justify-between rounded-xl mt-8">
                  {sections.map((section, index) => (
                    <>
                      <div
                        key={index}
                        className={section.hasBorder ? " w-full " : " w-full"}
                      >
                        <h2 className="px-6 py-4 text-white font-bold xl:text-lg text-sm">
                          {section.title}
                        </h2>
                        <p className="text-white px-10 font-istok-web xl:text-sm text-[10px] font-normal">
                          {section.description}
                        </p>
                      </div>
                      {section.hasBorder && (
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
              <div className="flex text-gray-100  items-center  text-center justify-center z-50 gap-12  mt-auto  text-base">
                <Link href={"/terms"}>Terms & Conditions </Link>
                <Link href={"/privacy-policy"}>Privacy Policy </Link>
                <Link href={"/"}>Cookie Policy </Link>
                <Link href={"/"}>Refund Policy</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Right Pane */}
        <div className="w-full lg:w-[40%] flex items-start lg:items-center justify-center lg:justify-center">
          {isLogin ? (
            <LoginForm setIsLogin={setIsLogin} />
          ) : (
            <Signup setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </main>
  );
}
