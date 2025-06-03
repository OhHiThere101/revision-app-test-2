import Link from "next/link";

interface StatsProps {
    subject?: string;
    lessonsCompleted?: number;
    mistakes?: number;
    accuracy?: number;
    topics?: {
        name: string;
        count: number;
        percent: number;
        color: string;
    }[];
}

export default function StatsBlock({
    subject = "Mathematics",
    lessonsCompleted = 0,
    mistakes = 0,
    accuracy = 0,
    topics = [
        { name: "Algebra", count: 0, percent: 0, color: "bg-purple-500" },
        { name: "Geometry", count: 0, percent: 0, color: "bg-green-400" },
        { name: "Quadratic", count: 0, percent: 0, color: "bg-pink-400" },
    ],
}: StatsProps) {
    return (
        <div className="bg-[#2a2a2e] text-white p-4 rounded-xl w-full">
            <h2 className="text-xl font-bold">{subject}</h2>
            <p>Lessons completed: {lessonsCompleted}</p>
            <p>Mistakes: {mistakes}</p>
            <p>Accuracy: {accuracy}%</p>

            <div className="mt-4 space-y-2">
                {topics.map((topic, index) => (
                    <div key={index}>
                        <div className="flex justify-between text-sm">
                            <span>{topic.name} - {topic.count}</span>
                            <span className="text-green-500">{topic.percent}% complete</span>
                        </div>
                        <div className="w-full bg-gray-700 h-2 rounded">
                            <div
                                className={`${topic.color} h-2 rounded`}
                                style={{ width: `${topic.percent}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-row-reverse items-center mt-6">
                <Link href="/profile/subject_statistic/statistic/page.tsx">
                    <button className=" hover:bg-gray-600 px-6 py-2 rounded-full text-sm transition">
                        see more
                    </button>
                </Link>
            </div>
        </div>
    );
}
  