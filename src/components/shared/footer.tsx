import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-start flex-col">
              <Link
                href="/"
                className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
              >
                <img src="/logo.png" className="h-12" alt="Flowbite Logo" />
              </Link>
              <span>The People. The Government. The Business</span>
            </div>
            <div className="">
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <Link
                    href="/aboutus"
                    className="hover:underline me-4 md:me-6"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:underline me-4 md:me-6"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:underline me-4 md:me-6"
                  >
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
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex items-center justify-between">
            <div className="">
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite™
                </a>
                Tender Online
              </span>
            </div>
            <div className="">
              <ul className="flex text-xs items-center gap-3">
                <li>
                  <Link href="/blog" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="/blog" className="hover:underline">
                    Cookie Policy
                  </Link>
                </li>

                <li>
                  <Link href="/blog" className="hover:underline">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
