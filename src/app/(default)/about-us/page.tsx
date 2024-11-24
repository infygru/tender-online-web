"use client";
import Header from "@/components/ui/header";
import Link from "next/link";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    text: "Finding the right government tenders used to be overwhelming, but TenderOnline's platform changed everything for us. Their system is incredibly user-friendly and has saved us hours of searching. We’ve already secured new projects thanks to their tailored recommendations and couldn’t be happier with the results!",
    author: "Sathish Kumar S.",
    position: "Business Development Manager at CCTV Elite Vision, Chennai",
  },
  {
    text: "The team at TenderOnline has been instrumental in helping us diversify our revenue streams. Their online platform provides relevant tenders in real-time, so we never miss an opportunity. It’s given us a competitive edge and has been invaluable for our growth.",
    author: "Narendran",
    position: "Managing Director, Infygru",
  },
  {
    text: "Before using TenderOnline’s platform, we struggled to find tenders that aligned with our business. Their online service identifies tenders that are a perfect match, saving us time and effort. Thanks to them, we’ve won multiple contracts and opened new avenues for revenue!",
    author: "Sanjeev",
    position: "Business Operations Manager at B3DS",
  },
  {
    text: "We were new to government contracts, and TenderOnline's platform has been a game-changer. Their system automatically filters tenders based on our industry, making the search quick and precise. We’ve successfully bid on several projects we might have missed otherwise. Highly recommended!",
    author: "David K.",
    position: "Sales Director at BulkCorporate",
  },
  {
    text: "What sets TenderOnline apart is their intuitive platform and dedicated support team. With their help, we’ve been able to target the right government contracts without wasting time. The platform has become an essential tool for us in generating new revenue streams.",
    author: "Priya R.",
    position: "Operations Head at Healthieyoo",
  },
];

