import React from "react";
import ResponsiveBottomNavbar from "@/components/ResponsiveBottomNavbar";

type ProfilePageProps = {
    displayName: string;
    username: string;
    joinedDate: string;
    rank: number;
    playtime: number;
};

const ProfilePage = ({
    displayName,
    username,
    joinedDate,
    rank,
    playtime,
}: ProfilePageProps) => {
    return (
        <div className="bg-[#0f0f12] min-h-screen flex flex-col text-white font-sans">
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
                                <div className="text-sm text-gray-400">Placeholder</div>
                                <div className="text-xl font-bold">123</div>
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

type StatBlockProps = {
    title: string;
    progress: number; // 0 - 100
    accuracy: number; // 0 - 100
    playtime: number; // ชั่วโมง
};

const StatBlock = ({ title, progress, accuracy, playtime }: StatBlockProps) => {
    return (
        <div className="bg-[#1a1a1d] p-4 rounded-xl w-full max-w-xs mb-4">
            <div className="text-white text-sm font-semibold mb-2">{title}</div>

            {/* Progress */}
            <div className="text-gray-400 text-xs mb-1">progress</div>
            <div className="w-full bg-gray-700 rounded-full h-3 mb-1">
                <div
                    className="bg-green-400 h-3 rounded-full"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="text-right text-white text-xs mb-2">{progress}%</div>

            {/* Accuracy */}
            <div className="text-gray-400 text-xs mb-1">accuracy</div>
            <div className="w-full bg-gray-700 rounded-full h-3 mb-1">
                <div
                    className="bg-green-400 h-3 rounded-full"
                    style={{ width: `${accuracy}%` }}
                />
            </div>
            <div className="text-right text-white text-xs mb-2">{accuracy}%</div>

            {/* Play time */}
            <div className="text-gray-400 text-xs">play time</div>
            <div className="text-white text-sm">{playtime} hours</div>
        </div>
    );
  };

const App = () => {
    return (
        <ProfilePage
            displayName="nigga"
            username="tungtungtungsahur"
            joinedDate="June 2025"
            rank={17}
            playtime={37}
        />
    );
};

export default App;
