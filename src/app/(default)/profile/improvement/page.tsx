"use client";
import React, { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [message, setMessage] = useState("");
  const [storedMessage, setStoredMessage] = useState<string | null>(null);

  const handleSaveMessage = () => {
    if (message.trim()) {
      setStoredMessage(message);
      setMessage(""); // Clear textarea after storing
    }

    // Store message in api
    const response: any = fetch("https://tender-online.vercel.app/api/auth/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      toast.error("Failed to store message");
    }

    toast.success("Message stored successfully");
  };

  return (
    <div className="p-6 w-full min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-3xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">
          Room for Improvement
        </h2>

        {/* messsage senatnce */}
        <p className="text-gray-500 text-center">
          We would love to hear your feedback on how we can improve our services
        </p>

        {/* Textarea for message input */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here..."
          className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          rows={4}
        ></textarea>

        {/* Button to store message */}
        <button
          onClick={handleSaveMessage}
          className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-all"
        >
          Send Feedback
        </button>

        {/* Display the stored message */}
        {storedMessage && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg shadow-sm">
            <strong>Stored Message:</strong>
            <p>{storedMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
