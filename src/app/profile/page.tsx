import React from "react";
import ResponsiveBottomNavbar from "@/components/ResponsiveBottomNavbar";

type ProfilePageProps = {
    displayName: string;
    username: string;
    joinedDate: string;
    rank: number;
    playtime: number;
    currentsession : number;
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
        <div className="bg-[#18171D] max-h-screen flex flex-col text-white">
            {/* Profile content */}
            <div className="flex-1 p-4 w-full">
                {/* Profile section */}
                <div className="w-full text-center">
                    <div className="w-24 h-24 mx-auto bg-gray-600 rounded-full mb-4" />
                    <div className="text-lg font-semibold">{displayName}</div>
                    <div className="text-sm text-gray-400">{username}</div>
                    <div className="text-xs text-gray-500 mt-1">joined {joinedDate}</div>

                    {/* Statistics */}
                    <div className="mt-6 text-left">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-md font-semibold">Statistics</span>
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
                                <div className="text-sm text-gray-400">currentsession</div>
                                <div className="text-xl font-bold">{currentsession} mins</div>
                            </div>
                        </div>
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
