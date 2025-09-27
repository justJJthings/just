import Image from "next/image";
import React from "react";
import apple from "@/app/assets/apple.svg"
import google from "@/app/assets/google.svg"
import youtube from "@/app/assets/youtube.svg"
import spotify from "@/app/assets/spotify.svg"

export default function Platforms() {
  const platforms = [
    { 
      src: apple, 
      alt: "Apple Podcasts", 
      name: "Apple Podcasts",
      bgColor: "bg-white hover:bg-gray-50"
    },
    { 
      src: spotify, 
      alt: "Spotify", 
      name: "Spotify",
      bgColor: "bg-white hover:bg-gray-50"
    },
    { 
      src: youtube, 
      alt: "YouTube", 
      name: "YouTube",
      bgColor: "bg-white hover:bg-gray-50"
    },
    { 
      src: google, 
      alt: "Google Podcasts", 
      name: "Google Podcasts",
      bgColor: "bg-white hover:bg-gray-50"
    }
  ];

  return (
    <section className="bg-[#1810B0] py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Listen On Your Favorite Platform
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Available on all major podcast platforms. Choose where you'd like to listen.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`${platform.bgColor} p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer`}
            >
              <div className="flex flex-col items-center justify-center space-y-3">
                <Image
                  src={platform.src}
                  alt={platform.alt}
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
                <p className="text-sm md:text-base font-semibold text-gray-800 text-center leading-tight">
                  {platform.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        
      </div>
    </section>
  );
}