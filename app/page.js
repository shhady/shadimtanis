import { CompareDemo } from "@/components/compareDemo/CompareDemo";
import { HeroParallaxDemo } from "@/components/hero/HeroParallaxDemo";
import { FloatingNavDemo } from "@/components/navbar/FloatingNavDemo";
import { NavbarDemo } from "@/components/navbar/Navbar";
import Social from "@/components/socialMedia/Social";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <FloatingNavDemo />
    <HeroParallaxDemo />
    {/* <div className="w-full">

    <Social />
    </div> */}
    </div>
  );
}
