import React from "react";
import ResponsiveBottomNavbar from "@/components/ResponsiveBottomNavbar";

const HomePage = () => {

  const mathTopic = [
    { name: "Algebra" },
    { name: "Geometry" },
    { name: "Calculus" },
    { name: "Statistics" },
    { name: "Trigonometry" },
    { name: "Linear Algebra" },
    { name: "Discrete Mathematics" },
    { name: "Number Theory" },
  ]

  const scienceTopic = [
    { name: "Physics" },
    { name: "Chemistry" },
    { name: "Biology" },
    { name: "Earth Science" },
    { name: "Astronomy" },
    { name: "Environmental Science" },
    { name: "Geology" },
    { name: "Ecology" },
  ];

  const socialStudiesTopic = [
    { name: "History" },
    { name: "Geography" },
    { name: "Economics" },
    { name: "Political Science" },
    { name: "Sociology" },
    { name: "Psychology" },
    { name: "Anthropology" },
    { name: "Cultural Studies" },
  ]

  return (

    <div className="pb-[45px]">

      <div className="flex flex-row items-center justify-start m-3">

        <a href="/recent">
          <p className="text-2xl font-bold ml-1 text-gray-100">Recent</p>
        </a>

        <a href="/recent">
          <svg className="w-6 h-6 text-[#5f6361]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m9 5 7 7-7 7" />
          </svg>
        </a>

      </div>

      <div className="grid gap-3 m-3">

        <div className="flex flex-row items-center justify-end h-20 bg-[#3A3A40] rounded-[6px] shadow-md">

          <div className="bg-[#2A2930] w-full h-full px-3 py-2 rounded-[6px] shadow-md">

            <div className="grid grid-cols-[55%_45%] items-center w-full h-full">

              <div>
                <p className="text-xl font-semibold">Algebra</p>
                <p className="text-gray-400 text-xs">9th Grade Math</p>
              </div>

              <div className="">
                <p className="text-green-500 text-md">69% Completed</p>
                <div className="rounded-full h-3 my-[1px] bg-gray-700">
                  <div className="bg-linear-to-r from-[#58CA88] to-[#BC48FF] h-3 rounded-full w-[69%]"></div>
                </div>
              </div>
              
            </div>
          </div>

          <svg className="w-6 h-6 text-[#5F5F63]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m9 5 7 7-7 7" />
          </svg>

        </div>

        <div className="flex flex-row items-center justify-end h-20 bg-[#3A3A40] rounded-[6px] shadow-md">

          <div className="bg-[#2A2930] w-full h-full px-3 py-2 rounded-[6px] shadow-md">

            <div className="grid grid-cols-[55%_45%] items-center w-full h-full">

              <div>
                <p className="text-xl font-semibold">Negromancy</p>
                <p className="text-gray-400 text-xs">9th Grade Math</p>
              </div>

              <div>
                <p className="text-green-500 text-md">13% Completed</p>
                <div className="bg-gray-200 rounded-full h-3 my-[1px] dark:bg-gray-700">
                  <div className="bg-linear-to-r from-[#58CA88] to-[#BC48FF] h-3 rounded-full w-[13%]"></div>
                </div>
              </div>
              
            </div>
          </div>

          <svg className="w-6 h-6 text-[#5F5F63]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m9 5 7 7-7 7" />
          </svg>

        </div>

      </div>


      {/* Seperation line */}
      <hr className="border-t-2 border-gray-600 my-4 mx-3" />


      <div className="flex flex-row items-center justify-start m-3">

        <a href="/subjects">
          <h2 className="text-2xl font-bold ml-1 text-gray-100">Subjects</h2>
        </a>

        <a href="/subjects">
          <svg className="w-6 h-6 text-[#5f6361]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m9 5 7 7-7 7" />
          </svg>
        </a>

      </div>

      <div className="flex flex-col space-y-3">

        <div className="bg-[#2A2930] py-2">

          <p className="text-2xl font-bold ml-6 text-gray-100 mb-1">
            Math
          </p>

          <div className="overflow-x-auto flex space-x-3 pl-6 pr-3 snap-x snap-mandatory hide-scrollbar">

            {mathTopic.map((topic, idx) => (
              <div
                key={idx}
                className="w-[100px] h-[100px] flex-shrink-0 bg-[#adadad] rounded-[6px] shadow-md snap-center"
              >
                {/* Subject card content here */}
                <div className="flex flex-col justify-center items-center h-full">
                  <p className="text-sm font-semibold text-gray-900 text-center break-words whitespace-normal px-2">
                    {topic.name}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="bg-[#2A2930] py-2">

          <p className="text-2xl font-bold ml-6 text-gray-100 mb-1">
            Science
          </p>

          <div className="overflow-x-auto flex space-x-3 pl-6 pr-3 snap-x snap-mandatory hide-scrollbar">

            {scienceTopic.map((topic, idx) => (
              <div
                key={idx}
                className="w-[100px] h-[100px] flex-shrink-0 bg-[#adadad] rounded-[6px] shadow-md snap-center"
              >
                {/* Subject card content here */}
                <div className="flex flex-col justify-center items-center h-full">
                  <p className="text-sm font-semibold text-gray-900 text-center break-words whitespace-normal px-2">
                    {topic.name}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="bg-[#2A2930] py-2">

          <p className="text-2xl font-bold ml-6 text-gray-100 mb-1">
            Social Studies
          </p>

          <div className="overflow-x-auto flex space-x-3 pl-6 pr-3 snap-x snap-mandatory hide-scrollbar">

            {socialStudiesTopic.map((topic, idx) => (
              <div
                key={idx}
                className="w-[100px] h-[100px] flex-shrink-0 bg-[#adadad] rounded-[6px] shadow-md snap-center"
              >
                {/* Subject card content here */}
                <div className="flex flex-col justify-center items-center h-full">
                  <p className="text-sm font-semibold text-gray-900 text-center break-words whitespace-normal px-2">
                    {topic.name}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      <footer className="mt-6 py-6 bg-[#23232a] text-gray-400 text-sm text-center border-t border-gray-600">
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 px-4">
          <div>
            &copy; {new Date().getFullYear()} RevisionWebApp. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="/terms" className="hover:text-white underline">Terms of Service</a>
            <span>|</span>
            <a href="/privacy" className="hover:text-white underline">Privacy Policy</a>
            <span>|</span>
            <a href="/contact" className="hover:text-white underline">Contact</a>
          </div>
        </div>
      </footer>

      <ResponsiveBottomNavbar />

    </div>

  );
}


export default HomePage;