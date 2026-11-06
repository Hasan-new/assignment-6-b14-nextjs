import React from "react";

const Hero = () => {
  return (
    <section className="bg-base-100">
      <div className="container mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Div - 60% */}
          <div className="w-full md:w-[60%]">
            <p className="text-[#C2F800] font-semibold uppercase tracking-widest mb-4">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <button className="text-[#C2F800] border-2 border-[#C2F800] hover:bg-[#C2F800] hover:text-base-100 rounded px-8 py-3 transition duration-300">
              BROWSE WORKOUTS
            </button>
          </div>

          {/* Right Div - 40% */}
          <div className="w-full md:w-[40%]">
            <img
              src="/banner.png"
              alt="Fitness Banner"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
