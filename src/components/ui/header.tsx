import React from "react";

const Header = () => {
  return (
    <div>
      <div className="absolute top-6 right-0 px-2 lg:px-24 left-0">
        <div className="border rounded-full px-6 py-3  w-full">
          <div className="flex justify-between">
            <div className="text-2xl font-bold">Tender</div>
            <div className="flex space-x-4">
              <div className="text-lg font-semibold">Home</div>
              <div className="text-lg font-semibold">About</div>
              <div className="text-lg font-semibold">Contact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
