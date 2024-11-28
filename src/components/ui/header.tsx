"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // This code will only run on the client side
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <div>
      <div className="absolute z-40 top-8 right-0  px-2 lg:px-24 left-0">
        <div className="border  bg-white rounded-xl px-6 py-2  w-full">
          <div className="flex justify-between">
            <div className="text-2xl flex items-center gap-2 font-bold">
              <Link href={"/"}>
                <img src="/logo.png" className="h-8 lg:h-16" alt="" />
              </Link>
              <hr className="border-t rotate-90 h-6 w-10" />
              <div className="flex items-center gap-6 pl-6">
                <Link className="text-xs font-normal" href={"/"}>
                  Home
                </Link>
                <Link className="text-xs font-normal" href={"/about-us"}>
                  About Us
                </Link>
                <Link className="text-xs font-normal" href={"/pricing"}>
                  Pricing
                </Link>
                <Link className="text-xs font-normal" href={"/blog"}>
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              {/* sign up */}
              {!!isLogin && (
                <div className="hidden lg:block">
                  <Link
                    href={"/tenders"}
                    className="border text-center text-sm font-semibold text-[#0c1073] border-[#0c1073] rounded-xl px-6 w-full mx-4 py-2 "
                  >
                    Tenders Dashboard
                  </Link>
                </div>
              )}

              {/* <Link
                target="_black"
                href="https://wa.me/9176133695"
                className="flex items-center gap-2"
              >
                <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
                <h1 className="font-bold hidden lg:block  text-sm">
                  91761 33695
                </h1>
              </Link>

              <Link
                target="_black"
                href="mailto:sales@tenderonline.co.in"
                className="flex items-center gap-2"
              >
                <img src="/gmail.png" alt="Gmail" className="w-8 h-8" />
                <h1 className="font-bold hidden lg:block  text-sm">
                  sales@tenderonline.co.in
                </h1>
              </Link> */}

              {!isLogin && (
                <div className="hidden lg:block">
                  <button className="rounded-xl px-4 py-2 bg-black text-white font-semibold text-sm">
                    Sign Up
                  </button>
                </div>
              )}
              {!!isLogin && (
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

import { Menu, Button, Text, rem } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function DropdownMenuDemo() {
  const router = useRouter();
  const handletoLogout = () => {
    sessionStorage.removeItem("accessToken");
    toast.success("Logout Successfully");
    router.push("/");
    window.location.reload();
  };

  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await axios.get(
        "https://tender-online.vercel.app/api/auth/me",
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        }
      );
      return response.data;
    },
  });

  if (isLoading) {
    return <div>L...</div>;
  }

  const image = data?.profile_image;
  return (
    <Menu shadow="lg" width={200}>
      <Menu.Target>
        <Avatar className="cursor-pointer border bg-black">
          <AvatarImage src={image || "/user.svg"} alt="@shadcn" />
          <AvatarFallback className="">
            {data.name.split("")[0]}
            {data.name.split("")[1]}
          </AvatarFallback>
        </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Welcome {data.name}</Menu.Label>
        {/* add clientId */}
        <Menu.Item>
          <Text size="xs" color="gray">
            Client ID: {data.clientId}
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
