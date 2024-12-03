import Footer from "@/components/shared/footer";
import Header from "@/components/ui/header";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-16">
      <Header />
      <div className="max-w-3xl pt-24 mx-auto p-8 ">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Privacy Policy
        </h1>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Information Collection and Use
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Tender Online collects personal and business information essential
            for account setup, subscription processing, and platform usage. This
            includes, but is not limited to, names, contact details, and company
            information. We also collect activity data to enhance platform
            performance and improve service delivery.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Information Sharing
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Your information is strictly used for providing and managing your
            services. We do not share your personal or business data with third
            parties, except when legally required or as necessary to prevent
            misuse of the platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Data Security and Retention
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Tender Online employs industry-standard security protocols to
            safeguard user data. Data collected will be retained only as long as
            necessary to fulfill the purposes outlined in this policy or as
            required by law. We recommend that users also take appropriate
            security precautions, such as using strong passwords and regularly
            monitoring account access.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. User Rights
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            You have the right to access, correct, or delete your personal
            information upon request, subject to our legal and operational
            requirements. For any privacy-related inquiries, please contact us
            at{" "}
            <a
              href="mailto:support@tenderonline.co.in"
              className="text-indigo-600 hover:underline"
            >
              support@tenderonline.co.in
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Third-Party Links
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our platform may contain links to third-party websites for
            convenience. We are not responsible for the privacy practices or
            content on these external sites. We advise you to review the privacy
            policies of any third-party sites you visit.
          </p>
        </section>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            By using our platform, you acknowledge and agree to the terms
            outlined in this Privacy Policy.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
