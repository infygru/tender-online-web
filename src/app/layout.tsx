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
    // Check if the user is logged in by verifying if the authToken exists
    const token = sessionStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate.push("/"); // Redirect to login if not authenticated
    }
  }, [navigate]);
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
        <Footer />
      </body>
    </html>
  );
}
