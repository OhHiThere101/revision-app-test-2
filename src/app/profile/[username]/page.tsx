"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ResponsiveBottomNavbar from "@/components/ResponsiveBottomNavbar";
import StatsBlock from "@/components/StatsBlock";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

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
                    <div className="w-80 h-80 mx-auto bg-gray-600 rounded-full mb-4" />
                    <div className="text-[30px] font-semibold">{displayName}</div>
                    <div className="text-xs text-gray-500 mt-1">joined {joinedDate}</div>
                    {/* Statistics */}
                    <div className="mt-6 text-left">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-md font-semibold">Statistics</span>
                            <Link href={`/profile/${username}/subject_statistic`} className="text-md font-semibold">view all</Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="border-[3px] border-[#39BEB9] rounded-xl p-3 text-center">
                                <div className="text-[15px] text-gray-400">Rank</div>
                                <div className="text-[35px] font-bold">{rank}</div>
                            </div>
                            <div className="border-[3px] border-[#F2AD22] rounded-xl p-3 text-center">
                                <div className="text-[15px] text-gray-400">Playtime</div>
                                <div className="text-[35px] font-bold">{playtime} hrs</div>
                            </div>
                            <div className="border-[3px] border-[#5B64AF] rounded-xl p-3 text-center">
                                <div className="text-[15px] text-gray-400">Placeholder</div>
                                <div className="text-[35px] font-bold">123</div>
                            </div>
                            <div className="border-[3px] border-[#F47621] rounded-xl p-3 text-center">
                                <div className="text-[15px] text-gray-400">Current session</div>
                                <div className="text-[35px] font-bold">{currentsession} mins</div>
                            </div>
                        </div>

                        {/* Stats Blocks */}
                        <div className="flex justify-center items-center mt-2 pb-10">
                            <StatsBlock
                                subject="dashboard"
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


import { useParams } from "next/navigation";

const ProfilePage = () => {
    const { data: session, status } = useSession();
    const [user, setUser] = useState<{ displayName: string; username: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const params = useParams();

    useEffect(() => {
        if (status === "loading") return;
        if (!session || !session.user?.name) {
            setLoading(false);
            return;
        }
        const username = session.user.name;
        // Only redirect if the URL param does not match the session username
        if (params?.username !== username) {
            router.replace(`/profile/${username}`);
            return;
        }
        setUser({
            displayName: username,
            username: username,
        });
        setLoading(false);
    }, [session, status, router, params]);

    if (loading) {
        return <div className="text-white p-8">Loading...</div>;
    }

    if (!user) {
        return <div className="text-white p-8">User not found or not logged in.</div>;
    }

    return (
        <ProfilePageLayout
            displayName={user.displayName}
            username={user.username}
            joinedDate="June 2025"
            rank={17}
            playtime={37}
            currentsession={1}
        />
    );
};

export default ProfilePage;
