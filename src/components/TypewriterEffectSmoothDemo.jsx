"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Visit ",
    },
    {
      text: "www.hhhardware.com",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "website",
    }
  ];
  return (
    (<div className="flex flex-col items-center justify-center h-fit bg-[#A8DADC] rounded-tr-4xl rounded-bl-full py-10">
      <p className="text-neutral-600 dark:text-neutral-200 text-2xl font-bold  ">
        Explore Our Products And Services
      </p>
      <TypewriterEffectSmooth words={words} />
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm cursor-pointer">
          Explore Now
        </button>
        <button
          className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm cursor-pointer">
          Signup
        </button>
      </div>
    </div>)
  );
}
