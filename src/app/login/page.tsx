"use client";

import React, { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <form className="w-full max-w-sm flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-white text-center mb-10 mt-8">Sign in</h1>

        {/* Username */}
        <div className="relative mt-2">
          <input
            id="username"
            type="text"
            className="peer w-full px-4 py-3 bg-[#2c2c31] text-white border border-gray-300 rounded-md outline-none focus:border-white transition placeholder-transparent"
            placeholder=" "
            autoComplete="username"
          />

          {/* Cut-out line behind the label */}
          <div
            className="absolute -top-[0px] left-[10px] bg-[#18171D] z-10 w-[75px] h-[1px]"
          />
          <label
            htmlFor="username"
            className="absolute -top-[14px] left-2 px-1 text-gray-300 text-base pointer-events-none bg-transparent z-20"
          >
            Username
          </label>
        </div>

        {/* Password */}
        <div className="relative mt-2">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className="peer w-full px-4 py-3 bg-[#2c2c31] text-white border border-gray-300 rounded-md outline-none focus:border-white transition placeholder-transparent pr-10"
            placeholder=" "
            autoComplete="current-password"
          />

          {/* Cut-out line behind the label */}
          <div
            className="absolute -top-[0px] left-[10px] bg-[#18171D] z-10 w-[70px] h-[1px]"
          />
          <label
            htmlFor="password"
            className="absolute -top-[14px] left-2 px-1 text-gray-300 text-base pointer-events-none z-30 bg-transparent"
          >
            Password
          </label>

          {/* Show/hide password button */}
          <button
            type="button"
            className="absolute right-2 top-1/3 -translate-y-1/2 text-gray-400 z-30"
            onClick={() => setShowPassword((v) => !v)}
          >
            {showPassword ?
            (
              // Eye-off icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7c1.657 0 3.216.41 4.563 1.125M19.07 4.93l-14.14 14.14M9.88 9.88a3 3 0 104.24 4.24" />
              </svg>
            ) : (
              // Eye icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 3-4 7-9 7s-9-4-9-7 4-7 9-7 9 4 9 7z" />
              </svg>
            )
            }
          </button>

          {/* Forgot Password link */}
          <div className="flex justify-end">
            <a href="#" className="text-gray-300 text-sm underline mt-1 hover:text-white">
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Sign in button */}
        <button type="submit" className="w-full bg-white text-gray-900 font-semibold py-2 rounded mt-2 text-lg hover:bg-gray-200 transition">
          Sign in
        </button>

        {/* Create account */}
        <a href="#" className="block text-center text-white underline font-semibold text-lg mt-2 hover:text-gray-300">
          Create an account
        </a>
      </form>

      {/* Footer */}
      <div className="mt-16 text-gray-400 text-sm text-center space-y-1">
        <div>
          Terms of Service | Privacy Policy | Contact
        </div>
        <div>
          Random ahh button | abcdefg
        </div>
      </div>
    </div>

  );
};

export default LoginPage;