import React from "react";
const allTags = [
  "JavaScript",
  "React",
  "Node.js",
  "TypeScript",
  "Express",
  "MongoDB",
  "CSS",
  "HTML",
  "Web Development",
  "Frontend",
  "Backend",
  "Programming",
  "Tech",
  "Coding",
  "Software",
  "UI/UX",
];
const BlogHero = () => {
  return (
    <div className="">
      <div className="">
        <div className="bg-blue-200 px-6 py-4 rounded-3xl">
          <div className="w-full my-6 flex justify-center mx-auto items-center">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 w-1/2 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 pl-6 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for a blog"
              required
            />
          </div>
          <div className="">
            <div className="flex flex-wrap justify-center">
              {allTags.map((tag, index) => {
                return (
                  <div
                    key={index}
                    className="bg-blue-500 text-white text-sm rounded-2xl px-4 py-2 m-2"
                  >
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center mt-12 mb-8">
            <button className="px-6 py-3 bg-blue-500 rounded-2xl text-white">
              Post Your Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
