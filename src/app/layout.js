"use client";
import Navbar from "./components/Navbar";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <style jsx global>{`
        @import url("https://cdn.jsdelivr.net/npm/@fontsource/aileron@4.5.0/index.css");

        body {
          font-family: "Aileron", sans-serif;
        }
      `}</style> */}
      <body className="font-aileron">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
