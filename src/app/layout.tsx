"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });
import { PrimeReactProvider } from "primereact/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "@/components/shared/footer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import Head from "next/head";
import "@mantine/core/styles.css";
import { ColorSchemeScript } from "@mantine/core";

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
  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <PrimeReactProvider>{children}</PrimeReactProvider>
          </QueryClientProvider>
        </MantineProvider>
        <Toaster richColors />
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </body>
    </html>
  );
}
