import React from "react";

const Header = () => {
  return (
    <div>
      <div className="absolute z-50 top-6 right-0  px-2 lg:px-24 left-0">
        <div className="border  bg-white rounded-xl px-6 py-3  w-full">
          <div className="flex justify-between">
            <div className="text-2xl font-bold">
              <img src="/logo.png" className="h-12" alt="" />
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center gap-2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/4ff0/c88d/1a68ec349c9d92d9c4bdffcba943d276?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eNlOzfRmzh7mcsTOdzEfGT77gqv73YT7gjpTKt5-vmLwHF40O7FfS10RtoDgwrB5X~lyImvL7Rbk2h6Djyc6GplUseRwKG2jOqh~qWkzyd3Eb~MfVQR--COoSp9GL9G-g4c-uV71fwSDbhfTJmvIvrdy-Bw5GLzNhmLoMPS-XDOSHpWkmt3zi~itCNGplM6gDs5siTyP6sOOR0OycPHiUVOAIS9oxamzdxtXWVTXqqVNfxuJwLLfo7gs-PuoTA8EtTR7m-LIWY-9S4hxCpU~nMZCfkrtkv95zXvutS~7tkfWqf1zbQmEd684fTPByJgWntgbIKFVURxIyvrvGgEQWw__"
                  alt=""
                  className="w-8 h-8"
                />
                <h1 className="font-bold text-[#454545] text-sm">
                  91761 33695
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/a791/f741/66ad2e238edb2e879f009fd87a220085?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CtC0zeKq1DedDykoy1iq~KKyRCcNCxOnfOiYv0lD7TBegLH8lW7Eu6cRvytzDs4TLHPvHPbr7MGcNvRLdCf3SGvewTrFXAh9Z0nZl2iT~5iwKY50MxafzswbMjK7dzHXd-XZcrLdHbP7mD-2tcvnn3Mbo8JQaZW9BmNoT4EEYlFGlxF63edwZaRwiKICEzihUV3IEz5eyw6tZm5MxUFFFhLu-jAMAfZO3L71HyAY-pyUisIHyxx~kP5YcNzzOdkJcYpIddzG0VXVCjPPplVvYGHuGP-Qtq5uHztLqHLjHx1Ej8VK5TxkttmxwPyZEHemqpeHlW2Pt49C3GDCOIkgdg__"
                  alt=""
                  className="w-8 h-8"
                />
                <h1 className="font-bold text-[#454545] text-sm">
                  sales@tenderonline.co.in
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
