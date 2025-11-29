"use client";
import React, { useState, useEffect } from "react";
import banner from "@/app/assets/banner.jpg";
import logo from "@/app/assets/jj-things-transparent-logo.webp";
import Image from "next/image";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="relative w-full h-full">
          <Image
            src={banner}
            alt="Banner Image"
            className="w-full h-full object-cover"
            priority
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Logo Container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-7xl mx-auto px-4">
          {/* Logo with animation */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="flex justify-center items-center mb-8">
              <Image
                src={logo}
                alt="JJ Things Logo"
                width={580}
                height={580}
                className="w-56 h-56 md:w-[580px] md:h-[580px] object-contain"
                quality={100}
                priority
                unoptimized={false}
                placeholder="empty"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-2000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-text-1 {
          animation: fadeInLeft 1s ease-out forwards;
        }

        .animate-text-2 {
          animation: scaleIn 1s ease-out 0.5s both;
        }

        .animate-subtitle {
          animation: fadeInUp 1s ease-out 1s both;
        }

        .animate-cta {
          animation: fadeInUp 1s ease-out 1.5s both;
        }
      `}</style>
    </>
  );
}
