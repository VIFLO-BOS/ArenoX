"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Home, RefreshCw } from "lucide-react";
import { ErrorProps } from "@/utils/types/ErrorPage";

/* @ error-page : custom 404 error page with animations and decorative elements */
export default function ErrorPage({ error }: ErrorProps){ 
  /* @ animations : define bounce animation keyframes */
  <style jsx>{`
    @keyframes bounce {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `}</style>;
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 md:p-8 lg:-10">
        <div className="max-w-4xl w-full filter backdrop-blur-3xl rounded bg-gray-100/5 ring ring-amber-100/5">
          <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-5xl  sm:text-6xl   md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 tracking-tighter  animate-pulse">
              {error?.code}
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
              Oops! Page Not Found
            </h2>

            <p className="text-sm md:text-lg lg:text-lg text-gray-300 text-center max-w-2xl mx-auto  md:mt-3 lg:mt-4">
              This page has wandered off into the digital abyss. Let&apos;s get
              you{" "}
            </p>

            {/* Decorative Element */}
            <div className="relative mt-3 mb-3">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              </div>
              <div className="relative">
                <div className="flex justify-center">
                  <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl p-4 border border-gray-700">
                    <div className="text-gray-300 text-sm">
                      <code className="text-purple-400">Error {error?.code}:</code>{" "}
                      Destination unreachable
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex sm:flex-row gap-4 justify-center items-center ">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold p-4 md:px-6 lg:px-8 py-3  lg:py-4 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 text-sm"
              >
                <Home size={12} />
                Back to Home
                <ArrowRight
                  className="group-hover:translate-x-2 transition-transform"
                  size={12}
                />
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="group inline-flex items-center gap-3 bg-gray-800 text-gray-200 font-semibold p-4 md:px-6 lg:px-8 py-3  lg:py-4  rounded-full border border-gray-700 hover:bg-gray-700 hover:border-purple-500 transition-all duration-300 text-sm "
              >
                <RefreshCw size={12} />
                Refresh Page
              </button>
            </div>

            {/* Bottom Decoration */}
            <div className="mt-10 md:mt-15 lg:mt-18 text-gray-300 text-sm">
              <p> © {new Date().getFullYear()} ArenoX. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

     { /* @ floating-particles : animated background particles for visual effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce animation-delay-4000"></div>
      </div>
    </>
  );
}

