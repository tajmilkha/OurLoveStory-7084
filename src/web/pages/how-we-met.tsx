import { useState, useEffect } from "react";
import { Link } from "wouter";

const FloatingHeart = ({ delay, left, size, duration }: { delay: number; left: string; size: number; duration: number }) => (
  <div
    className="absolute text-rose-300/40 animate-float pointer-events-none"
    style={{
      left,
      bottom: "-20px",
      fontSize: `${size}px`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }}
  >
    ♥
  </div>
);

const HeartDivider = () => (
  <div className="flex items-center justify-center gap-4 my-10">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300/50" />
    <span className="text-rose-400 text-xl">♥</span>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300/50" />
  </div>
);

export default function HowWeMet() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const hearts = [
    { delay: 0, left: "10%", size: 16, duration: 12 },
    { delay: 3, left: "20%", size: 12, duration: 14 },
    { delay: 6, left: "75%", size: 18, duration: 11 },
    { delay: 2, left: "85%", size: 14, duration: 13 },
    { delay: 5, left: "40%", size: 10, duration: 15 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF8F5] via-[#FFF5F0] to-[#FDF8F5] overflow-hidden relative">
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10c-5 0-9 4-9 9 0 8 9 14 9 14s9-6 9-14c0-5-4-9-9-9z' fill='%23D4A5A5' fill-opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating hearts */}
      {hearts.map((heart, i) => (
        <FloatingHeart key={i} {...heart} />
      ))}

      {/* Main content */}
      <div className="relative z-10 min-h-screen px-6 py-12">
        {/* Back button */}
        <Link href="/">
          <a 
            className={`inline-flex items-center gap-2 text-[#9C7B7B] hover:text-[#8B4D5C] transition-all duration-300 mb-8 group ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ fontFamily: "'Lora', serif" }}
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span>Back to Our Story</span>
          </a>
        </Link>

        {/* Page content */}
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <header 
            className={`text-center mb-12 transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Decorative icon */}
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-200 to-amber-100 flex items-center justify-center shadow-lg shadow-rose-200/30">
                <span className="text-3xl">🎮</span>
              </div>
            </div>

            <h1 
              className="font-serif text-4xl md:text-6xl text-[#8B4D5C] mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              How We Met
            </h1>
            
            <p 
              className="text-lg text-[#C4A5A5] italic"
              style={{ fontFamily: "'Lora', serif" }}
            >
              November 2025 — The match that changed everything
            </p>
          </header>

          <HeartDivider />

          {/* Story content card */}
          <div 
            className={`bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl shadow-rose-100/30 border border-rose-100/50 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Opening */}
            <section className="mb-10">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                A Random Lobby, A Perfect Match
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-4"
                style={{ fontFamily: "'Lora', serif" }}
              >
                It was an ordinary November night in 2025. Alpha logged into Roblox like any other 
                day—just looking for a fun game to pass the time. No expectations, no idea that 
                everything was about to change.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                PRi was there too, in the same random lobby. Two players out of thousands, 
                somehow placed in the same match. Call it luck, fate, or just good 
                matchmaking—but that one game was the beginning of everything.
              </p>
            </section>

            {/* The connection */}
            <section className="mb-10">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Something Felt Different
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-4"
                style={{ fontFamily: "'Lora', serif" }}
              >
                We started talking during the game. At first, it was just the usual gaming 
                banter—strategy calls, laughing at mistakes, celebrating wins together. 
                But something clicked. The conversation flowed so naturally, like we'd known 
                each other forever.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                "One more round" became three, then five, then we lost count. Hours passed 
                without us noticing. By the end of that night, we knew this wasn't just 
                a random friendship. It was something special.
              </p>
            </section>

            {/* Your story section - editable placeholder */}
            <section className="mb-10 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Our First Impressions
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-4 italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                [Alpha & PRi—this is your space to write about your first impressions of each other. 
                What did you notice? What made you want to keep playing together? 
                What was running through your mind that first night?]
              </p>
            </section>

            {/* The beginning */}
            <section>
              <h2 
                className="text-2xl text-[#8B4D5C] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                And So It Began...
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-4"
                style={{ fontFamily: "'Lora', serif" }}
              >
                After that first match, we kept coming back. Every night, same time, same 
                place—meeting in the virtual world that brought us together. What started 
                as gaming partners quickly became something more.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Looking back now, from our engagement to planning our first real-life meeting, 
                it's incredible to think it all started with one random Roblox match. 
                A game brought us together, but love made us stay.
              </p>
            </section>
          </div>

          {/* Bottom decoration */}
          <div 
            className={`mt-12 text-center transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-rose-300 animate-pulse" style={{ animationDelay: "0s" }}>♥</span>
              <span className="text-amber-300 animate-pulse" style={{ animationDelay: "0.2s" }}>♥</span>
              <span className="text-rose-300 animate-pulse" style={{ animationDelay: "0.4s" }}>♥</span>
            </div>
            <p 
              className="text-sm text-[#C4A5A5] italic"
              style={{ fontFamily: "'Lora', serif" }}
            >
              November 2025 — Where our forever started
            </p>
          </div>

          {/* Navigation to timeline */}
          <div 
            className={`mt-12 text-center transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="/#story">
              <a
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-sm border border-rose-200 text-[#8B4D5C] rounded-full shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 hover:-translate-y-1"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span>See Our Full Timeline</span>
                <span>→</span>
              </a>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
