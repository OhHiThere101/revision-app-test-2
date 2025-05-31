import React from "react";
import ResponsiveBottomNavbar from "@/components/ResponsiveBottomNavbar";

const HomePage = () => {
  return (

    <div className="pb-[45px]">

      <h1 className="text-xl font-bold m-3">Jump back in</h1>

      <div className="grid gap-4 m-3">

        <div className="flex flex-row items-center justify-end h-24 bg-[#3A3A40] rounded-[6px] shadow-md">

          <div className="bg-[#2A2930] w-full h-full px-3 py-2 rounded-[6px] shadow-md">

            <div className="grid grid-cols-[55%_45%] items-center w-full h-full">

              <div>
                <p className="text-xl font-semibold">Algebra</p>
                <p className="text-gray-400 text-xs">9th Grade Math</p>
              </div>

              <div className="">
                <p className="text-green-500 text-md">69% Completed</p>
                <div className="bg-gray-200 rounded-full h-3 my-[1px] dark:bg-gray-700">
                  <div className="bg-linear-to-r from-[#58CA88] to-[#BC48FF] h-3 rounded-full w-[69%]"></div>
                </div>
              </div>
              
            </div>
          </div>

          <svg className="w-6 h-6 text-[#5F5F63]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m9 5 7 7-7 7" />
          </svg>

        </div>

        <div className="flex flex-row items-center justify-end h-24 bg-[#3A3A40] rounded-[6px] shadow-md">

          <div className="bg-[#2A2930] w-full h-full px-3 py-2 rounded-[6px] shadow-md">

            <div className="grid grid-cols-[55%_45%] items-center w-full h-full">

              <div>
                <p className="text-xl font-semibold">Negromancy</p>
                <p className="text-gray-400 text-xs">9th Grade Math</p>
              </div>

              <div>
                <p className="text-green-500 text-md">13% Completed</p>
                <div className="bg-gray-200 rounded-full h-3 my-[1px] dark:bg-gray-700">
                  <div className="bg-linear-to-r from-[#58CA88] to-[#BC48FF] h-3 rounded-full w-[69%]"></div>
                </div>
              </div>
              
            </div>
          </div>

          <svg className="w-6 h-6 text-[#5F5F63]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m9 5 7 7-7 7" />
          </svg>

        </div>

      </div>


      <hr className="border-t-2 border-gray-600 my-4 mx-3" />


      <h2 className="text-2xl font-bold m-3">Subjects</h2>

      <div className="grid grid-cols-2 gap-4 m-3">

        <div className="flex flex-row bg-gray-800 px-3 h-20 rounded-[6px] shadow-md items-center justify-between">

          <p className="text-xl font-semibold">Mathematics</p>

          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
          </svg>

        </div>

      </div>

      <ResponsiveBottomNavbar />

    </div>

  );
}


export default HomePage;