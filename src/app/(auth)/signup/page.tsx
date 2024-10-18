"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
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
import Joi from "joi";
import { Eye } from "lucide-react";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import axios from "axios";

const Signup = ({ setIsLogin }: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<any>({
    name: "",
    phone: "",
    email: "",
    companyName: "",
    password: "",
    confirmPassword: "",
  });

  const [otp, setOtp] = useState<any>("");
  const [typeOtp, setTypeOtp] = useState<any>("");
  const [errors, setErrors] = useState<any>({});
  const [industry, setIndustry] = useState<any>("");
  const [classification, setClassification] = useState<any>("");

  const [showPassword, setShowPassword] = useState<boolean>(false); // State for password visibility
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false); // State for confirm password visibility

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const schema = Joi.object({
      name: Joi.string().trim().required().messages({
        "string.empty": "Name is required",
      }),
      phone: Joi.string().trim().required().messages({
        "string.empty": "Phone number is required",
      }),
      email: Joi.string()
        .pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
        .required()
        .messages({
          "string.empty": "Email is required",
          "string.email": "Invalid email format",
        }),
      companyName: Joi.string().trim().required().messages({
        "string.empty": "Company name is required",
      }),
      password: Joi.string()
        .min(8)
        .max(20)
        .regex(/[a-zA-Z]/)
        .regex(/[0-9]/)
        .regex(/[!@#$%^&*]/)
        .required()
        .messages({
          "string.empty": "Password is required",
          "string.min": "Password must be at least 8 characters",
          "string.max": "Password must be at most 20 characters",
          "string.pattern.base":
            "Password must contain letters, numbers, and special characters",
        }),
      confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .required()
        .messages({
          "any.only": "Passwords do not match",
          "string.empty": "Confirm password is required",
        }),
    });

    return schema.validate(formData, { abortEarly: false });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    const { error } = validateForm();
    if (error) {
      const newErrors: any = {};
      error.details.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    const realotp = otp?.result?.[0]?.otp;
    // if (realotp !== typeOtp) {
    //   setErrors({
    //     ...errors,
    //     general: "OTP is invalid",
    //   });
    //   return;
    // }

    setLoading(true);
    try {
      const finaldata = {
        ...formData,
      };

      const response = await axios.post(
        "https://tender-online-h4lh.vercel.app/api/auth/create/account",
        {
          ...finaldata,
        }
      );
      const data = response.data;

      console.log(data, "data");

      if (data) {
        sessionStorage.setItem("accessToken", data.accessToken);
        toast.success("Registration successful");
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
      toast.error("OTP is invalid");
      return;
    }

    toast.success("OTP verified successfully");
  };

  const handletosendemail = async () => {
    try {
      const response = await fetch(
        "https://tender-online-h4lh.vercel.app/api/auth/otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: formData.email }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send OTP");
      }

      const data = await response.json();
      setOtp(data);
      toast.success("OTP sent successfully");
    } catch (error) {
      console.error("Failed to send OTP:", error);
      setErrors({
        ...errors,
        general: "Failed to send OTP. Please try again.",
      });
    }
  };

  return (
    <main className="flex pt-36 w-full items-center mt-6 justify-center">
      {loading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              <circle
                fill="#FF156D"
                stroke="#FF156D"
                strokeWidth="15"
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
                strokeWidth="15"
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
                strokeWidth="15"
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
      <div className="w-[80%]">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm">
          <ScrollArea className="lg:h-[58vh] xl:h-[73vh] h-[58vh] min-h-auto w-full">
            <div className="p-8">
              <h1 className="text-2xl text-center font-bold mb-4">Register</h1>
              <form onSubmit={handleSubmit}>
                {/* Registration form fields */}
                {Object.keys(formData).map((key) => (
                  <div key={key} className="mb-4 relative">
                    <input
                      type={
                        key === "password" && showPassword
                          ? "text"
                          : key === "confirmPassword" && showConfirmPassword
                          ? "text"
                          : key === "password" || key === "confirmPassword"
                          ? "password"
                          : "text"
                      }
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      placeholder={
                        ` Enter a ` + key.charAt(0).toUpperCase() + key.slice(1)
                      }
                      className={`block w-full border ${
                        errors[key] ? "border-red-500 " : "border-gray-300"
                      } rounded-md p-2 text-sm`}
                    />
                    {key === "email" && formData["email"] && (
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
                    {key === "password" && (
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-3 text-gray-500"
                      >
                        {showPassword ? <Eye size={20} /> : <EyeClosedIcon />}
                      </button>
                    )}
                    {key === "confirmPassword" && (
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute right-3 top-3 text-gray-500"
                      >
                        {showConfirmPassword ? (
                          <Eye size={20} />
                        ) : (
                          <EyeClosedIcon />
                        )}
                      </button>
                    )}
                    {errors[key] && (
                      <p className="text-red-500 text-sm">{errors[key]}</p>
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-md"
                >
                  Register
                </button>
              </form>
              {/* Additional UI elements can go here */}
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-neutral-400">
                Already have an account?{" "}
                <button
                  className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                  onClick={() => setIsLogin(true)}
                >
                  Login here
                </button>
              </p>
              <div className="flex items-end pt-6 w-full justify-end">
                <p>© TenderOnline 2024</p>
              </div>
            </div>
          </ScrollArea>
          <DialogFooter className="flex justify-center">
            <DialogOpen
              title="Login"
              description="Already have an account? Log in here."
              setIsLogin={setIsLogin}
            />
          </DialogFooter>
        </div>
      </div>
    </main>
  );
};

export default Signup;
