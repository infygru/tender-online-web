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
        <div className="border  bg-white rounded-xl px-6 py-3  w-full">
          <div className="flex justify-between">
            <div className="text-2xl font-bold">
              <Link href={"/"}>
                <img src="/logo.png" className="h-8 lg:h-16" alt="" />
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              {/* sign up */}
              {!!isLogin && (
                <div className="hidden lg:block">
                  <Link
                    href={"/tenders"}
                    className="text-sm font-bold text-[#454545]"
                  >
                    Tenders
                  </Link>
                </div>
              )}
              <Link
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
              </Link>

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
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconLogout,
} from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function DropdownMenuDemo() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handletoLogout = () => {
    sessionStorage.removeItem("accessToken");
    toast.success("Logout Successfully");
    router.push("/");
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item
          onClick={() => router.push("/profile")}
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
