import React, { useState } from "react";
import Image from "next/image";
import x from "@/app/assets/icon-x.svg";
import insta from "@/app/assets/icon-ig.svg";
import linkedin from "@/app/assets/icon-li.svg";
import facebook from "@/app/assets/icon-fb.svg";
import x_black from "@/app/assets/x.svg";
import insta_black from "@/app/assets/ig.svg";
import linkedin_black from "@/app/assets/li.svg";
import facebook_black from "@/app/assets/fb.svg";

export default function Socials() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialIcons = [
    { id: 'facebook', normal: facebook, black: facebook_black, alt: 'Facebook' },
    { id: 'linkedin', normal: linkedin, black: linkedin_black, alt: 'LinkedIn' },
    { id: 'instagram', normal: insta, black: insta_black, alt: 'Instagram' },
    { id: 'x', normal: x, black: x_black, alt: 'X (Twitter)' }
  ];

  const SocialIcon = ({ icon, index }) => (
    <div 
      className="relative flex justify-center items-center h-24 cursor-pointer overflow-hidden group "
      onMouseEnter={() => setHoveredIcon(`${icon.id}-${index}`)}
      onMouseLeave={() => setHoveredIcon(null)}
    >
      {/* Background fill animation */}
      <div className="absolute inset-0 bg-[#1810B0] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
      
      {/* Icon */}
      <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
        <Image 
          src={hoveredIcon === `${icon.id}-${index}` ? icon.black : icon.normal} 
          alt={icon.alt} 
          width={40} 
          height={40}
          className="w-10 h-10" 
        />
      </div>
    </div>
  );

  return (
    <footer className="bg-black">
      {/* Desktop layout - 4 columns */}
      <div className="hidden md:grid md:grid-cols-4">
        {socialIcons.map((icon, index) => (
          <SocialIcon key={`desktop-${icon.id}`} icon={icon} index={`desktop-${index}`} />
        ))}
      </div>

      {/* Mobile layout - 2x2 grid */}
      <div className="md:hidden">
        {/* First row - 2 columns */}
        <div className="grid grid-cols-2 ">
          <div className="">
            <SocialIcon icon={socialIcons[0]} index="mobile-0" />
          </div>
          <SocialIcon icon={socialIcons[1]} index="mobile-1" />
        </div>

        {/* Second row - 2 columns */}
        <div className="grid grid-cols-2">
          <div className="">
            <SocialIcon icon={socialIcons[2]} index="mobile-2" />
          </div>
          <SocialIcon icon={socialIcons[3]} index="mobile-3" />
        </div>
      </div>

      <div className="bg-black px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 max-w-7xl mx-auto">
          <div className="text-gray-500 text-sm">
            <span className="mr-6 hover:text-gray-300 cursor-pointer transition-colors">Terms & Conditions</span>
            <span className="mr-6 hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Cookie Policy</span>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Just JJ Things. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}