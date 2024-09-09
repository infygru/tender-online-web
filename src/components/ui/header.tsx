import React from "react";

const Header = () => {
  return (
    <div>
      <div className="absolute z-50 top-6 right-0  px-2 lg:px-24 left-0">
        <div className="border  bg-white rounded-xl px-6 py-3  w-full">
          <div className="flex justify-between">
            <div className="text-2xl font-bold">
              <img src="/logo.png" className="h-8 lg:h-16" alt="" />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2">
                <img src="/whatsapp.png" alt="" className="w-8 h-8" />
                <h1 className="font-bold hidden lg:block text-[#454545] text-sm">
                  91761 33695
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <img src="/gmail.png" alt="" className="w-8 h-8" />
                <h1 className="font-bold hidden lg:block text-[#454545] text-sm">
                  sales@tenderonline.co.in
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
