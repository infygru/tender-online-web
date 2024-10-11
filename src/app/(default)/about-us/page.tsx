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
const page = () => {
  return (
    <div>
      <Header />
      {/* Hero */}
      <div className="max-w-[85rem] pt-24 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-2xl lg:leading-tight dark:text-white">
              The People . The Government . The Business
            </h1>
            <p className="mt-3 text-sm text-gray-800 dark:text-neutral-400">
              Hassle free premium bidding experience to businesses in all
              categories and scale. We specialize in government tenders. Our
              main goal is to bring equal opportunity for businesses to compete
              in the government tendering arena.
            </p>
            {/* Buttons */}
            <div className="mt-7  flex gap-3 items-center">
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
                Contact sales team
              </Link>
            </div>
            {/* End Buttons */}
          </div>
          {/* End Col */}
          <div className="relative ms-4">
            <img
              className="w-full lg:h-[600px] h-[400px] rounded-md"
              src="/aboutus.png"
              alt="Hero Image"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0" />
            {/* SVG*/}
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
            {/* End SVG*/}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>

      <div className="max-w-[85rem] pt-24 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <h2 className="text-xl text-center font-bold md:text-3xl dark:text-white">
            Birth Of The Vision
          </h2>

          <p className="text-lg text-gray-800 mx-auto max-w-[55rem] dark:text-neutral-200">
            The core of the company and the vision was conceptualized inside of
            two minds - one a successful serial entrepreneur Dr. J.Sai Shajan
            and another an alumnus of IIM Kashipur, K.Sanjay.
            <br />
            <br />
            <br />
            After Building resources and experience in our respective fields we
            wanted to apply for government tenders. It had enormous potential
            for us and we were also happy that our resources were going to be
            spent for the people. But the complex processing and irregular
            handling of the projects in government organization was a
            restricting factor. Consulting with
            <br />
            <br />
            <br />
            many other business owners and contractors in our circle we were
            able to analyze that many people are facing the same issues. As a
            result huge amounts of resources are being restricted/ withheld from
            the people by this complexity.
          </p>
        </div>
      </div>

      <div className="max-w-[85rem] pt-24 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div>
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
                alt="Features Image"
              />
            </div>
            {/* End Col */}
            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Title */}
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-2xl text-gray-800 dark:text-neutral-200">
                    How did our “Birth of the Vision” evolve into our Vision-
                    The People, the Government, Business
                  </h2>
                  <p className="text-gray-500 dark:text-neutral-500">
                    At Tenderonline, we have a team of efficient executives with
                    experience in applying tenders listed by various government
                    departments with diversified documentation requirement &
                    processing. We aim to act as a catalyst for business
                    entities striving to achieve greater scale, while also
                    enhancing their products or services to benefit the public,
                    with the assistance of government support.
                  </p>
                </div>
                {/* End Title */}
                {/* List */}
                <ul className="space-y-2 sm:space-y-4">
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        <span className="font-bold">Easy &amp; fast</span>{" "}
                        designing
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        Powerful <span className="font-bold">features</span>
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        User Experience Design
                      </span>
                    </div>
                  </li>
                </ul>
                {/* End List */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
      </div>
      <div className="max-w-[85rem] pt-24 mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" px-2 py-10">
          <div id="features" className="mx-auto max-w-6xl">
            <p className="text-center  text-4xl font-semibold leading-7 text-primary-500">
              Why Choose Us
            </p>
            <h2 className="text-center font-display pt-4 text-[#667085] text-sm font-bold tracking-tight ">
              Reliable service provider committed to helping you achieve
              procurement excellence.
            </h2>
            <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
              <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                <img
                  src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
                  alt=""
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium">
                  Expertise and Experience
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  With years of experience in the tendering and procurement
                  industry, Tender Online has the expertise to deliver tailored
                  solutions that meet your specific needs.
                </p>
              </li>
              <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                <img
                  src="https://www.svgrepo.com/show/530442/port-detection.svg"
                  alt=""
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium">
                  Comprehensive Solutions
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  We offer a complete suite of tendering services, from bid
                  management and document preparation to supplier evaluation and
                  contract management, ensuring a seamless experience.
                </p>
              </li>
              <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                <img
                  src="https://www.svgrepo.com/show/530444/availability.svg"
                  alt=""
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium">
                  User-Friendly Platform
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  Our intuitive platform is designed to be user-friendly, making
                  it easy for you to manage tenders, track progress, and
                  collaborate with stakeholders
                </p>
              </li>
              <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                <a href="/pricing" className="group">
                  <img
                    src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                    alt=""
                    className="mx-auto h-10 w-10"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    Transparent Processes
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    We prioritize transparency in all our processes, providing
                    you with clear insights and detailed reports to make
                    informed decisions.
                  </p>
                </a>
              </li>
              <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                <a href="/templates" className="group">
                  <img
                    src="https://www.svgrepo.com/show/530450/page-analysis.svg"
                    alt=""
                    className="mx-auto h-10 w-10"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    Dedicated Support
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Our dedicated support team is available to assist you at
                    every step, ensuring that your experience with Tender Online
                    is smooth and efficient.
                  </p>
                </a>
              </li>
              <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                <a href="/download" className="group">
                  <img
                    src="https://www.svgrepo.com/show/530453/mail-reception.svg"
                    alt=""
                    className="mx-auto h-10 w-10"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    Cost-Effective
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Our solutions are designed to save you time and money,
                    improving your procurement efficiency and reducing
                    operational costs.
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        {/* Testmonial */}
        <div className="">
          <h1 className="text-3xl font-bold text-center py-6">
            Don’t just take our words
          </h1>
          <div className="flex px-4">
            <div className="w-1/2">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img
                    className="h-24 w-full object-cover md:h-full md:w-44"
                    src="https://randomuser.me/api/portraits/women/91.jpg"
                    alt="User profile picture"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    <svg
                      width="113"
                      height="18"
                      viewBox="0 0 113 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.54817 0.553977L12.0451 5.63008L17.6269 6.44427C17.6977 6.4548 17.7642 6.48491 17.8189 6.53119C17.8735 6.57747 17.9142 6.63809 17.9362 6.70623C17.9583 6.77436 17.9609 6.8473 17.9438 6.91684C17.9266 6.98638 17.8904 7.04974 17.8392 7.09981L13.801 11.0501L14.7544 16.6292C14.7667 16.6997 14.759 16.7723 14.7321 16.8387C14.7053 16.905 14.6604 16.9625 14.6025 17.0047C14.5446 17.0468 14.4761 17.0719 14.4047 17.0771C14.3333 17.0823 14.2619 17.0674 14.1985 17.034L9.20575 14.4005L4.21297 17.0348C4.14966 17.0682 4.07824 17.0833 4.00681 17.0782C3.93539 17.0731 3.86683 17.048 3.80893 17.0059C3.75103 16.9638 3.70611 16.9062 3.67927 16.8398C3.65243 16.7735 3.64476 16.7009 3.65711 16.6303L4.61055 11.0501L0.571194 7.09981C0.519977 7.04974 0.483754 6.98638 0.466604 6.91684C0.449454 6.8473 0.452059 6.77436 0.474125 6.70623C0.496191 6.63809 0.536842 6.57747 0.5915 6.53119C0.646157 6.48491 0.71265 6.4548 0.783491 6.44427L6.36523 5.63008L8.86334 0.553977C8.89449 0.489652 8.94313 0.435404 9.00369 0.397446C9.06425 0.359488 9.13428 0.339355 9.20575 0.339355C9.27722 0.339355 9.34725 0.359488 9.40781 0.397446C9.46837 0.435404 9.51701 0.489652 9.54817 0.553977Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M33.1724 0.553977L35.6694 5.63008L41.2511 6.44427C41.322 6.4548 41.3885 6.48491 41.4431 6.53119C41.4978 6.57747 41.5384 6.63809 41.5605 6.70623C41.5826 6.77436 41.5852 6.8473 41.568 6.91684C41.5509 6.98638 41.5147 7.04974 41.4634 7.09981L37.4252 11.0501L38.3787 16.6292C38.3909 16.6997 38.3832 16.7723 38.3564 16.8387C38.3295 16.905 38.2846 16.9625 38.2268 17.0047C38.1689 17.0468 38.1004 17.0719 38.029 17.0771C37.9576 17.0823 37.8862 17.0674 37.8228 17.034L32.83 14.4005L27.8372 17.0348C27.7739 17.0682 27.7025 17.0833 27.6311 17.0782C27.5597 17.0731 27.4911 17.048 27.4332 17.0059C27.3753 16.9638 27.3304 16.9062 27.3035 16.8398C27.2767 16.7735 27.269 16.7009 27.2814 16.6303L28.2348 11.0501L24.1955 7.09981C24.1442 7.04974 24.108 6.98638 24.0909 6.91684C24.0737 6.8473 24.0763 6.77436 24.0984 6.70623C24.1205 6.63809 24.1611 6.57747 24.2158 6.53119C24.2704 6.48491 24.3369 6.4548 24.4078 6.44427L29.9895 5.63008L32.4876 0.553977C32.5188 0.489652 32.5674 0.435404 32.628 0.397446C32.6885 0.359488 32.7585 0.339355 32.83 0.339355C32.9015 0.339355 32.9715 0.359488 33.0321 0.397446C33.0926 0.435404 33.1413 0.489652 33.1724 0.553977Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M56.7968 0.553977L59.2938 5.63008L64.8755 6.44427C64.9464 6.4548 65.0129 6.48491 65.0675 6.53119C65.1222 6.57747 65.1628 6.63809 65.1849 6.70623C65.207 6.77436 65.2096 6.8473 65.1924 6.91684C65.1753 6.98638 65.139 7.04974 65.0878 7.09981L61.0496 11.0501L62.003 16.6292C62.0153 16.6997 62.0076 16.7723 61.9808 16.8387C61.9539 16.905 61.909 16.9625 61.8512 17.0047C61.7933 17.0468 61.7248 17.0719 61.6534 17.0771C61.582 17.0823 61.5105 17.0674 61.4472 17.034L56.4544 14.4005L51.4616 17.0348C51.3983 17.0682 51.3269 17.0833 51.2555 17.0782C51.184 17.0731 51.1155 17.048 51.0576 17.0059C50.9997 16.9638 50.9548 16.9062 50.9279 16.8398C50.9011 16.7735 50.8934 16.7009 50.9058 16.6303L51.8592 11.0501L47.8199 7.09981C47.7686 7.04974 47.7324 6.98638 47.7153 6.91684C47.6981 6.8473 47.7007 6.77436 47.7228 6.70623C47.7448 6.63809 47.7855 6.57747 47.8402 6.53119C47.8948 6.48491 47.9613 6.4548 48.0321 6.44427L53.6139 5.63008L56.112 0.553977C56.1431 0.489652 56.1918 0.435404 56.2524 0.397446C56.3129 0.359488 56.3829 0.339355 56.4544 0.339355C56.5259 0.339355 56.5959 0.359488 56.6565 0.397446C56.717 0.435404 56.7657 0.489652 56.7968 0.553977Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M80.4212 0.553977L82.9181 5.63008L88.4999 6.44427C88.5707 6.4548 88.6372 6.48491 88.6919 6.53119C88.7465 6.57747 88.7872 6.63809 88.8093 6.70623C88.8313 6.77436 88.8339 6.8473 88.8168 6.91684C88.7996 6.98638 88.7634 7.04974 88.7122 7.09981L84.674 11.0501L85.6274 16.6292C85.6397 16.6997 85.632 16.7723 85.6051 16.8387C85.5783 16.905 85.5334 16.9625 85.4755 17.0047C85.4176 17.0468 85.3491 17.0719 85.2777 17.0771C85.2063 17.0823 85.1349 17.0674 85.0716 17.034L80.0788 14.4005L75.086 17.0348C75.0227 17.0682 74.9513 17.0833 74.8798 17.0782C74.8084 17.0731 74.7398 17.048 74.6819 17.0059C74.624 16.9638 74.5791 16.9062 74.5523 16.8398C74.5254 16.7735 74.5178 16.7009 74.5301 16.6303L75.4836 11.0501L71.4442 7.09981C71.393 7.04974 71.3568 6.98638 71.3396 6.91684C71.3225 6.8473 71.3251 6.77436 71.3471 6.70623C71.3692 6.63809 71.4099 6.57747 71.4645 6.53119C71.5192 6.48491 71.5857 6.4548 71.6565 6.44427L77.2382 5.63008L79.7364 0.553977C79.7675 0.489652 79.8162 0.435404 79.8767 0.397446C79.9373 0.359488 80.0073 0.339355 80.0788 0.339355C80.1502 0.339355 80.2203 0.359488 80.2808 0.397446C80.3414 0.435404 80.39 0.489652 80.4212 0.553977Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M104.046 0.553977L106.543 5.63008L112.124 6.44427C112.195 6.4548 112.262 6.48491 112.316 6.53119C112.371 6.57747 112.412 6.63809 112.434 6.70623C112.456 6.77436 112.458 6.8473 112.441 6.91684C112.424 6.98638 112.388 7.04974 112.337 7.09981L108.298 11.0501L109.252 16.6292C109.264 16.6997 109.256 16.7723 109.23 16.8387C109.203 16.905 109.158 16.9625 109.1 17.0047C109.042 17.0468 108.974 17.0719 108.902 17.0771C108.831 17.0823 108.759 17.0674 108.696 17.034L103.703 14.4005L98.7104 17.0348C98.6471 17.0682 98.5756 17.0833 98.5042 17.0782C98.4328 17.0731 98.3642 17.048 98.3063 17.0059C98.2484 16.9638 98.2035 16.9062 98.1767 16.8398C98.1498 16.7735 98.1422 16.7009 98.1545 16.6303L99.108 11.0501L95.0686 7.09981C95.0174 7.04974 94.9812 6.98638 94.964 6.91684C94.9469 6.8473 94.9495 6.77436 94.9715 6.70623C94.9936 6.63809 95.0342 6.57747 95.0889 6.53119C95.1436 6.48491 95.2101 6.4548 95.2809 6.44427L100.863 5.63008L103.361 0.553977C103.392 0.489652 103.441 0.435404 103.501 0.397446C103.562 0.359488 103.632 0.339355 103.703 0.339355C103.775 0.339355 103.845 0.359488 103.905 0.397446C103.966 0.435404 104.014 0.489652 104.046 0.553977Z"
                        fill="#2563EB"
                      />
                    </svg>
                  </div>
                  <p className="mt-2 text-black font-bold">
                    "We love Landingfolio! Our designers were using it for their
                    projects, so we already knew what kind of design they want."
                  </p>
                  <div className="mt-4">
                    <span className="text-slate-900 font-bold">
                      Sarah Johnson
                    </span>
                    <span className="text-slate-600 text-sm ml-2">
                      CEO, TechInnovate
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img
                    className="h-24 w-full object-cover md:h-full md:w-44"
                    src="https://randomuser.me/api/portraits/women/91.jpg"
                    alt="User profile picture"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    <svg
                      width="113"
                      height="18"
                      viewBox="0 0 113 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.54817 0.553977L12.0451 5.63008L17.6269 6.44427C17.6977 6.4548 17.7642 6.48491 17.8189 6.53119C17.8735 6.57747 17.9142 6.63809 17.9362 6.70623C17.9583 6.77436 17.9609 6.8473 17.9438 6.91684C17.9266 6.98638 17.8904 7.04974 17.8392 7.09981L13.801 11.0501L14.7544 16.6292C14.7667 16.6997 14.759 16.7723 14.7321 16.8387C14.7053 16.905 14.6604 16.9625 14.6025 17.0047C14.5446 17.0468 14.4761 17.0719 14.4047 17.0771C14.3333 17.0823 14.2619 17.0674 14.1985 17.034L9.20575 14.4005L4.21297 17.0348C4.14966 17.0682 4.07824 17.0833 4.00681 17.0782C3.93539 17.0731 3.86683 17.048 3.80893 17.0059C3.75103 16.9638 3.70611 16.9062 3.67927 16.8398C3.65243 16.7735 3.64476 16.7009 3.65711 16.6303L4.61055 11.0501L0.571194 7.09981C0.519977 7.04974 0.483754 6.98638 0.466604 6.91684C0.449454 6.8473 0.452059 6.77436 0.474125 6.70623C0.496191 6.63809 0.536842 6.57747 0.5915 6.53119C0.646157 6.48491 0.71265 6.4548 0.783491 6.44427L6.36523 5.63008L8.86334 0.553977C8.89449 0.489652 8.94313 0.435404 9.00369 0.397446C9.06425 0.359488 9.13428 0.339355 9.20575 0.339355C9.27722 0.339355 9.34725 0.359488 9.40781 0.397446C9.46837 0.435404 9.51701 0.489652 9.54817 0.553977Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M33.1724 0.553977L35.6694 5.63008L41.2511 6.44427C41.322 6.4548 41.3885 6.48491 41.4431 6.53119C41.4978 6.57747 41.5384 6.63809 41.5605 6.70623C41.5826 6.77436 41.5852 6.8473 41.568 6.91684C41.5509 6.98638 41.5147 7.04974 41.4634 7.09981L37.4252 11.0501L38.3787 16.6292C38.3909 16.6997 38.3832 16.7723 38.3564 16.8387C38.3295 16.905 38.2846 16.9625 38.2268 17.0047C38.1689 17.0468 38.1004 17.0719 38.029 17.0771C37.9576 17.0823 37.8862 17.0674 37.8228 17.034L32.83 14.4005L27.8372 17.0348C27.7739 17.0682 27.7025 17.0833 27.6311 17.0782C27.5597 17.0731 27.4911 17.048 27.4332 17.0059C27.3753 16.9638 27.3304 16.9062 27.3035 16.8398C27.2767 16.7735 27.269 16.7009 27.2814 16.6303L28.2348 11.0501L24.1955 7.09981C24.1442 7.04974 24.108 6.98638 24.0909 6.91684C24.0737 6.8473 24.0763 6.77436 24.0984 6.70623C24.1205 6.63809 24.1611 6.57747 24.2158 6.53119C24.2704 6.48491 24.3369 6.4548 24.4078 6.44427L29.9895 5.63008L32.4876 0.553977C32.5188 0.489652 32.5674 0.435404 32.628 0.397446C32.6885 0.359488 32.7585 0.339355 32.83 0.339355C32.9015 0.339355 32.9715 0.359488 33.0321 0.397446C33.0926 0.435404 33.1413 0.489652 33.1724 0.553977Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M56.7968 0.553977L59.2938 5.63008L64.8755 6.44427C64.9464 6.4548 65.0129 6.48491 65.0675 6.53119C65.1222 6.57747 65.1628 6.63809 65.1849 6.70623C65.207 6.77436 65.2096 6.8473 65.1924 6.91684C65.1753 6.98638 65.139 7.04974 65.0878 7.09981L61.0496 11.0501L62.003 16.6292C62.0153 16.6997 62.0076 16.7723 61.9808 16.8387C61.9539 16.905 61.909 16.9625 61.8512 17.0047C61.7933 17.0468 61.7248 17.0719 61.6534 17.0771C61.582 17.0823 61.5105 17.0674 61.4472 17.034L56.4544 14.4005L51.4616 17.0348C51.3983 17.0682 51.3269 17.0833 51.2555 17.0782C51.184 17.0731 51.1155 17.048 51.0576 17.0059C50.9997 16.9638 50.9548 16.9062 50.9279 16.8398C50.9011 16.7735 50.8934 16.7009 50.9058 16.6303L51.8592 11.0501L47.8199 7.09981C47.7686 7.04974 47.7324 6.98638 47.7153 6.91684C47.6981 6.8473 47.7007 6.77436 47.7228 6.70623C47.7448 6.63809 47.7855 6.57747 47.8402 6.53119C47.8948 6.48491 47.9613 6.4548 48.0321 6.44427L53.6139 5.63008L56.112 0.553977C56.1431 0.489652 56.1918 0.435404 56.2524 0.397446C56.3129 0.359488 56.3829 0.339355 56.4544 0.339355C56.5259 0.339355 56.5959 0.359488 56.6565 0.397446C56.717 0.435404 56.7657 0.489652 56.7968 0.553977Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M80.4212 0.553977L82.9181 5.63008L88.4999 6.44427C88.5707 6.4548 88.6372 6.48491 88.6919 6.53119C88.7465 6.57747 88.7872 6.63809 88.8093 6.70623C88.8313 6.77436 88.8339 6.8473 88.8168 6.91684C88.7996 6.98638 88.7634 7.04974 88.7122 7.09981L84.674 11.0501L85.6274 16.6292C85.6397 16.6997 85.632 16.7723 85.6051 16.8387C85.5783 16.905 85.5334 16.9625 85.4755 17.0047C85.4176 17.0468 85.3491 17.0719 85.2777 17.0771C85.2063 17.0823 85.1349 17.0674 85.0716 17.034L80.0788 14.4005L75.086 17.0348C75.0227 17.0682 74.9513 17.0833 74.8798 17.0782C74.8084 17.0731 74.7398 17.048 74.6819 17.0059C74.624 16.9638 74.5791 16.9062 74.5523 16.8398C74.5254 16.7735 74.5178 16.7009 74.5301 16.6303L75.4836 11.0501L71.4442 7.09981C71.393 7.04974 71.3568 6.98638 71.3396 6.91684C71.3225 6.8473 71.3251 6.77436 71.3471 6.70623C71.3692 6.63809 71.4099 6.57747 71.4645 6.53119C71.5192 6.48491 71.5857 6.4548 71.6565 6.44427L77.2382 5.63008L79.7364 0.553977C79.7675 0.489652 79.8162 0.435404 79.8767 0.397446C79.9373 0.359488 80.0073 0.339355 80.0788 0.339355C80.1502 0.339355 80.2203 0.359488 80.2808 0.397446C80.3414 0.435404 80.39 0.489652 80.4212 0.553977Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M104.046 0.553977L106.543 5.63008L112.124 6.44427C112.195 6.4548 112.262 6.48491 112.316 6.53119C112.371 6.57747 112.412 6.63809 112.434 6.70623C112.456 6.77436 112.458 6.8473 112.441 6.91684C112.424 6.98638 112.388 7.04974 112.337 7.09981L108.298 11.0501L109.252 16.6292C109.264 16.6997 109.256 16.7723 109.23 16.8387C109.203 16.905 109.158 16.9625 109.1 17.0047C109.042 17.0468 108.974 17.0719 108.902 17.0771C108.831 17.0823 108.759 17.0674 108.696 17.034L103.703 14.4005L98.7104 17.0348C98.6471 17.0682 98.5756 17.0833 98.5042 17.0782C98.4328 17.0731 98.3642 17.048 98.3063 17.0059C98.2484 16.9638 98.2035 16.9062 98.1767 16.8398C98.1498 16.7735 98.1422 16.7009 98.1545 16.6303L99.108 11.0501L95.0686 7.09981C95.0174 7.04974 94.9812 6.98638 94.964 6.91684C94.9469 6.8473 94.9495 6.77436 94.9715 6.70623C94.9936 6.63809 95.0342 6.57747 95.0889 6.53119C95.1436 6.48491 95.2101 6.4548 95.2809 6.44427L100.863 5.63008L103.361 0.553977C103.392 0.489652 103.441 0.435404 103.501 0.397446C103.562 0.359488 103.632 0.339355 103.703 0.339355C103.775 0.339355 103.845 0.359488 103.905 0.397446C103.966 0.435404 104.014 0.489652 104.046 0.553977Z"
                        fill="#2563EB"
                      />
                    </svg>
                  </div>
                  <p className="mt-2 text-black font-bold">
                    "We love Landingfolio! Our designers were using it for their
                    projects, so we already knew what kind of design they want."
                  </p>
                  <div className="mt-4">
                    <span className="text-slate-900 font-bold">
                      Sarah Johnson
                    </span>
                    <span className="text-slate-600 text-sm ml-2">
                      CEO, TechInnovate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <div className="flex-[0.8]">
            <img
              className="rounded-3xl h-full w-full"
              src="https://plus.unsplash.com/premium_photo-1689620817504-2f77cbddf142?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
import Joi from "joi";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Footer from "@/components/shared/footer";
import { Button } from "@/components/ui/button";

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
      <div className="relative  dark:bg-gray-900">
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
