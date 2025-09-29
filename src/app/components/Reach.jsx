"use client";
import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import x from "@/app/assets/x.svg";
import insta from "@/app/assets/instagram.svg";
import linkedin from "@/app/assets/linkedin.svg";
import facebook from "@/app/assets/facebook.svg";
import Socials from "./Socials";

export default function Reach() {
  const [isVisible, setIsVisible] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("reach-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("reach@justjjthings.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    } catch (err) {
      window.location.href = "mailto:reach@justjjthings.com";
    }
  };

  return (
    <>
      <section
        id="reach-section"
        className="bg-white relative overflow-hidden"
      >
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-30 animate-bounce"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + i * 8}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i * 0.3}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Main Content */}
          <div
            className={`text-center transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-5xl md:text-6xl pt-12 font-bold text-gray-900 mb-6 leading-tight">
                Let's{" "}
                <span className="bg-[#1810B0] bg-clip-text text-transparent animate-pulse">
                  Connect
                </span>
              </h2>

              <p
                className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                Share your thoughts or Contact for a collaboration!
              </p>
            </div>

            {/* Email Section */}
            <div
              className={`mb-16 transition-all duration-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="relative group inline-block">
                <button
                  onClick={handleEmailClick}
                  className="relative inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-105 active:scale-95 overflow-hidden border-2 border-[#1810B0] hover:border-white"
                >
                  {/* Animated gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1810B0]/10 via-[#1810B0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  
                  <Mail className="w-6 h-6 text-[#1810B0] animate-bounce relative z-10" />
                  <span className="relative z-10 text-[#1810B0] tracking-wider">reach@justjjthings.com</span>
                </button>

                {/* Outer glow border effect */}
                <div className="absolute -inset-1 bg-[#1810B0] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-md -z-10"></div>

                {/* Copy Success Message */}
                {emailCopied && (
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium animate-bounce whitespace-nowrap">
                    Email copied to clipboard!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="py-8"></div>
        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
        `}</style>
      </section>
      <Socials />
    </>
  );
}