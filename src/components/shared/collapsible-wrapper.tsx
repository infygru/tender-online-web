"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronUp } from "lucide-react";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CollapsibleWrapper = ({
  children,
  title,
  subTitle,
  description,
  colTitle,
}: any) => {
  return (
    <div className="max-w-[1400px] pt-6 lg:pt-24 mx-auto flex items-center">
      <Collapsible className=" w-full">
        <CollapsibleTrigger className="w-full bg-black px-6 py-4">
          <div className=" w-full flex items-center justify-between text-white">
            <div className="flex items-start flex-col">
              <h3 className="lg:text-xl text-sm font-semibold">{title} </h3>
              <p className="lg:text-sm text-xs">{subTitle}</p>
            </div>
            <div className="flex lg:text-sm text-xs items-center gap-3">
              More details{" "}
              <ChevronUp className="data-[state=active]:rotate-0 rotate-180" />
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6 py-6 space-y-2">
          <h1 className="lg:text-xl text-sm font-semibold ">{colTitle}</h1>
          <p>{description}</p>
          <div className="flex items-center gap-2">
            <hr className="w-full" />{" "}
            <span className="flex text-sm font-bold items-center gap-2">
              less <ChevronUp />
            </span>
          </div>
        </CollapsibleContent>
        {children}
      </Collapsible>
    </div>
  );
};

export default CollapsibleWrapper;

interface TabOption {
  label: string;
  value: string;
  price: number;
  period: string;
}

export const PricingTabs = ({ handletoAddcart }: any) => {
  // Define tab options dynamically
  const tabs: TabOption[] = [
    { label: "Month", value: "Per Month", price: 400, period: "/ Per Month" },
    {
      label: "Half Year",
      value: "Per Half Year",
      price: 2400,
      period: "/ Per Half Year",
    },
    { label: "Annual", value: "Per Year", price: 4000, period: "/ Per Year" },
  ];

  // State for active tab
  const [activeTab, setActiveTab] = useState<string>(tabs[0].value);

  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState<boolean>(false);
  // Change handler for tabs
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  const router = useRouter();
  // Ensure Razorpay is loaded
  useEffect(() => {
    if (typeof window !== "undefined" && window.Razorpay) {
      setIsRazorpayLoaded(true);
    } else {
      // Load Razorpay if it's not already loaded
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        setIsRazorpayLoaded(true);
      };
      script.onerror = () => {
        toast.error("Failed to load Razorpay SDK. Please try again.");
      };
      document.body.appendChild(script);
    }
  }, []);

  // Razorpay payment handler
  const handlePayment = (duration: any, price: any) => {
    const paymentAmount = price;
    if (!isLogin) {
      router.push("/");
      return;
    }
    if (!isRazorpayLoaded) {
      toast.error("Razorpay SDK is not loaded yet. Please wait.");
      return;
    }

    const options = {
      key: "rzp_test_ujFOlA5t7s0E09", // Use NEXT_PUBLIC for env vars in Next.js
      amount: paymentAmount * 100, // Razorpay amount is in paise
      currency: "INR",
      name: "Subscription Payment",
      description: `Pay ₹${paymentAmount} for ${duration}`,
      handler: async (response: any) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const apiUrl = `https://tender-online.vercel.app/api/auth/success/payment`;

          const result = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({
              paymentId,
              amount: paymentAmount,
              duration: duration,
            }),
          });

          if (result.ok) {
            toast.success("Payment Successful!");
            router.push("/tenders");
          } else {
            toast.error("Payment Failed");
          }
        } catch (error) {
          toast.error("Payment failed. Please try again.");
          console.error(error);
        }
      },
      prefill: {
        name: "John Doe", // Replace with dynamic user details
        email: "john@example.com", // Replace with dynamic user email
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };
  const isLogin =
    typeof window !== "undefined" && sessionStorage.getItem("accessToken");
  return (
    <div className="flex items-center justify-center py-6">
      {/* Tabs */}
      <div className="py-1 rounded-lg">
        <div className="border px-2 rounded-lg items-center gap-4 w-max py-2 flex">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`text-base px-6 py-2 rounded-md transition-colors ${
                activeTab === tab.value
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => handleTabChange(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        {tabs.map(
          (tab) =>
            activeTab === tab.value && (
              <div
                key={tab.value}
                className="flex items-center justify-center text-[#0c1073] flex-col py-8 pt-12"
              >
                <h2>
                  <span className="text-4xl font-semibold ">₹{tab.price}</span>
                  <span>{tab.period}</span>
                </h2>
                <div className="flex pt-6 items-center justify-center gap-6 mt-4">
                  <button
                    onClick={() => {
                      handlePayment(tab.value, tab.price);
                    }}
                    className="bg-gradient-to-r from-[#8d1db8] to-[#0c1073] text-white px-6 py-3 text-xl rounded-xl"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() =>
                      handletoAddcart(
                        "NewsLetter Package",
                        tab.price,
                        tab.value,
                        "newsletter"
                      )
                    }
                    className="text-black px-6 py-3 text-xl border-[#8d1db8] rounded-xl border"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
