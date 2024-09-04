import React from "react";

const Header = () => {
  return (
    <div>
      <div className="absolute z-50 top-6 right-0  px-2 lg:px-24 left-0">
        <div className="border  bg-white rounded-xl px-6 py-3  w-full">
          <div className="flex justify-between">
            <div className="text-2xl font-bold">
              <img src="/logo.png" className="h-8 lg:h-14" alt="" />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/4ff0/c88d/1a68ec349c9d92d9c4bdffcba943d276?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YoL6jt2W6IvXIZOgnPb8YcxrBm0Cf1VVBMRI3fOuD2W8jm37URuuW8faIw4vb4U2yqWJrwmjRIpKHSDZvph4aVQ07y5EykrI7g48jx5RhQ3QVAKqvKVk3dgEtwnrs7~OdnJZ1jJvopDvFz9N7eeCUYmY1AidDzhaSDEtsXp0MRt5Yw6uWGMHUa9u-ktKWMHamZ6AWo73HgOj5MrNvgf2IsuzTRDSkds9CYGCAZGzI5q1Q32zhOgzD6Tdh22x~3bXpDTXZp7jO~XW5p5rbklDXKGx-Q96mj4rYIPuSzof4IxeKko4~f33F6jcjtMMlM3QtN-xRoDQoTlqLSJPSO6fqA__"
                  alt=""
                  className="w-8 h-8"
                />
                <h1 className="font-bold hidden lg:block text-[#454545] text-sm">
                  91761 33695
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/a791/f741/66ad2e238edb2e879f009fd87a220085?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nSfdSQa8cxT~yzcus54wh74l7CB2ItQSOzjU56~Yg48AZj6iEwB9IP0wogar6qFj4oQnUGsoUI2NPuTGffFmcZO4B540wBxYSd~KPI3fP84hf~4Vdnr9RQdVXsCOpgWbaY94lzmf8r9HIXCQqqzfQ1e~DN~YhNWK8Zqk4xns5hKO1fZukD1PeEmrIMs7s6YUcT5RAsBGx1RmIohmPpQXdIlwEMvUKpENnqw8jlpW5zHmwyFnXZU5~Uj4RAU5cDwt56uvtZe19Z55kR11b8aEiBUQECrlENvAOcFd-bD1mqR4OnGTDXVOFmu2MQG4MY4rM4NE600BxAkgRcm1A9LrLg__"
                  alt=""
                  className="w-8 h-8"
                />
                <h1 className="font-bold hidden lg:block text-[#454545] text-sm">
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
