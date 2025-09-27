"use client";
import React, { useState, useEffect } from "react";
import banner from "@/app/assets/banner.jpg";
import Image from "next/image";
import { ArrowRight, Play, Users, Target, Zap } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState({});
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('[id^="about-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      number: "10K+",
      label: "Active Listeners",
      delay: "delay-100",
    },
    {
      icon: Target,
      number: "50+",
      label: "Expert Interviews",
      delay: "delay-200",
    },
    { icon: Zap, number: "100+", label: "Success Stories", delay: "delay-300" },
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-[#1810B0] rounded-full opacity-10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Overlays */}
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div
          id="about-header"
          className={`max-w-4xl mx-auto text-center pt-12 transition-all duration-1000 transform ${
            isVisible["about-header"]
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-8 relative">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-shimmer">
              ABOUT
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#1810B0] rounded-full animate-expand"></div>
          </h1>
        </div>

        {/* Banner Image Section */}
        <div
          id="about-image"
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-1200 transform ${
            isVisible["about-image"]
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0"
          }`}
        >
          <div className="relative group">
            <div className="w-full h-[50vh] relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={banner}
                alt="About Banner"
                className={`w-full h-[50vh] object-cover transition-all duration-1000 group-hover:scale-110 ${
                  imageLoaded ? "blur-0" : "blur-sm"
                }`}
                onLoadingComplete={() => setImageLoaded(true)}
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button className="bg-white/20 backdrop-blur-sm p-6 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                  <Play
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                  />
                </button>
              </div>
            </div>

            {/* Decorative Border */}
            <div className="absolute -inset-1 bg-[#1810B0] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
          </div>
        </div>

        {/* Content Section */}
        <div
          id="about-content"
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 leading-relaxed"
        >
          {/* First Paragraph */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible["about-content"]
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <p className="text-lg md:text-xl space-y-8 leading-relaxed relative group">
              Opportunities in India have never been greater, but most people
              are trapped in brainrot. So, if you're someone with high ambition
              , big goals, and just need the right direction to start. That's
              where Just JJ Things comes in.
              <br />
              Hi, I'm your host JJ (Jivjot Singh) . On this channel, I bring in
              experts from different industries and break things down into a
              step-by-step actionable plan so you can build your dream business
              from scratch.
            </p>
            <p className="text-lg md:text-xl mt-4 leading-relaxed relative group">
              Opportunities in India have never been greater, but most people
              are trapped in brainrot. So, if you're someone with high ambition
              , big goals, and just need the right direction to start. That's
              where Just JJ Things comes in.
              <br />
              Hi, I'm your host JJ (Jivjot Singh) . On this channel, I bring in
              experts from different industries and break things down into a
              step-by-step actionable plan so you can build your dream business
              from scratch.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.3;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes expand {
          0% {
            width: 0;
          }
          100% {
            width: 8rem;
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes count {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        .animate-expand {
          animation: expand 1s ease-out 0.5s forwards;
          width: 0;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease-in-out infinite;
        }

        .animate-count {
          animation: count 0.8s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
}
