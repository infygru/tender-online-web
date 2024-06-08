import React from "react";

const TenderHeader = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="flex items-center justify-between px-8 py-6">
      <div className="">
        <div className="text-2xl font-bold text-gray-800">Tenders</div>
        <div className="text-sm text-gray-500">
          Find the best tenders for your business
        </div>
      </div>
      <div className="">
        <button
          className={`px-4 py-2 rounded-xl text-sm font-semibold border ${
            isClicked ? "bg-blue-500 text-white" : ""
          }`}
          onClick={handleClick}
        >
          For You
        </button>
      </div>
    </div>
  );
};

export default TenderHeader;
