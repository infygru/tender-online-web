"use client";

import "./globals.css";
import { Toaster } from "sonner";
import { PrimeReactProvider } from "primereact/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import Head from "next/head";
import "@mantine/core/styles.css";
import { ColorSchemeScript } from "@mantine/core";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "@/components/hook/length";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({});
  const queryClient = new QueryClient();
  const navigate = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");

    const skipAuthRoutes = ["/support", "/about-us", "/pricing"];

    if (skipAuthRoutes.includes(window.location.pathname)) {
      return;
    }

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate.push("/");
    }
  }, [navigate]);

  const initialUserState = {
    length: 0,
  };

  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body>
        <MantineProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <PrimeReactProvider>
              <GoogleOAuthProvider
                clientId={
                  process.env.NEXT_PUBLIC_Google_Oauth_ClientID as string
                }
              >
                <UserProvider initialState={initialUserState}>
                  {children}
                </UserProvider>
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
