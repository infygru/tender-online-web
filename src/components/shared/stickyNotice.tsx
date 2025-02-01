import React from "react";

const StickyNotice = () => {
  return (
    <div className="max-w-lg transform rotate-0 z-50">
      <div
        className="bg-white p-3 rounded-lg shadow-lg"
        style={{
          borderTop: "8px solid transparent",
          borderRadius: "0.5rem",
          backgroundImage:
            "linear-gradient(white, white), linear-gradient(to right, #3158D4, #7954F3, #BB46C1)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-8 bg-white rounded-full shadow-md" />
        </div>
        <p className="text-gray-800 font-medium text-sm leading-relaxed mt-2">
          Currently, we are only displaying construction-related tenders. For
          any other tenders, please feel free to contact us, and we'll be happy
          to assist you.
        </p>
      </div>
    </div>
  );
};

export default StickyNotice;
