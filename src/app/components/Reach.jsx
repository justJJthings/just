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

  const socialLinks = [
    {
      icon: x,
      label: "X (Twitter)",
      href: "#",
      color: "text-[#000000]",
      bgColor: "bg-[#000000]/10",
      borderColor: "border-[#000000]/20",
      hoverColor: "hover:text-[#000000]",
      hoverBg: "hover:bg-[#000000]/20",
      delay: "delay-100",
    },
    {
      icon: insta,
      label: "Instagram",
      href: "#",
      color: "text-[#E4405F]",
      bgColor: "bg-[#E4405F]/10",
      borderColor: "border-[#E4405F]/20",
      hoverColor: "hover:text-[#E4405F]",
      hoverBg: "hover:bg-[#E4405F]/20",
      delay: "delay-200",
    },
    {
      icon: linkedin,
      label: "LinkedIn",
      href: "#",
      color: "text-[#0077B5]",
      bgColor: "bg-[#0077B5]/10",
      borderColor: "border-[#0077B5]/20",
      hoverColor: "hover:text-[#0077B5]",
      hoverBg: "hover:bg-[#0077B5]/20",
      delay: "delay-300",
    },
    {
      icon: facebook,
      label: "Facebook",
      href: "#",
      color: "text-[#1877F2]",
      bgColor: "bg-[#1877F2]/10",
      borderColor: "border-[#1877F2]/20",
      hoverColor: "hover:text-[#1877F2]",
      hoverBg: "hover:bg-[#1877F2]/20",
      delay: "delay-400",
    },
  ];

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
            <div className="relative group">
              <button
                onClick={handleEmailClick}
                className="inline-flex items-center space-x-4 bg-[#1810B0] px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95 relative overflow-hidden group"
                >
                <Mail className="w-6 h-6 animate-bounce" />
                <span className="relative z-10">reach@justjjthings.com</span>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transition-transform duration-700"></div>
              </button>

              {/* Copy Success Message */}
              {emailCopied && (
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium animate-bounce">
                  Email copied to clipboard!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        
      </div>
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
