"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "sonner";

// Define types for form data
type ChangePasswordFormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

// Validation schema using Yup
const schema = yup.object().shape({
  currentPassword: yup.string().required("Current password is required"),
  newPassword: yup
    .string()
    .min(8, "New password must be at least 8 characters")
    .required("New password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), undefined], "Passwords must match")
    .required("Please confirm your new password"),
});

const ChangePassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChangePasswordFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ChangePasswordFormData> = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Placeholder for your password change API call
      // await changePasswordAPI(data);
      const response = await axios.post(
        "https://tender-online.vercel.app/api/auth/change-password",
        {
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        }
      );

      if (response.status !== 200) {
        toast.error("Failed to update password");
      }
      console.log(response.data);

      toast.success("Password updated successfully");

      setSuccess(true);
      setLoading(false);
    } catch (error: any) {
      setError("Failed to update password. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 py-8 lg:my-24 bg-white border h-full w-full rounded-3xl">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Change Password</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col">
          <label
            htmlFor="currentPassword"
            className="text-gray-700 font-medium"
          >
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            {...register("currentPassword")}
            className={`mt-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
              errors.currentPassword ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.currentPassword && (
            <span className="text-red-500 text-sm mt-1">
              {errors.currentPassword.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="newPassword" className="text-gray-700 font-medium">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            {...register("newPassword")}
            className={`mt-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
              errors.newPassword ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.newPassword && (
            <span className="text-red-500 text-sm mt-1">
              {errors.newPassword.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="confirmPassword"
            className="text-gray-700 font-medium"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
            className={`mt-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && (
          <p className="text-green-500 text-sm">
            Password updated successfully!
          </p>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Updating..." : "Change Password"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
