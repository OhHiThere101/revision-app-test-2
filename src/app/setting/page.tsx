import React from "react";
import ResponsiveBottomNavbar from "@/components/ResponsiveBottomNavbar";
import Footer from "@/components/Footer";


const Setting = () => {

    return (
        <div>
            <div>
                <h1 className="text-xl mt-5 ml-5">Settings</h1>
            </div>

            <div className="mt-5 ml-5 flex justify-between">
                <h1>Edit profile</h1>
                <svg className="w-6 h-6 text-[#5f6361]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m9 5 7 7-7 7" />
                </svg>
            </div>

            <ResponsiveBottomNavbar />
        </div>
        
    );
}
export default Setting;