import React from "react";
import StatsBlock from "@/components/StatsBlock";
import ResponsiveBottomNavbar from "@/components/ResponsiveBottomNavbar";
import Link from "next/link";


const SubjectStatistic = () => {
    return (
        <div>
            <div className="flex justify-center items-center m-3">
                <StatsBlock
                    subject="Mathematics"
                    lessonsCompleted={21}
                    mistakes={34}
                    accuracy={84}
                    topics={[
                        { name: "Algebra", count: 1, percent: 10, color: "bg-purple-500" },
                        { name: "Geometry", count: 1, percent: 0, color: "bg-green-400" },
                        { name: "Quadratic", count: 1, percent: 0, color: "bg-pink-400" },
                    ]}
                />
            </div>
            <div className="flex justify-center items-center m-3">
                <StatsBlock
                    subject="Mathematics"
                    lessonsCompleted={21}
                    mistakes={34}
                    accuracy={84}
                    topics={[
                        { name: "Algebra", count: 1, percent: 10, color: "bg-purple-500" },
                        { name: "Geometry", count: 1, percent: 0, color: "bg-green-400" },
                        { name: "Quadratic", count: 1, percent: 0, color: "bg-pink-400" },
                    ]}
                />
            </div>
            <div className="flex justify-center items-center m-3">
                <StatsBlock
                    subject="Mathematics"
                    lessonsCompleted={21}
                    mistakes={34}
                    accuracy={84}
                    topics={[
                        { name: "Algebra", count: 1, percent: 10, color: "bg-purple-500" },
                        { name: "Geometry", count: 1, percent: 0, color: "bg-green-400" },
                        { name: "Quadratic", count: 1, percent: 0, color: "bg-pink-400" },
                    ]}
                />
            </div>
            <div className="flex justify-center items-center m-3">
                <StatsBlock
                    subject="Mathematics"
                    lessonsCompleted={21}
                    mistakes={34}
                    accuracy={84}
                    topics={[
                        { name: "Algebra", count: 1, percent: 10, color: "bg-purple-500" },
                        { name: "Geometry", count: 1, percent: 0, color: "bg-green-400" },
                        { name: "Quadratic", count: 1, percent: 0, color: "bg-pink-400" },
                    ]}
                />
            </div>
            <div className="flex justify-center items-center m-3">
                <StatsBlock
                    subject="Mathematics"
                    lessonsCompleted={21}
                    mistakes={34}
                    accuracy={84}
                    topics={[
                        { name: "Algebra", count: 1, percent: 10, color: "bg-purple-500" },
                        { name: "Geometry", count: 1, percent: 0, color: "bg-green-400" },
                        { name: "Quadratic", count: 1, percent: 0, color: "bg-pink-400" },
                    ]}
                />
            </div>
            <div className="flex justify-center items-center m-3">
                <StatsBlock
                    subject="Mathematics"
                    lessonsCompleted={21}
                    mistakes={34}
                    accuracy={84}
                    topics={[
                        { name: "Algebra", count: 1, percent: 10, color: "bg-purple-500" },
                        { name: "Geometry", count: 1, percent: 0, color: "bg-green-400" },
                        { name: "Quadratic", count: 1, percent: 0, color: "bg-pink-400" },
                    ]}
                />
            </div>
            

            <ResponsiveBottomNavbar />
        </div>
    );
};

export default SubjectStatistic;
