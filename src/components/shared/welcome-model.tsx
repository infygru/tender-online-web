import React from "react";
import { useRouter } from "next/navigation";

interface ModalProps {
  clientId: string;
  onClose: () => void;
}

const WelcomeModal: React.FC<ModalProps> = ({ clientId, onClose }) => {
  const router = useRouter();

  const handleClick = (path: string) => {
    localStorage.setItem("path", path);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-75 z-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Welcome {clientId}
        </h2>
        <p className="mb-6 text-lg text-center">
          Kindly choose your requirement:
        </p>
        <div className="flex flex-col space-y-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out"
            onClick={() => handleClick("state")}
          >
            State Govt Tenders
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out"
            onClick={() => handleClick("central")}
          >
            Central Ministry/Agency Tenders
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
