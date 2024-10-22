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
import { GoogleLogin } from "@react-oauth/google";
import { Close } from "@radix-ui/react-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Joi from "joi";
import { Eye } from "lucide-react";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
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

  const [placeholder, setPlaceholder] = useState<any>({
    name: "Full Name",
    phone: "Mobile Number",
    email: "Email Address",
    companyName: "Company Name",
    password: "Password",
    confirmPassword: "Confirm Password",
  });

  const [otp, setOtp] = useState<any>("");
  const [typeOtp, setTypeOtp] = useState<any>("");
  const [errors, setErrors] = useState<any>({});

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
      phone: Joi.string().trim().min(10).max(10).required().messages({
        "string.empty": "Phone number is required",
        "string.min": "Phone number must be 10 characters",
        "string.max": "Phone number must be 10 characters",
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

      if (data.code === 400) {
        toast.error(data.message);
        return;
      }

      if (data) {
        sessionStorage.setItem("accessToken", data.accessToken);
        toast.success("Registration successful");
        router.push("/tenders"); // Redirect to login page after successful registration
      }
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.");
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
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      getUserEmail(tokenResponse.access_token)
        .then(async (userInfo: any) => {
          console.log(userInfo, "userInfo");
          const email = userInfo.email; // Get the email
          const userName = userInfo.name || ""; // Get the user's name
          const phoneNumber = ""; // Get the phone number, if available
          const picture = userInfo.picture || "";

          console.log(`Email: ${email}`);
          console.log(`Name: ${userName}`);
          console.log(`Phone Number: ${phoneNumber}`);

          // Make login API call
          const response = await fetch(
            "https://tender-online-h4lh.vercel.app/api/auth/create/account/google",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email,
                isGoogleAuth: true,
                name: userName,
                phone: phoneNumber,
                picture: picture,
              }),
            }
          );

          if (!response.ok) {
            toast.error("Error fetching user information");
          }

          // Await the JSON response
          const data = await response.json();

          if (data.code === 404) {
            toast.error(data.message);
            return;
          }
          toast.success("Login successful");
          console.log(data.token, "data.token");

          sessionStorage.setItem("accessToken", data.accessToken);

          // Redirect or update state as needed
          router.push("/tenders");
        })
        .catch((error: any) => {
          console.error(error);
          toast.error("Error fetching user information");
        });
      console.log(tokenResponse);
    },
  });

  async function getUserEmail(accessToken: string): Promise<any> {
    const response = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching user email: ${response.statusText}`);
    }

    const data: any = await response.json();
    return data;
  }
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
                      maxLength={
                        key === "phone" ? 10 : key === "password" ? 20 : 50
                      }
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
                      placeholder={placeholder[key]}
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

              <div className="py-3 mt-0 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
                Or
              </div>
              <button
                onClick={() => login()}
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg  border-gray-200 bg-gray-100/50 text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                <svg
                  className="w-4 h-auto"
                  width={46}
                  height={47}
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign in with Google
              </button>

              {/* Additional UI elements can go here */}
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-neutral-400">
                Already a user ?
                <button
                  className="text-blue-600 decoration-2 ml-1 hover:underline font-medium dark:text-blue-500"
                  onClick={() => setIsLogin(true)}
                >
                  Sign-in
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
