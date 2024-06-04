import React, { useEffect } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
    setIsOpen(true);
    // Clean-up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(addScript);
    };
  }, []);

  return (
    <div className="">
      <div className="px-24 py-6 ">
        {isOpen && <div id="google_translate_element"></div>}
      </div>
    </div>
  );
};

export default Footer;
