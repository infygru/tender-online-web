import Footer from "@/components/shared/footer";
import Header from "@/components/ui/header";
import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-16">
      <Header />
      <div className="max-w-3xl mx-auto  pt-24 ">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Refund Policy
        </h1>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Subscription Refunds
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Due to the nature of our services, Tender Online does not offer
            refunds once access to the platform has been granted. We recommend
            that users carefully review their selected plans and services before
            purchase.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Service-Specific Refund Policy
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Refunds may be considered in cases where technical or operational
            issues prevent you from accessing our services as described in the
            selected plan. Any refund request will be subject to a thorough
            investigation and may involve partial refunds, depending on the
            level of access received.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Procedure for Refund Requests
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            To initiate a refund request, please contact our support team at{" "}
            <a
              href="mailto:support@tenderonline.co.in"
              className="text-indigo-600 hover:underline"
            >
              support@tenderonline.co.in
            </a>{" "}
            with your account details and a description of the issue. Refund
            requests are typically processed within 15 business days. However,
            approval is not guaranteed and will be evaluated based on service
            records.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Non-Refundable Items
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>
              Payments made for add-on services, digital signatures, or any
              third-party products are non-refundable.
            </li>
            <li>
              Government fees or deposits related to vendor registration or
              bidding processes are excluded from our refund policy.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Contact for Support
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            For questions or concerns about refunds, reach out to us at{" "}
            <a
              href="mailto:support@tenderonline.co.in"
              className="text-indigo-600 hover:underline"
            >
              support@tenderonline.co.in
            </a>{" "}
            or by calling{" "}
            <a
              href="tel:+919176133695"
              className="text-indigo-600 hover:underline"
            >
              +91 91761 33695
            </a>{" "}
            during business hours (08:00-20:00 IST).
          </p>
        </section>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            By using our services, you acknowledge and agree to the terms
            outlined in this Refund Policy.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
