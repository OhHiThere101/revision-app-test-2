"use client";

import React, { useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

export default function ResponsiveNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const loaderRef = useRef<HTMLDivElement>(null);

<<<<<<< HEAD
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > SCROLL_THRESHOLD) {
        setScrolled(true);
      } else if (currentScrollY < lastScrollY.current && currentScrollY < document.body.scrollHeight - window.innerHeight - SCROLL_THRESHOLD) {
        setScrolled(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to check if path matches
  const isActive = (href: string) => {
    if (href === "/profile") {
      return pathname.startsWith("/profile");
    }
    return pathname === href || (href === "/" && pathname === "");
  };
=======
  const isActive = (href: string) =>
    pathname === href || (href === "/" && pathname === "");
>>>>>>> e852c25be38368a52674bc79bdfae4ea61776911

  const transition = () => {
    return new Promise<void>((resolve) => {
      const tl = gsap.timeline({
        onComplete: () => resolve(),
      });

      tl.to(CSSRulePlugin.getRule("body:before"), {
        duration: 0.3,
        cssRule: { top: "0%" },   // จากเริ่มปิดอยู่ ให้มันปิดเต็มจอเลย
        ease: "power2.inOut",
      }, "close")
        .to(CSSRulePlugin.getRule("body:after"), {
          duration: 1.5,
          cssRule: { bottom: "0%" },
          ease: "power2.inOut",
        }, "close")
        .to(loaderRef.current, { duration: 1.5, opacity: 1 }, "close");
    });
  };

  const handleClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    transition().then(() => {
      router.push(href);
    });
  };


  return (
<<<<<<< HEAD
    <div
      className={`fixed bottom-0 left-0 z-50 w-full transition-all duration-300 border-t-[2px] border-navigation-border bg-navigation-bg
        ${scrolled ? "h-[45px]" : "h-[70px]"}`}
    >
      <div className="grid grid-cols-3 gap-8 h-full mx-8">
        <Link href="/" className="flex flex-col items-center justify-center">
          {isActive("/") ? (
            // Filled Home Icon
            <svg className="w-[32px] h-[32px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
            </svg>
          ) : (
            // Default Home Icon
            <svg className="w-[32px] h-[32px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
            </svg>
          )}
          <span className={`text-xs transition-all duration-200 text-navigation-text ${scrolled ? "opacity-0 h-0" : "opacity-100 h-auto"} ${isActive("/") ? "font-bold" : ""}`}>
            Home
          </span>
        </Link>

        <Link href="/generate" className="flex flex-col items-center justify-center">
          {isActive("/generate") ? (
            // Filled Generate Icon
            <svg className="w-[32px] h-[32px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd" />
            </svg>
          ) : (
            // Default Generate Icon
            <svg className="w-[32px] h-[32px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          )}
          <span className={`text-xs transition-all duration-200 text-navigation-text ${scrolled ? "opacity-0 h-0" : "opacity-100 h-auto"} ${isActive("/generate") ? "font-bold" : ""}`}>
            Generate
          </span>
        </Link>

        <Link href="/profile" className="flex flex-col items-center justify-center">
          {isActive("/profile") ? (
            // Filled Profile Icon
            <svg className="w-[32px] h-[32px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clipRule="evenodd" />
            </svg>
          ) : (
            // Default Profile Icon
            <svg className="w-[32px] h-[32px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          )}
          <span className={`text-xs transition-all duration-200 text-navigation-text ${scrolled ? "opacity-0 h-0" : "opacity-100 h-auto"} ${isActive("/profile") ? "font-bold" : ""}`}>
            Profile
          </span>
        </Link>

      </div>
    </div>

  );
};
=======
    <>
      {/* Loader overlay */}
      <div
        ref={loaderRef}
        className="loader fixed top-0 left-0 w-full h-full opacity-0 z-[9999] flex justify-center items-center pointer-events-none"
        style={{ backgroundColor: "rgba(0,0,0,1)" }}
      >
        <div className="flex space-x-1">
          <div className="w-2 h-10 bg-purple-700 animate-delay" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-10 bg-cyan-400 animate-delay" style={{ animationDelay: "-0.1s" }} />
          <div className="w-2 h-10 bg-green-400 animate-delay" style={{ animationDelay: "-0.2s" }} />
          <div className="w-2 h-10 bg-yellow-400 animate-delay" style={{ animationDelay: "-0.3s" }} />
          <div className="w-2 h-10 bg-pink-500 animate-delay" style={{ animationDelay: "-0.4s" }} />
        </div>
      </div>
>>>>>>> e852c25be38368a52674bc79bdfae4ea61776911

      {/* Navbar */}
      <nav className="fixed bottom-0 left-0 z-50 w-full border-t-[2px] border-navigation-border bg-navigation-bg flex justify-around items-center h-[70px] px-8">
        <a
          href="/"
          onClick={(e) => handleClick("/", e)}
          className={`flex flex-col items-center justify-center text-xs ${isActive("/") ? "font-bold text-navigation-text" : "text-navigation-text"}`}
        >
          {/* Home Icon */}
          {isActive("/") ? (
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M11.293 3.293a1 1 0 011.414 0l6 6 2 2a1 1 0 01-1.414 1.414L19 12.414V19a2 2 0 01-2 2h-3a1 1 0 01-1-1v-3h-2v3a1 1 0 01-1 1H7a2 2 0 01-2-2v-6.586l-.293.293a1 1 0 01-1.414-1.414l2-2 6-6z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="m4 12 8-8 8 8M6 10.5V19a1 1 0 001 1h3v-3a1 1 0 011-1h2a1 1 0 011 1v3h3a1 1 0 001-1v-8.5" />
            </svg>
          )}
          Home
        </a>

        <a
          href="/generate"
          onClick={(e) => handleClick("/generate", e)}
          className={`flex flex-col items-center justify-center text-xs ${isActive("/generate") ? "font-bold text-navigation-text" : "text-navigation-text"}`}
        >
          {/* Generate Icon */}
          {isActive("/generate") ? (
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 11-18 0 9 9 0 0118 0Z" />
            </svg>
          )}
          Generate
        </a>

        <a
          href="/profile"
          onClick={(e) => handleClick("/profile", e)}
          className={`flex flex-col items-center justify-center text-xs ${isActive("/profile") ? "font-bold text-navigation-text" : "text-navigation-text"}`}
        >
          {/* Profile Icon */}
          {isActive("/profile") ? (
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 20a7.966 7.966 0 01-5.002-1.756v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0112 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 21a9 9 0 110-18 9 9 0 010 18Zm3-11a3 3 0 11-6 0 3 3 0 016 0Z" />
              <path d="M13 16h-2a3.987 3.987 0 00-3.951 3.512A8.948 8.948 0 0012 21a8.949 8.949 0 004.951-1.488A3.987 3.987 0 0013 16z" />
            </svg>
          )}
          Profile
        </a>
      </nav>
    </>
  );
}
