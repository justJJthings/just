import Image from "next/image";
import Link from "next/link";
import React from "react";
import apple from "@/app/assets/apple.svg";
import music from "@/app/assets/music.svg";
import youtube from "@/app/assets/youtube.svg";
import spotify from "@/app/assets/spotify.svg";

export default function Platforms() {
  const platforms = [
    {
      src: apple,
      alt: "Apple Podcasts",
      link: "https://podcasts.apple.com/us/podcast/just-jj-things/id1848556572",
      name: "Apple Podcasts",
    },
    {
      src: spotify,
      alt: "Spotify",
      link: "https://creators.spotify.com/pod/show/0mNLRCDt5DhE9m6Rja4gYf/home",
      name: "Spotify",
    },
    {
      src: youtube,
      alt: "YouTube",
      link: "https://www.youtube.com/@JustJJThings",
      name: "YouTube",
    },
    {
      src: music,
      alt: "Amazon Music",
      link: "https://music.amazon.in/profiles/fzwrn4ppc7kpahtkbnqtzwcvoe",
      name: "Amazon Music",
    },
  ];

  return (
    <section className="bg-black py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Available On
          </h2>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {platforms.map((platform, index) => (
            <Link
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-2"
            >
              {/* Main Card */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl transition-all duration-500 cursor-pointer group-hover:scale-110 relative overflow-hidden z-10">
                <div className="flex flex-col items-center justify-center space-y-3">
                  <Image
                    src={platform.src}
                    alt={platform.alt}
                    width={48}
                    height={48}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-500 group-hover:scale-110"
                  />
                  <p className="text-sm md:text-base font-semibold text-gray-800 text-center leading-tight">
                    {platform.name}
                  </p>
                </div>
              </div>

              {/* Decorative Glow Border - Similar to About.jsx */}
              <div className="absolute -inset-2 bg-[#1810B0] rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-md"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}