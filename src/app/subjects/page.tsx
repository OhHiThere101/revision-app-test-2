import React from "react";
import ResponsiveBottomNavbar from "@/components/ResponsiveBottomNavbar";
import Footer from "@/components/Footer";

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
            


            {/* Seperation line */}
            


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


            <Footer />

            <ResponsiveBottomNavbar />

        </div>

    );
}


export default HomePage;