"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, Text, rem } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Signup from "@/app/(auth)/signup/page";
import Image from "next/image";

export function DropdownMenuDemo() {
  const router = useRouter();
  const handletoLogout = () => {
    sessionStorage.removeItem("accessToken");
    toast.success("Logout Successfully");
    router.push("/");
    window.location.reload();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_ENPOINT + "/api/auth/me",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching profile:", error);
        return null;
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error loading profile</div>;
  }

  const image = data?.profile_image;
  const initials = data?.name
    ? `${data.name.charAt(0)}${data.name.charAt(1) || ""}`
    : "??";

  return (
    <Menu shadow="lg" width={200}>
      <Menu.Target>
        <Avatar className="cursor-pointer border bg-black">
          <AvatarImage src={image || "/user.svg"} alt="@shadcn" />
          <AvatarFallback className="">{initials}</AvatarFallback>
        </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Welcome {data.name || "User"}</Menu.Label>
        <Menu.Item>
          <Text size="xs" color="gray">
            Client ID: {data.clientId || "N/A"}
          </Text>
        </Menu.Item>

        <Menu.Item
          onClick={() => router.push("/profile/edit")}
          leftSection={
            <AvatarIcon style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Profile
        </Menu.Item>

        <Menu.Item
          onClick={handletoLogout}
          color="red"
          leftSection={
            <IconLogout style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

interface HeaderProps {
  isLogin1?: boolean;
  setIsLogin1?: (value: boolean) => void;
}

const Header = ({ isLogin1, setIsLogin1 }: HeaderProps) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <div>
      <div className="absolute z-40 top-8 right-0 px-2 lg:px-24 left-0">
        <div className="border bg-white rounded-xl px-6 py-2 w-full shadow-lg">
          <div className="flex justify-between">
            <div className="text-2xl flex items-center gap-2 font-bold">
              <Link href={"/"}>
                <img src="/logo.png" className="h-8 lg:h-16" alt="" />
              </Link>
              <hr className="border-t rotate-90 h-6 w-10" />
              <div className="flex items-center gap-6 pl-6">
                <Link
                  className="text-[16px] font-sans font-normal text-[#4B4B4B]"
                  href={"/"}
                >
                  Home
                </Link>
                <Link
                  className="text-[16px] font-sans font-normal text-[#4B4B4B]"
                  href={"/about-us"}
                >
                  About Us
                </Link>
                <Link
                  className="text-[16px] font-sans font-normal text-[#121212]"
                  href={"/pricing"}
                >
                  Pricing
                </Link>
                <Link
                  className="text-[16px] font-sans font-normal text-[#4B4B4B]"
                  href={"/blog"}
                >
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              {isLogin && (
                <div className="hidden lg:block">
                  <Link
                    href={"/tenders"}
                    className="border text-center text-sm font-semibold text-[#0c1073] border-[#0c1073] rounded-xl px-6 w-full mx-4 py-2"
                  >
                    Tenders Dashboard
                  </Link>
                </div>
              )}

              {/* <Link
                target="_blank"
                href="mailto:sales@tenderonline.co.in"
                className="flex items-center gap-2"
              >
                <img src="/gmail.png" alt="Gmail" className="w-8 h-8" />
                <h1 className="font-bold hidden lg:block text-sm">
                  sales@tenderonline.co.in
                </h1>
              </Link> */}

              {!isLogin && (
                <div className="hidden lg:block">
                  <div>
                    {isLogin1 && (
                      <div className="flex gap-2">
                        <div className="px-4 py-2 text-sm font-semibold rounded-xl bg-black text-white">
                          <Dialog>
                            <DialogTrigger>Watch Demo</DialogTrigger>
                            <DialogContent className="sm:max-w-[903px] bg-white">
                              <DialogHeader>
                                <DialogTitle>Watch Demo</DialogTitle>
                                <DialogDescription>
                                  Get 3 Days Free Trial. No payment required
                                </DialogDescription>
                              </DialogHeader>
                              <iframe
                                width="853"
                                height="480"
                                src={`https://www.youtube.com/embed/rokGy0huYEA`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                                className="rounded-md"
                              />
                            </DialogContent>
                          </Dialog>
                        </div>
                        <button
                          className="rounded-xl px-4 py-2 bg-black text-white font-semibold text-[16px]"
                          onClick={() => {
                            console.log(isLogin1, setIsLogin1);

                            if (window.location.pathname !== "/") {
                              window.location.href = "/";
                            } else if (setIsLogin1 !== undefined) {
                              setIsLogin1(false);
                            }
                          }}
                        >
                          Sign Up
                        </button>
                      </div>
                    )}
                    {!isLogin1 && (
                      <div className="flex gap-2">
                        <div className="px-4 py-2 text-sm font-semibold rounded-xl bg-black text-white">
                          <Dialog>
                            <DialogTrigger>Watch Demo</DialogTrigger>
                            <DialogContent className="sm:max-w-[903px] bg-white">
                              <DialogHeader>
                                <DialogTitle>Watch Demo</DialogTitle>
                                <DialogDescription>
                                  Get 3 Days Free Trial. No payment required
                                </DialogDescription>
                              </DialogHeader>
                              <iframe
                                width="853"
                                height="480"
                                src={`https://www.youtube.com/embed/rokGy0huYEA`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                                className="rounded-md"
                              />
                            </DialogContent>
                          </Dialog>
                        </div>
                        <button
                          className="rounded-xl px-4 py-2 bg-black text-white font-semibold text-[16px]"
                          onClick={() => {
                            console.log(isLogin1, setIsLogin1);

                            if (window.location.pathname !== "/") {
                              window.location.href = "/";
                            } else if (setIsLogin1 !== undefined) {
                              setIsLogin1(true);
                            }
                          }}
                        >
                          Sign In
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {isLogin && (
                <div className="hidden lg:block">
                  <DropdownMenuDemo />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
