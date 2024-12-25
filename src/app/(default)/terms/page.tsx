import Footer from "@/components/shared/footer";
import Header from "@/components/ui/header";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 lg:pt-2">
      <Header />
      <div className="max-w-3xl mt-24 mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Terms & Conditions
        </h1>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Agreement to Terms
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            By using the Tender Online platform, you agree to comply with our
            terms and conditions. If you do not agree, please discontinue use of
            our services. We reserve the right to update these terms at any
            time, and continued use of the site signifies acceptance of any
            changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Services Provided
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Tender Online provides users with access to tender information,
            bidding assistance, and additional services such as vendor
            registration and profile management. Service availability is
            determined by your subscription plan, which outlines the scope and
            duration of access. Accessing or copying content without
            authorization is prohibited and may lead to account termination.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Subscription and Payment
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            All services provided by Tender Online are subscription-based.
            Subscription fees are billed upfront based on the selected plan
            (monthly, half-yearly, yearly, or customized plans). Subscribers are
            responsible for any applicable taxes. Payments are non-refundable
            unless specifically covered under our Refund Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Account Registration and Responsibility
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            You are responsible for securing your account credentials.
            Unauthorized access or activity under your account is your
            responsibility, and you agree to notify us immediately if you
            suspect any security issues.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Use of Services and Prohibited Activities
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our services are provided exclusively for informational and business
            purposes related to tender applications. You agree not to misuse our
            services by engaging in any unlawful, fraudulent, or unauthorized
            activities. Any use that contravenes these terms may result in
            suspension or termination of access to our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Modifications to Services
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Tender Online may add, modify, or remove any part of its services or
            platform features without prior notice. We aim to maintain service
            continuity, but reserve the right to discontinue certain offerings
            based on operational needs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Limitation of Liability
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Tender Online is not liable for any indirect, incidental, or
            consequential damages, including but not limited to loss of
            business, data, or financial loss, arising from the use or inability
            to use our platform.
          </p>
        </section>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            By using the services, you acknowledge and accept these terms and
            conditions.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
