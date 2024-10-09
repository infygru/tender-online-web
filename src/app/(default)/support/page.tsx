"use client";
import React, { useState } from "react";
import Joi from "joi";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Footer from "@/components/shared/footer";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const formSchema = Joi.object({
  firstName: Joi.string().min(3).required().messages({
    "string.empty": "First Name is required",
    "string.min": "First Name must be at least 3 characters long",
  }),
  lastName: Joi.string().min(3).required().messages({
    "string.empty": "Last Name is required",
    "string.min": "Last Name must be at least 3 characters long",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email address",
    }),
  message: Joi.string().min(10).required().messages({
    "string.empty": "Message is required",
    "string.min": "Message must be at least 10 characters long",
  }),
});

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const postTodo = async (data: FormValues) => {
    await axios.post(
      "https://tender-online-h4lh.vercel.app/api/tender/contact",
      data
    );
  };
  const router = useRouter();
  // Mutations
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Message sent successfully");
      router.push("/");
    },
    onError: () => {
      toast.error("An error occurred. Please try again later.");
    },
  });

  // Handle form change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validation = formSchema.validate(formData, { abortEarly: false });
    if (validation.error) {
      const errorMessages: Partial<FormValues> = {};
      validation.error.details.forEach((detail) => {
        errorMessages[detail.path[0] as keyof FormValues] = detail.message;
      });
      setErrors(errorMessages);
      setIsSubmitting(false);
      return;
    }

    setErrors({});
    await mutation.mutateAsync(formData);
    setIsSubmitting(false);
  };

  return (
    <main>
      <div className="relative min-h-screen  bg-gray-100 dark:bg-gray-900">
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-12 mx-auto">
            <div>
              <p className="font-medium text-blue-500 dark:text-blue-400">
                Contact us
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
                Chat to our friendly team
              </h1>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                We’d love to hear from you. Please fill out this form or shoot
                us an email.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
              {/* Contact Info */}
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {/* Email, Phone, etc. */}
                {/* ... */}
              </div>

              {/* Contact Form */}
              <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                <form onSubmit={handleSubmit}>
                  <div className="-mx-2 md:items-center md:flex">
                    <div className="flex-1 px-2">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        First Name
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div className="flex-1 px-2 mt-4 md:mt-0">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Last Name
                      </label>
                      <input
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="johndoe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="w-full mt-4">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
