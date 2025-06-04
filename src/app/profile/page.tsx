import React from "react";
import Link from "next/link"; // ✅ นำเข้า Link ที่ถูกต้อง
import ResponsiveBottomNavbar from "@/components/ResponsiveBottomNavbar";
import StatsBlock from "@/components/StatsBlock";

type ProfilePageProps = {
    displayName: string;
    username: string;
    joinedDate: string;
    rank: number;
    playtime: number;
    currentsession: number;
};

const ProfilePageLayout = ({
    displayName,
    username,
    joinedDate,
    rank,
    playtime,
    currentsession,
}: ProfilePageProps) => {
    return (
        <div className="max-h-screen flex flex-col text-white">
            
            {/* Profile content */}
            <div className="flex-1 p-4 w-full">

                <div className="flex flex-row-reverse">
                    <Link href="/setting">
                        <svg className="w-[33px] h-[33px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/>
                        </svg>
                    </Link>
                </div>

                <div className="w-full text-center">
                    <div className="w-50 h-50 mx-auto bg-gray-600 rounded-full mb-4" />
                    <div className="text-lg font-semibold">{displayName}</div>
                    <div className="text-sm text-gray-400">{username}</div>
                    <div className="text-xs text-gray-500 mt-1">joined {joinedDate}</div>

                    {/* Statistics */}
                    <div className="mt-6 text-left">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-md font-semibold">Statistics</span>
                            <Link href='/profile/subject_statistic' className="text-md font-semibold">view all</Link>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-[#2a2a2e] rounded-xl p-3 text-center">
                                <div className="text-sm text-gray-400">Rank</div>
                                <div className="text-xl font-bold">{rank}</div>
                            </div>
                            <div className="bg-[#2a2a2e] rounded-xl p-3 text-center">
                                <div className="text-sm text-gray-400">Playtime</div>
                                <div className="text-xl font-bold">{playtime} hrs</div>
                            </div>
                            <div className="bg-[#2a2a2e] rounded-xl p-3 text-center">
                                <div className="text-sm text-gray-400">Placeholder</div>
                                <div className="text-xl font-bold">123</div>
                            </div>
                            <div className="bg-[#2a2a2e] rounded-xl p-3 text-center">
                                <div className="text-sm text-gray-400">Current session</div>
                                <div className="text-xl font-bold">{currentsession} mins</div>
                            </div>
                        </div>

                        {/* Stats Blocks */}
                        <div className="flex justify-center items-center mt-2">
                            <StatsBlock
                                subject="Mathematics"
                                lessonsCompleted={21}
                                mistakes={34}
                                accuracy={84}
                                topics={[
                                    { name: "Algebra", count: 1, percent: 0, color: "bg-purple-500" },
                                    { name: "Geometry", count: 1, percent: 0, color: "bg-green-400" },
                                    { name: "Quadratic", count: 1, percent: 0, color: "bg-pink-400" },
                                ]}
                            />
                        </div>
                        <div className="flex justify-center items-center mt-2 pb-10">
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

                        {/* ✅ ปุ่ม Setting */}

                    </div>
                </div>
            </div>

            {/* Bottom Navbar */}
            <ResponsiveBottomNavbar />
        </div>
    );
};

const ProfilePage = () => {
    return (
        <ProfilePageLayout
            displayName="tungtungtungsahur"
            username="nigga5678"
            joinedDate="June 2025"
            rank={17}
            playtime={37}
            currentsession={1}
        />
    );
};

export default ProfilePage;
