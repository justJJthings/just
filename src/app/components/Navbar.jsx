"use client";
import React, { useState } from "react";
import { Menu, X, Play } from "lucide-react";
import logo from "@/app/assets/jj-things-logo.png";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-black text-white relative z-50 py-4">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-2 cursor-pointer group">
              <span className="text-2xl md:text-[32px] font-bold tracking-tight">
                <Image
                  src={logo}
                  alt="Just JJ Things Logo"
                  width={150}
                  height={200}
                  className="w-32 md:w-44 object-contain"
                />
              </span>
            </div>

            {/* Menu Button - All Devices */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleMenu}
                className="text-[#1810B0] hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors duration-200 p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 hidden" />
                ) : (
                  <Menu className="h-12 w-12" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-10 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-70 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMenu}
        ></div>

        {/* Right Side Menu - All Devices */}
        <div
          className={`fixed top-0 right-0 h-full w-80 md:w-[700px] bg-white  transform transition-transform duration-500 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 text-[#1810B0]">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={toggleMenu}
                className="text-[#1810B0] hover:text-gray-300 transition-colors duration-200"
              >
                <X className="h-12 w-12 font-light" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6   text-2xl">
              <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>
                HOME
              </MobileNavLink>
              <MobileNavLink
                href="#episodes"
                onClick={() => setIsMenuOpen(false)}
              >
                PODCASTS
              </MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
                ABOUT
              </MobileNavLink>
              <MobileNavLink
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </MobileNavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Subtle divider line */}
     
    </>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-[#1810B0] hover:text-gray-300 flex justify-center items-center text-5xl font-bold transition-all duration-300 py-3  hover:pl-4"
    >
      {children}
    </a>
  );
}