const Page = () => {
  return (
    <div>
      <Header />
      {/* Hero */}
      <div className="max-w-[85rem] pt-24 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="text-center flex pt-24 items-center justify-center gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-3xl lg:leading-tight dark:text-white">
              The People . The Government . The Business
            </h1>
            <p className="mt-3 text-sm max-w-xl ml-12 w-full text-gray-800 dark:text-neutral-400">
              Hassle free premium bidding experience to businesses in all
              categories and scale. We specialize in government tenders. Our
              main goal is to bring equal opportunity for businesses to compete
              in the government tendering arena.
            </p>
            {/* Buttons */}
            <div className="mt-7 justify-center flex gap-3 items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="py-3 px-0 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-blue-600 disabled:opacity-50 disabled:pointer-events-none">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 47.6667C37.9662 47.6667 47.6666 37.9662 47.6666 26C47.6666 14.0338 37.9662 4.33334 26 4.33334C14.0338 4.33334 4.33331 14.0338 4.33331 26C4.33331 37.9662 14.0338 47.6667 26 47.6667Z"
                        fill="#6183E4"
                      />
                      <path
                        d="M21.6667 17.3333L34.6667 26L21.6667 34.6667V17.3333Z"
                        fill="#F8FAFC"
                      />
                    </svg>
                    View Demo
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[903px]">
                  <div className="grid gap-4">
                    <iframe
                      width="853"
                      height="480"
                      src={`https://www.youtube.com/embed/rokGy0huYEA`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </div>
                  <DialogFooter>
                    <Button type="submit">Close</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Link
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-[#F7CE46] text-black shadow-sm hover:bg-[#F7CE46] focus:outline-none  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href="/support"
              >
                Pricing <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            {/* End Buttons */}
          </div>
          {/* End Col */}
          {/* <div className="relative ms-4">
            <img
              className="w-full lg:h-[600px] h-[400px] rounded-md"
              src="/aboutus.png"
              alt="Hero Image"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0" />

            <div className="absolute bottom-0 start-0">
              <svg
                className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900"
                width={630}
                height={451}
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x={531}
                  y={352}
                  width={99}
                  height={99}
                  fill="currentColor"
                />
                <rect
                  x={140}
                  y={352}
                  width={106}
                  height={99}
                  fill="currentColor"
                />
                <rect
                  x={482}
                  y={402}
                  width={64}
                  height={49}
                  fill="currentColor"
                />
                <rect
                  x={433}
                  y={402}
                  width={63}
                  height={49}
                  fill="currentColor"
                />
                <rect
                  x={384}
                  y={352}
                  width={49}
                  height={50}
                  fill="currentColor"
                />
                <rect
                  x={531}
                  y={328}
                  width={50}
                  height={50}
                  fill="currentColor"
                />
                <rect
                  x={99}
                  y={303}
                  width={49}
                  height={58}
                  fill="currentColor"
                />
                <rect
                  x={99}
                  y={352}
                  width={49}
                  height={50}
                  fill="currentColor"
                />
                <rect
                  x={99}
                  y={392}
                  width={49}
                  height={59}
                  fill="currentColor"
                />
                <rect
                  x={44}
                  y={402}
                  width={66}
                  height={49}
                  fill="currentColor"
                />
                <rect
                  x={234}
                  y={402}
                  width={62}
                  height={49}
                  fill="currentColor"
                />
                <rect
                  x={334}
                  y={303}
                  width={50}
                  height={49}
                  fill="currentColor"
                />
                <rect x={581} width={49} height={49} fill="currentColor" />
                <rect x={581} width={49} height={64} fill="currentColor" />
                <rect
                  x={482}
                  y={123}
                  width={49}
                  height={49}
                  fill="currentColor"
                />
                <rect
                  x={507}
                  y={124}
                  width={49}
                  height={24}
                  fill="currentColor"
                />
                <rect
                  x={531}
                  y={49}
                  width={99}
                  height={99}
                  fill="currentColor"
                />
              </svg>
            </div>
          </div> */}
        </div>
        {/* End Grid */}
      </div>

      <div className="max-w-[85rem] w-full text-balance pt-24 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <h2 className="text-xl text-center font-bold md:text-3xl dark:text-white">
            Birth Of The Vision
          </h2>

          <p className="text-lg text-gray-800 text-justify mx-auto max-w-[55rem] dark:text-neutral-200">
            The foundation of our company stems from the collaboration between
            two visionary minds: Dr. J. Sai Shajan, a successful serial
            entrepreneur, and K. Sanjay, an alumnus of IIM Kashipur. Their
            shared mission was to create a streamlined platform that could
            revolutionize the government tendering process. By leveraging their
            combined expertise, they aimed to bridge the gap between businesses
            and opportunities in public sector tenders, making it easier for
            companies to apply, compete, and grow.
          </p>
        </div>
      </div>
      <div className="max-w-[85rem] pt-24 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <h2 className="text-xl text-center font-bold md:text-3xl dark:text-white">
            Overcoming Challenges in Government Tenders
          </h2>

          <p className="text-lg text-gray-800 text-justify mx-auto max-w-[55rem] dark:text-neutral-200">
            While exploring government tenders to diversify revenue, we realized
            many businesses struggle with the complex requirements set by
            various departments. Companies often face high costs or profit
            sharing demands from intermediaries. These strict guidelines ensure
            only the best vendors qualify, but they discourage many capable
            firms from even attempting the process.
          </p>
        </div>
      </div>
      <div className="max-w-[85rem] pt-24 mx-auto px-4 text-justify sm:px-6 lg:px-8">
        <div className="space-y-3">
          <h2 className="text-xl text-center font-bold md:text-3xl dark:text-white">
            Creating Opportunities for Businesses
          </h2>

          <p className="text-lg text-gray-800 mx-auto text-justify max-w-[55rem] dark:text-neutral-200">
            Our goal is to bridge the gap between businesses and public sector
            tenders by providing a clear, systematic approach. With the right
            structure, companies can confidently bid and meet government
            standards. Through our platform, we empower firms to unlock new
            revenue streams while ensuring the government gains access to top
            tier service providers benefiting both businesses and communities
            alike.
          </p>
        </div>
      </div>

      <Testimonial />
      <div className="max-w-[85rem] pt-24 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="isolate flex lg:flex-row flex-col gap-5 items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="flex-1">
            <div className="mx-auto  text-start">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get in touch
              </h2>
              <p className="mt-2 text-sm leading-8 text-gray-600">
                Our friendly team would love to hear from you.
              </p>
            </div>
            <ContactPage />
          </div>
          <div className="flex-[0.8] space-y-4">
            <div className="space-y-2 flex items-start flex-col gap-3">
              <div className="flex items-center gap-3">
                <MapPin />
                <span className="text-xl font-bold">Tender Online</span>
              </div>
              <span className="text-gray-500 ml-8">
                Block No.5, 1st Floor, Door No.19, Plot.5/2, Pari Salai,
                Mogappair East, Chennai, Tamil Nadu 600037
              </span>
            </div>{" "}
            <hr className="border-t pt-4" />
            <div className="space-y-2 flex items-start flex-col gap-2">
              <div className="flex items-center gap-3">
                <PhoneCall />
                <span className="text-xl font-bold">
                  Call us (08:00 - 20:00)
                </span>
              </div>
              <span className="text-gray-500 ml-8">+91 91761 33695</span>
              <span className="text-gray-500 ml-8">+91 91761 33695</span>
            </div>{" "}
            <hr className="border-t pt-4" />
            <div className="space-y-2 flex items-start flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mail />
                <span className="text-xl font-bold">Mail Us</span>
              </div>
              <span className="text-gray-500 ml-8">sales@tenderonline.in</span>
            </div>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;

const Testimonial = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">
        What Our Clients Say
      </h2>
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="p-4 basis-0 lg:basis-1/2">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <p className="text-lg text-gray-700 h-[250px] italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="text-sm font-semibold text-gray-900">
                    — {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.position}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100" />
        <CarouselNext className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100" />
      </Carousel>
    </div>
  );
};

import Joi from "joi";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Footer from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Mail, MapPin, PhoneCall } from "lucide-react";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  type: string;
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
    type: "contacted",
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const postTodo = async (data: FormValues) => {
    await axios.post(
      "https://tender-online.vercel.app/api/tender/contact",
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
      <div className="relative  dark:bg-gray-900">
        {/* Contact Form */}
        <div className="p-4 py-6 rounded-lg  dark:bg-gray-800 md:p-8">
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
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
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
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
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
    </main>
  );
};

//  <div className="max-w-[85rem] pt-24 mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Features */}
//         <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//           {/* Grid */}
//           <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
//             <div>
//               <img
//                 className="rounded-xl"
//                 src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
//                 alt="Features Image"
//               />
//             </div>
//             {/* End Col */}
//             <div className="mt-5 sm:mt-10 lg:mt-0">
//               <div className="space-y-6 sm:space-y-8">
//                 {/* Title */}
//                 <div className="space-y-2 md:space-y-4">
//                   <h2 className="font-bold text-3xl lg:text-2xl text-gray-800 dark:text-neutral-200">
//                     How did our “Birth of the Vision” evolve into our Vision-
//                     The People, the Government, Business
//                   </h2>
//                   <p className="text-gray-500 dark:text-neutral-500">
//                     At Tenderonline, we have a team of efficient executives with
//                     experience in applying tenders listed by various government
//                     departments with diversified documentation requirement &
//                     processing. We aim to act as a catalyst for business
//                     entities striving to achieve greater scale, while also
//                     enhancing their products or services to benefit the public,
//                     with the assistance of government support.
//                   </p>
//                 </div>
//                 {/* End Title */}
//                 {/* List */}
//                 <ul className="space-y-2 sm:space-y-4">
//                   <li className="flex gap-x-3">
//                     <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
//                       <svg
//                         className="shrink-0 size-3.5"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width={24}
//                         height={24}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <polyline points="20 6 9 17 4 12" />
//                       </svg>
//                     </span>
//                     <div className="grow">
//                       <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
//                         <span className="font-bold">Easy &amp; fast</span>{" "}
//                         designing
//                       </span>
//                     </div>
//                   </li>
//                   <li className="flex gap-x-3">
//                     <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
//                       <svg
//                         className="shrink-0 size-3.5"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width={24}
//                         height={24}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <polyline points="20 6 9 17 4 12" />
//                       </svg>
//                     </span>
//                     <div className="grow">
//                       <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
//                         Powerful <span className="font-bold">features</span>
//                       </span>
//                     </div>
//                   </li>
//                   <li className="flex gap-x-3">
//                     <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
//                       <svg
//                         className="shrink-0 size-3.5"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width={24}
//                         height={24}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <polyline points="20 6 9 17 4 12" />
//                       </svg>
//                     </span>
//                     <div className="grow">
//                       <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
//                         User Experience Design
//                       </span>
//                     </div>
//                   </li>
//                 </ul>
//                 {/* End List */}
//               </div>
//             </div>
//             {/* End Col */}
//           </div>
//           {/* End Grid */}
//         </div>
//         {/* End Features */}
//       </div>
//       <div className="max-w-[85rem] pt-24 mx-auto px-4 sm:px-6 lg:px-8">
//         <div className=" px-2 py-10">
//           <div id="features" className="mx-auto max-w-6xl">
//             <p className="text-center  text-4xl font-semibold leading-7 text-primary-500">
//               Why Choose Us
//             </p>
//             <h2 className="text-center font-display pt-4 text-[#667085] text-sm font-bold tracking-tight ">
//               Reliable service provider committed to helping you achieve
//               procurement excellence.
//             </h2>
//             <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
//               <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
//                 <img
//                   src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
//                   alt=""
//                   className="mx-auto h-10 w-10"
//                 />
//                 <h3 className="my-3 font-display font-medium">
//                   Expertise and Experience
//                 </h3>
//                 <p className="mt-1.5 text-sm leading-6 text-secondary-500">
//                   With years of experience in the tendering and procurement
//                   industry, Tender Online has the expertise to deliver tailored
//                   solutions that meet your specific needs.
//                 </p>
//               </li>
//               <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
//                 <img
//                   src="https://www.svgrepo.com/show/530442/port-detection.svg"
//                   alt=""
//                   className="mx-auto h-10 w-10"
//                 />
//                 <h3 className="my-3 font-display font-medium">
//                   Comprehensive Solutions
//                 </h3>
//                 <p className="mt-1.5 text-sm leading-6 text-secondary-500">
//                   We offer a complete suite of tendering services, from bid
//                   management and document preparation to supplier evaluation and
//                   contract management, ensuring a seamless experience.
//                 </p>
//               </li>
//               <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
//                 <img
//                   src="https://www.svgrepo.com/show/530444/availability.svg"
//                   alt=""
//                   className="mx-auto h-10 w-10"
//                 />
//                 <h3 className="my-3 font-display font-medium">
//                   User-Friendly Platform
//                 </h3>
//                 <p className="mt-1.5 text-sm leading-6 text-secondary-500">
//                   Our intuitive platform is designed to be user-friendly, making
//                   it easy for you to manage tenders, track progress, and
//                   collaborate with stakeholders
//                 </p>
//               </li>
//               <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
//                 <a href="/pricing" className="group">
//                   <img
//                     src="https://www.svgrepo.com/show/530440/machine-vision.svg"
//                     alt=""
//                     className="mx-auto h-10 w-10"
//                   />
//                   <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
//                     Transparent Processes
//                   </h3>
//                   <p className="mt-1.5 text-sm leading-6 text-secondary-500">
//                     We prioritize transparency in all our processes, providing
//                     you with clear insights and detailed reports to make
//                     informed decisions.
//                   </p>
//                 </a>
//               </li>
//               <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
//                 <a href="/templates" className="group">
//                   <img
//                     src="https://www.svgrepo.com/show/530450/page-analysis.svg"
//                     alt=""
//                     className="mx-auto h-10 w-10"
//                   />
//                   <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
//                     Dedicated Support
//                   </h3>
//                   <p className="mt-1.5 text-sm leading-6 text-secondary-500">
//                     Our dedicated support team is available to assist you at
//                     every step, ensuring that your experience with Tender Online
//                     is smooth and efficient.
//                   </p>
//                 </a>
//               </li>
//               <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
//                 <a href="/download" className="group">
//                   <img
//                     src="https://www.svgrepo.com/show/530453/mail-reception.svg"
//                     alt=""
//                     className="mx-auto h-10 w-10"
//                   />
//                   <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
//                     Cost-Effective
//                   </h3>
//                   <p className="mt-1.5 text-sm leading-6 text-secondary-500">
//                     Our solutions are designed to save you time and money,
//                     improving your procurement efficiency and reducing
//                     operational costs.
//                   </p>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
