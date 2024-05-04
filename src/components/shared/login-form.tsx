"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
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
    const { email, password } = formData;
    const newErrors = { ...errors };

    if (!email.trim()) {
      newErrors.email = "Email address is required";
      formIsValid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    try {
      // Make login API call
      const response = await fetch(
        "https://tender-online-h4lh.vercel.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }
      toast.success("Login successful");
      router.push("/tenders");
      // Handle successful login
      // Redirect or update state as needed
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({ ...errors, general: "Login failed. Please try again." });
    }
  };

  return (
    <div className="mt-7">
      <div className="bg-white border border-gray-200 rounded-3xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-12">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Dont have an account yet?{" "}
              <Link
                className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                href="/signup"
              >
                Sign up here
              </Link>
            </p>
          </div>
          <div className="mt-5">
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-8">
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-semibold text-sm mb-2 dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`py-3 px-4 block w-full border ${
                        errors.email ? "border-red-500" : "border-gray-200"
                      } rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
                      aria-describedby="email-error"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-2" id="email-error">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold mb-2 dark:text-white"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`py-3 px-4 block w-full border ${
                        errors.password ? "border-red-500" : "border-gray-200"
                      } rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
                      aria-describedby="password-error"
                    />
                    {errors.password && (
                      <p
                        className="text-xs text-red-600 mt-2"
                        id="password-error"
                      >
                        {errors.password}
                      </p>
                    )}
                  </div>
                </div>
                {/* End Form Group */}
                {/* Checkbox */}
                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ms-3">
                    <label
                      htmlFor="remember-me"
                      className="text-sm dark:text-white"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                {/* End Checkbox */}
                {errors.general && (
                  <p className="text-xs text-red-600 mt-2">{errors.general}</p>
                )}
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="  py-4 px-12  text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Sign in
                </button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
