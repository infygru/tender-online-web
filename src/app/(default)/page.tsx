"use client";

import LoginForm from "@/components/shared/login-form";
import Header from "@/components/ui/header";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Signup from "../(auth)/signup/page";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import axios from "axios";
import Loading from "@/components/ui/loading";
import { useQuery } from "@tanstack/react-query";
import { XIcon } from "lucide-react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
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
  const navigate = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");

    // List of routes that do not require authentication
    const skipAuthRoutes = ["/support", "/about-us", "/pricing"];

    // Check if the current path is in the list of routes to skip authentication
    if (skipAuthRoutes.includes(location.pathname)) {
      return;
    }

    // If the token exists, set user as logged in, otherwise redirect
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [navigate, location]);
  const [banner, setBanner] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(true);
  const { data, error } = useQuery({
    queryKey: ["images"],
    queryFn: () =>
      fetch("https://tender-online.vercel.app/api/ads/banner/images").then(
        (res) => res.json()
      ),
  });

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get(
          "https://tender-online.vercel.app/api/auth/banner"
        );
        const data = await response.data.banner;
        setBanner(data.banner);
        setIsActive(data.isActive);
        setIsSignup(data.isSignup);
        setIsVisible(data.isActive);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBanner();
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (loading) return <Loading />;

  const handleToClose = () => {
    const isClosed = localStorage.getItem("isClosed");
    if (!isClosed) {
      localStorage.setItem("isClosed", "true");
    } else {
      localStorage.setItem("isClosed", "false");
    }
    close();
  };

  const isClosed =
    typeof window !== "undefined" && localStorage.getItem("isClosed");

  return (
    <main className="relative">
      {isVisible && (
        <div className="relative">
          <Link
            className="group relative z-50 block bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 py-2 rounded-lg text-center transition duration-300 dark:bg-white/10 dark:hover:bg-white/10 dark:focus:bg-white/10"
            href="/"
          >
            <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
              <p className="me-2 inline-block text-sm text-gray-800 dark:text-neutral-200">
                {banner}
              </p>
              {isSignup && (
                <span className="group-hover:underline group-focus:underline decoration-2 inline-flex justify-center items-center gap-x-2 font-semibold text-blue-600 text-sm dark:text-blue-500">
                  Sign up
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              )}
            </div>
          </Link>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-600 z-50 hover:text-gray-900 dark:text-neutral-200 dark:hover:text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {isClosed !== "true" && (
        <>
          {data && data[0].active && (
            <Modal
              style={{ borderRadius: "24px" }}
              size={"xl"}
              className="rounded-3xl"
              opened={opened}
              onClose={handleToClose}
              centered
            >
              {/* Modal content */}{" "}
              <div className="">
                <div className="">
                  <XIcon
                    onClick={handleToClose}
                    className="h-6 w-6 text-white"
                  />
                  <Link href={data[0].url || "/"}>
                    <img
                      src={data[0].imageUrl}
                      alt="banner"
                      className="w-full rounded-xl h-[400px] object-cover"
                    />
                  </Link>
                </div>
              </div>
            </Modal>
          )}
        </>
      )}

      <Header />
      {!isLoggedIn ? (
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
              <div
                className={cn(
                  "absolute h-[65%] flex items-center justify-between flex-col top-[23%] px-24",
                  !isLoggedIn && "!w-full"
                )}
              >
                <div className="">
                  <h1
                    className={cn(
                      "text-white text-start w-full text-[32px] not-italic font-semibold leading-[51px] uppercase",
                      !isLoggedIn && "text-center"
                    )}
                  >
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
                            width="30"
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
                  <Link href={"/cookie"}>Cookie Policy </Link>
                  <Link href={"/refund-policy"}>Refund Policy</Link>
                </div>
                <div className="border-b w-full pt-4"></div>
                <div className="flex item-center justify-between w-full pt-4 px-4">
                  <div className="flex item-center text-gray-300  mt-auto w-full">
                    <p>© TenderOnline 2024</p>
                  </div>
                  <div className="text-white flex items-center gap-4">
                    <Link href={"/blog"}>Blog</Link>
                    <Link href={"/support"}>Support</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!isLoggedIn && (
            <div className="w-full lg:w-[40%] flex items-start lg:items-center justify-center lg:justify-center">
              {isLogin ? (
                <LoginForm
                  setLoading={setLoading}
                  loading={loading}
                  setIsLogin={setIsLogin}
                />
              ) : (
                <Signup setIsLogin={setIsLogin} />
              )}
            </div>
          )}
        </div>
      ) : (
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
              <div
                className={cn(
                  "absolute h-[65%] w-full flex items-center justify-between flex-col top-[23%] px-24"
                )}
              >
                <div className="w-[50%]">
                  <h1
                    className={cn(
                      "text-white w-[100%] text-center text-[32px] not-italic font-semibold leading-[51px] uppercase",
                      !isLoggedIn && "text-center"
                    )}
                  >
                    Join The Line Up Of Bidders For Government Tenders
                  </h1>
                  <div className="flex items-center justify-center pl-0 pt-8 gap-8">
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
                  <div className="bg-[rgba(20,20,20,0.58)] w-full py-3 px-4 flex items-start rounded-xl mt-8">
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
                            width="30"
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
                <div className="flex text-gray-100  items-start  text-start justify-start z-50 gap-12  mt-auto  text-base">
                  <Link href={"/terms"}>Terms & Conditions </Link>
                  <Link href={"/privacy-policy"}>Privacy Policy </Link>
                  <Link href={"/"}>Cookie Policy </Link>
                  <Link href={"/"}>Refund Policy</Link>
                </div>
                <div className="border-b w-full pt-4"></div>
                <div className="flex item-center justify-between w-full pt-4 px-4">
                  <div className="flex item-center text-gray-300  mt-auto w-full">
                    <p>© TenderOnline 2024</p>
                  </div>
                  <div className="text-white flex items-center gap-4">
                    <Link href={"/blog"}>Blog</Link>
                    <Link href={"/support"}>Support</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
