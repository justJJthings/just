import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Platforms from "./components/Platforms";
import Reach from "./components/Reach";

export default function Home() {
  return (
    <>
      <title>Just JJ Things</title>

      <Hero/>
      <About/>
      <Platforms/>
      <Reach/>
    </>
  );
}
