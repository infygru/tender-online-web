import Footer from "@/components/shared/footer";
import Header from "@/components/ui/header";
import React from "react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-12">
      <Header />
      <div className="max-w-3xl mx-auto p-8 pt-24 ">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Cookie Policy
        </h1>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Purpose of Cookies
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Cookies are small data files stored on your device to enhance your
            experience on the Tender Online platform. We use cookies to improve
            website functionality, streamline user navigation, and remember your
            preferences for a seamless experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Types of Cookies We Use
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>
              <strong className="font-semibold">Essential Cookies:</strong>{" "}
              These cookies are crucial for the website’s core functionality and
              ensure secure login and smooth page navigation.
            </li>
            <li>
              <strong className="font-semibold">Analytical Cookies:</strong>{" "}
              These help us track user interaction, gather data on page views,
              and improve the platform based on user patterns.
            </li>
            <li>
              <strong className="font-semibold">Preference Cookies:</strong>{" "}
              These save your settings and preferences, ensuring consistency
              across sessions.
            </li>
            <li>
              <strong className="font-semibold">Advertising Cookies:</strong>{" "}
              Used to show you targeted ads based on your interests, should we
              offer or partner with any advertisers.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Consent and Management of Cookies
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            By using our platform, you consent to our use of cookies. You may
            adjust cookie settings through your browser; however, some features
            may be affected if cookies are disabled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Updates to the Cookie Policy
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We may update our Cookie Policy periodically. Changes will be posted
            here, and your continued use of the platform implies acceptance of
            the modified terms.
          </p>
        </section>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            By using our platform, you acknowledge and agree to the terms
            outlined in this Cookie Policy.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
