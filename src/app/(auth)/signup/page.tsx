"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { DialogOpen } from "@/components/shared/dialog-open";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Close } from "@radix-ui/react-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Signup = ({ setIsLogin }: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<any>({
    name: "",
    phone: "",
    email: "",
    msmeNo: "",
    gstNo: "",
    username: "",
    password: "",
    subscriptionPackage: "",
  });

  const [otp, setOtp] = useState<any>("");
  const [typeOtp, setTypeOtp] = useState<any>("");
  const [errors, setErrors] = useState<any>({
    name: "",
    phone: "",
    email: "",
    msmeNo: "",
    gstNo: "",
    username: "",
    password: "",
    subscriptionPackage: "",
    general: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validation
    let formIsValid = true;
    const newErrors = { ...errors };

    for (const key in formData) {
      if (!formData[key].trim()) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
        formIsValid = false;
      }
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }
    const realotp = otp?.result?.[0]?.otp;
    if (realotp !== typeOtp) {
      setErrors({
        ...errors,
        general: "otp is invalid",
      });
      return;
    }
    setLoading(true);
    try {
      // Make registration API call
      const response = await fetch(
        "http://localhost:3000/api/auth/create/account",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      toast.success("Registration successful");
      router.push("/tenders"); // Redirect to login page after successful registration
    } catch (error) {
      console.error("Registration failed:", error);
      setErrors({
        ...errors,
        general: "Registration failed. Please try again.",
      });
    }
    setLoading(false);
  };
  const handletootpverify = async () => {
    const realotp = otp?.result?.[0]?.otp;
    if (realotp !== typeOtp) {
      toast.error("otp is invalid");
      return;
    }

    toast.success("otp verified successfully");
  };

  console.log(otp, "otp");

  const handletosendemail = async () => {
    try {
      // Make registration API call
      const response = await fetch("http://localhost:3000/api/auth/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      setOtp(data);
      toast.success("otp sent successfully");
    } catch (error) {
      console.error("Registration failed:", error);
      setErrors({
        ...errors,
        general: "Registration failed. Please try again.",
      });
    }
  };

  return (
    <main className="flex items-center mt-6 justify-center">
      {loading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              <circle
                fill="#FF156D"
                stroke="#FF156D"
                stroke-width="15"
                r="15"
                cx="40"
                cy="65"
              >
                <animate
                  attributeName="cy"
                  calcMode="spline"
                  dur="2"
                  values="65;135;65;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.4"
                ></animate>
              </circle>
              <circle
                fill="#FF156D"
                stroke="#FF156D"
                stroke-width="15"
                r="15"
                cx="100"
                cy="65"
              >
                <animate
                  attributeName="cy"
                  calcMode="spline"
                  dur="2"
                  values="65;135;65;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.2"
                ></animate>
              </circle>
              <circle
                fill="#FF156D"
                stroke="#FF156D"
                stroke-width="15"
                r="15"
                cx="160"
                cy="65"
              >
                <animate
                  attributeName="cy"
                  calcMode="spline"
                  dur="2"
                  values="65;135;65;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="0"
                ></animate>
              </circle>
            </svg>
          </div>
        </div>
      )}
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm">
          <ScrollArea className="h-[70vh] min-h-auto w-full">
            <div className="p-8">
              <h1 className="text-2xl text-center font-bold mb-4">Register</h1>
              <form onSubmit={handleSubmit}>
                {/* Registration form fields */}
                {Object.keys(formData).map((key) => (
                  <div key={key} className="mb-4">
                    <label
                      htmlFor={key}
                      className="block font-semibold text-gray-700 mb-1"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    <input
                      type={key === "password" ? "password" : "text"}
                      id={key}
                      name={key}
                      placeholder={`Enter ${key}`}
                      value={formData[key]}
                      onChange={handleChange}
                      className={`w-full py-2 px-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 ${
                        errors[key] && "border-red-500"
                      }`}
                    />
                    {key === "email" && formData[key] && (
                      <div className="w-max">
                        <DialogOpen
                          button={
                            <div className="flex items-end justify-end">
                              <button
                                onClick={handletosendemail}
                                className="px-6 py-3 w-max rounded-xl border text-sm font-semibold bg-gray-100 mt-2"
                              >
                                send otp
                              </button>
                            </div>
                          }
                        >
                          <div className="">
                            <DialogHeader>
                              <DialogTitle>
                                Enter code sent on your email
                              </DialogTitle>
                              <DialogDescription>
                                {formData.email}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                  OTP
                                </Label>
                                <Input
                                  onChange={(e) => setTypeOtp(e.target.value)}
                                  placeholder="Enter OTP"
                                  type="text"
                                  id="otp"
                                  className="col-span-3"
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                      handletootpverify();
                                    }
                                  }}
                                />
                              </div>
                            </div>
                            <div className="flex items-center justify-between w-full">
                              <p className="mt-3 text-sm text-gray-500">
                                Haven’t received the OTP
                              </p>
                              <div onClick={handletosendemail}>
                                <span className="text-base cursor-pointer text-red-500 underline">
                                  Resend
                                </span>
                              </div>
                            </div>
                            <DialogFooter>
                              <Close
                                className="px-6 py-3 rounded-2xl border text-sm font-semibold bg-gray-100 mt-2"
                                onClick={handletootpverify}
                              >
                                Save changes
                              </Close>
                            </DialogFooter>
                          </div>
                        </DialogOpen>
                      </div>
                    )}
                    {errors[key] && (
                      <p className="text-sm text-red-500">{errors[key]}</p>
                    )}
                  </div>
                ))}
                {/* General error message */}
                {errors.general && (
                  <p className="text-sm text-red-500 mb-4">{errors.general}</p>
                )}
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Register
                </button>
              </form>
              <div className="text-sm flex items-center gap-2 mt-4">
                Already have an account? {/* <Link href="/login"> */}
                <button onClick={() => setIsLogin(true)}>
                  <div className="text-blue-500 hover:underline">Login</div>
                </button>
                {/* </Link> */}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
};

export default Signup;
