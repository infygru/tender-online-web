import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-12 pt-2 bg-slate-50/50">
      <div className="w-full mx-auto p-0 md:py-0">
        <div className="sm:flex sm:items-center sm:justify-between px-10">
          <div className="flex justify-between flex-col">
            <Link
              href="/"
              className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <Image
                src={"/logo.png"}
                alt="TenderOnline"
                width={280}
                height={95}
              />
            </Link>
            <span>The People. The Government. The Business</span>
          </div>
          <div className="">
            <div className="text-right flex-col">
              <p className="text-[14px] font-bold uppercase text-[#4A4A4A]">
                Find us Online
              </p>
              <div className="flex gap-2 justify-end mt-1">
                <Link href={"https://linkedin.com/in"} target="_blank">
                  <Image
                    src="/linkedin1.png"
                    width="29"
                    height={29}
                    alt="Linkedin Handle"
                  />
                </Link>
                <Link href={"https://x.com/in"} target="_blank">
                  {" "}
                  <Image
                    src="/twitter1.png"
                    width="29"
                    height={29}
                    alt="X Handle"
                  />
                </Link>
                <Link href={"https://facebook.com/in"} target="_blank">
                  {" "}
                  <Image
                    src="/facebook1.png"
                    width="29"
                    height={29}
                    alt="Facebook Handle"
                  />
                </Link>
              </div>
            </div>
            <ul className="flex flex-wrap gap-4 items-center mb-6 text-[16px] sm:mb-0 mt-4">
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:underline">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>{" "}
          </div>
        </div>
        <div className="my-6 sm:mx-auto lg:my-4" />
        <div className="flex items-center justify-between bg-[#202020] h-[55px] px-10">
          <div className="">
            <span className="block text-[16px] text-[#D9D9D9] sm:text-center">
              © 2024{" "}
              <a href="/" className="hover:underline">
                TenderOnline{" "}
              </a>
            </span>
          </div>
          <div className="">
            <ul className="flex text-[14px] text-white items-center gap-5">
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/cookie" className="hover:underline">
                  Cookie Policy
                </Link>
              </li>

              <li>
                <Link href="/refund-policy" className="hover:underline">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
