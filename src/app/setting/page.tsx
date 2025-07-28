'use client'
import ResponsiveBottomNavbar from "@/components/ResponsiveBottomNavbar";
import Footer from "@/components/Footer";

import { useState } from "react"
import { useSession } from "next-auth/react"

function SettingsPage() {
    const { data: session } = useSession();
    const [notification, setNotification] = useState(true)
    const [newsletters, setNewsletters] = useState(false)
    const [specialOffers, setSpecialOffers] = useState(true)
    const [updates, setUpdates] = useState(true)
    const [showpasswordModal, setpasswordModal] = useState(false)
    const menuItems = [
        'Edit profile',
        'Change Password',
        'Change language'
    ]

    return (
        <div className="flex flex-col justify-between">
            <div>
                <h1 className="text-lg font-semibold text-white p-4">Settings</h1>

                <div className="bg-[#2a2a2e] rounded-lg mx-4 shadow-sm divide-y">
                    {menuItems.map((item, i) => (
                        <div
                            key={i}
                            className="p-4 flex justify-between items-center"
                            onClick={() => item === 'Change Password' && setpasswordModal(true)}
                        >
                            <span>{item}</span>
                            <span className="text-gray-400">{'>'}</span>
                        </div>
                    ))}
                </div>

                {showpasswordModal && <PasswordModal onClose={() => setpasswordModal(false)} username={session?.user?.name ?? undefined} />}


                <div className="mt-6 rounded-lg mx-4 shadow-sm divide-y">
                    <ToggleRow label="Receive notification" value={notification} onChange={setNotification} />
                    <ToggleRow label="Receive newsletters" value={newsletters} onChange={setNewsletters} />
                    <ToggleRow label="Receive special offers" value={specialOffers} onChange={setSpecialOffers} />
                    <ToggleRow label="Receive Updates" value={updates} onChange={setUpdates} />
                </div>
            </div>
            <ResponsiveBottomNavbar/>
        </div>
    )
}

export default SettingsPage;

function ToggleRow({ label, value, onChange }: { label: string, value: boolean, onChange: (v: boolean) => void }) {
    return (
        <div className="p-4 flex justify-between items-center">
            <span>{label}</span>
            <button
                onClick={() => onChange(!value)}
                className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ${value ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'
                    }`}
            >
                <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
            </button>
        </div>
    )
}

function BottomIcon({ label, icon, active }: { label: string, icon: string, active?: boolean }) {
    return (
        <div className={`flex flex-col items-center ${active ? 'text-blue-500' : 'text-gray-400'}`}>
            <span className="text-xl">{icon}</span>
            <span className="text-sm">{label}</span>
        </div>
    )
}

function PasswordModal({ onClose, username }: { onClose: () => void, username?: string }) {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChangePassword = async () => {
        if (!username) {
            alert("No user session found.");
            return;
        }
        if (!oldPassword || !newPassword || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }
        if (newPassword !== confirmPassword) {
            alert("New password and confirm password do not match.");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/auth/change-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, oldPassword, newPassword })
            });
            const data = await res.json();
            if (!res.ok) {
                alert(data.error || "Failed to change password");
            } else {
                alert("Password changed successfully!");
                onClose();
            }
        } catch (e) {
            alert("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-[#2f3136] w-[400px] p-6 rounded-lg shadow-lg relative">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl">
                    ×
                </button>
                <h2 className="text-lg font-semibold text-white mb-1">Update your password</h2>
                <p className="text-sm text-gray-300 mb-5">Enter your current password and a new password.</p>

                <div className="space-y-4">
                    <Input label="Current Password" value={oldPassword} onChange={setOldPassword} />
                    <Input label="New Password" value={newPassword} onChange={setNewPassword} />
                    <Input label="Confirm New Password" value={confirmPassword} onChange={setConfirmPassword} />
                </div>

                <div className="flex justify-end space-x-2 mt-6">
                    <button onClick={onClose} className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded text-white" disabled={loading}>Cancel</button>
                    <button onClick={handleChangePassword} className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded text-white" disabled={loading}>{loading ? "Saving..." : "Done"}</button>
                </div>
            </div>
        </div>
    )
}

function Input({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) {
    return (
        <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">{label}</label>
            <input
                type="password"
                className="bg-[#202225] rounded px-3 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    )
}