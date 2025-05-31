"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

const SCROLL_THRESHOLD = 80; // Change this value as needed

const ResponsiveBottomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > SCROLL_THRESHOLD) {
        // Scrolling down past threshold
        setScrolled(true);
      } else if (currentScrollY < lastScrollY.current && currentScrollY < document.body.scrollHeight - window.innerHeight - SCROLL_THRESHOLD) {
        // Scrolling up and not at the very bottom
        setScrolled(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);

  return (

    <div
      className={`fixed bottom-0 left-0 z-50 w-full transition-all duration-300 border-t-[2px] border-navigation-border bg-navigation-bg
        ${scrolled ? "h-[45px]" : "h-[70px]"}`}
    >

      <div className="grid grid-cols-3 gap-8 h-full mx-8">

        <Link href="/" className="flex flex-col items-center justify-center">
          <svg className="w-[32px] h-[32px] text-navigation-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
          </svg>
          <span className={`text-xs text-navigation-text transition-all duration-200 ${scrolled ? "opacity-0 h-0" : "opacity-100 h-auto"}`}>
            Home
          </span>
        </Link>

        <Link href="/generate" className="flex flex-col items-center justify-center">
          <svg className="w-[32px] h-[32px] text-navigation-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          <span className={`text-xs text-navigation-text transition-all duration-200 ${scrolled ? "opacity-0 h-0" : "opacity-100 h-auto"}`}>
            Generate
          </span>
        </Link>

        <Link href="/profile" className="flex flex-col items-center justify-center">
          <svg className="w-[32px] h-[32px] text-navigation-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
          <span className={`text-xs text-navigation-text transition-all duration-200 ${scrolled ? "opacity-0 h-0" : "opacity-100 h-auto"}`}>
            Profile
          </span>
        </Link>

      </div>

    </div>

  );
};

export default ResponsiveBottomNavbar;