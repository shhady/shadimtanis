import { CompareDemo } from "@/components/compareDemo/CompareDemo";
import Social from "@/components/socialMedia/Social";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-h-[100dvh]">
    <CompareDemo />
    <Social />
    </div>
  );
}
