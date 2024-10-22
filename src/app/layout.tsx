"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });
import { PrimeReactProvider } from "primereact/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import Head from "next/head";
import "@mantine/core/styles.css";
import { ColorSchemeScript } from "@mantine/core";
import Link from "next/link";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });
  const queryClient = new QueryClient();
  const navigate = useRouter();
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
      navigate.push("/"); // Redirect to login page
    }
  }, [navigate, location]);

  const [banner, setBanner] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get(
          "https://tender-online-h4lh.vercel.app/api/auth/banner"
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
  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <PrimeReactProvider>
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
              <GoogleOAuthProvider clientId="175197906673-63vakrbof9qaoug7s178arephhnv4iro.apps.googleusercontent.com">
                {children}
              </GoogleOAuthProvider>
            </PrimeReactProvider>
          </QueryClientProvider>
        </MantineProvider>
        <Toaster richColors />
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </body>
    </html>
  );
}
