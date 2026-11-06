import Hero from "@/components/Hero";
import TheLibrary from "@/components/TheLibrary";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="min-h-[70vh]">
        
        <Hero />
        <TheLibrary />
      </div>
    </div>
  );
}
