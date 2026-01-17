import { useState, useEffect } from "react";
import { Link } from "wouter";

const FloatingHeart = ({ delay, left, size, duration }: { delay: number; left: string; size: number; duration: number }) => (
  <div
    className="absolute text-sky-300/40 animate-float pointer-events-none"
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
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-sky-300/50" />
    <span className="text-sky-400 text-xl">✈️</span>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-sky-300/50" />
  </div>
);

export default function ChapterSix() {
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
    <div className="min-h-screen bg-gradient-to-b from-[#F5FAFD] via-[#EFF8FF] to-[#F5FAFD] overflow-hidden relative">
      {/* Subtle pattern overlay with airplane motif */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10c-5 0-9 4-9 9 0 8 9 14 9 14s9-6 9-14c0-5-4-9-9-9z' fill='%23A5C4D4' fill-opacity='0.4'/%3E%3C/svg%3E")`,
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
            className={`inline-flex items-center gap-2 text-[#7B9CAA] hover:text-[#4D6B8B] transition-all duration-300 mb-8 group ${
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
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-200 to-indigo-100 flex items-center justify-center shadow-lg shadow-sky-200/30 animate-pulse">
                <span className="text-3xl">✈️</span>
              </div>
            </div>

            {/* Upcoming badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-100 to-indigo-100 border border-sky-200 rounded-full mb-4">
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-sky-600 uppercase tracking-wider" style={{ fontFamily: "'Lora', serif" }}>
                Coming August 2026
              </span>
            </div>

            <p 
              className="text-sm text-[#A5B4C4] uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Chapter Six — The Upcoming Chapter
            </p>

            <h1 
              className="font-serif text-3xl md:text-5xl text-[#4D6B8B] mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              When Pixels Become Reality
            </h1>
            
            <p 
              className="text-lg text-[#7B9CAA] max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Lora', serif" }}
            >
              August 2026 — The moment we finally meet face to face
            </p>
          </header>

          {/* Story content */}
          <div className="space-y-8">
            {/* Introduction */}
            <section 
              className={`transition-all duration-1000 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100 rounded-2xl p-8 shadow-lg shadow-sky-100/30">
                <p 
                  className="text-[#5A7A8A] leading-relaxed text-lg italic"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  "This chapter hasn't been written yet. But every day, we're counting down to the moment when our love story steps out of the screen and into the real world."
                </p>
              </div>
            </section>

            <HeartDivider />

            {/* The Dream */}
            <section 
              className={`transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 
                className="text-2xl text-[#4D6B8B] mb-4 flex items-center gap-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                <span className="text-sky-300">✨</span>
                The Dream We're Chasing
              </h2>
              <div className="space-y-4">
                <p 
                  className="text-[#5A7A8A] leading-relaxed text-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  August 2026. It's not just a date on a calendar anymore. It's the moment everything becomes real.
                </p>
                <p 
                  className="text-[#5A7A8A] leading-relaxed text-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  For months, we've known each other through pixels and voice calls, through late night gaming sessions and messages that made our hearts race. We've laughed together, fought battles together, survived drama together and fell in love together. But we've never touched. Never hugged. Never looked into each other's eyes in person.
                </p>
                <p 
                  className="text-[#5A7A8A] leading-relaxed text-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  That's all about to change.
                </p>
              </div>
            </section>

            <HeartDivider />

            {/* The Nervous Excitement */}
            <section 
              className={`transition-all duration-1000 delay-400 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 
                className="text-2xl text-[#4D6B8B] mb-4 flex items-center gap-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                <span className="text-sky-300">🦋</span>
                The Butterflies That Never Stop
              </h2>
              <div className="space-y-4">
                <p 
                  className="text-[#5A7A8A] leading-relaxed text-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Every time I think about it, my stomach flips. What if I forget how to talk? What if I'm awkward? What if I trip or say something stupid? All these years of being confident behind a screen and now I'm nervous about meeting the person who knows me better than anyone.
                </p>
                <p 
                  className="text-[#5A7A8A] leading-relaxed text-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  But then I remember. She's seen me at my worst. Through the drama, the fights, the moments when I wasn't my best self. And she stayed. She chose me anyway. If our love survived all of that through a screen, it's going to be <span className="text-[#4D6B8B] font-medium">even better</span> in person.
                </p>
              </div>
            </section>

            <HeartDivider />

            {/* The First Moments */}
            <section 
              className={`transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 
                className="text-2xl text-[#4D6B8B] mb-4 flex items-center gap-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                <span className="text-sky-300">🤗</span>
                Imagining the First Moments
              </h2>
              <div className="space-y-4">
                <p 
                  className="text-[#5A7A8A] leading-relaxed text-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  I keep imagining what it'll be like. Seeing her for the first time not as an avatar, but as a real person standing in front of me. The same girl who wore that 8-bit crown that made me fall in love.
                </p>
                <p 
                  className="text-[#5A7A8A] leading-relaxed text-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  The first hug. I think about that a lot. What it'll feel like to finally hold her, to feel her heart beating against mine. To know that this is real. <span className="text-[#4D6B8B] font-medium">She's real.</span> We're real.
                </p>
                <p 
                  className="text-[#5A7A8A] leading-relaxed text-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Holding her hand for the first time. Seeing her smile not through a screen but right there, inches away. Hearing her laugh not through earphones but with my own ears. Every small moment that other couples take for granted will be a miracle for us.
                </p>
              </div>
            </section>

            <HeartDivider />

            {/* The Countdown */}
            <section 
              className={`transition-all duration-1000 delay-600 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 
                className="text-2xl text-[#4D6B8B] mb-4 flex items-center gap-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                <span className="text-sky-300">⏳</span>
                Counting Down the Days
              </h2>
              <div className="space-y-4">
                <p 
                  className="text-[#5A7A8A] leading-relaxed text-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Every morning I wake up, it's one day closer. One day closer to the biggest moment of our story. Sometimes the wait feels impossible. Sometimes I want to just skip ahead to August and be there already.
                </p>
                <p 
                  className="text-[#5A7A8A] leading-relaxed text-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  But I've learned something through all of this. The waiting isn't wasted time. Every conversation we have, every late night we spend talking, every "good morning" and "goodnight" builds something stronger. By the time August comes, our love won't just be tested. It'll be <span className="text-[#4D6B8B] font-medium">unbreakable.</span>
                </p>
              </div>
            </section>

            <HeartDivider />

            {/* The Promise */}
            <section 
              className={`transition-all duration-1000 delay-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-200 rounded-2xl p-8 shadow-lg shadow-sky-100/30 text-center">
                <h2 
                  className="text-2xl text-[#4D6B8B] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  💕 The Beginning of Everything 💕
                </h2>
                <p 
                  className="text-[#5A7A8A] leading-relaxed text-lg mb-4"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Meeting in person won't be the end of our story. It'll be the beginning of a new chapter. A chapter where we can build memories not just in games, but in the real world. Where we can hold hands while watching sunsets, go on actual dates, create moments that exist beyond the screen.
                </p>
                <p 
                  className="text-[#5A7A8A] leading-relaxed text-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Our love started in pixels. But it won't end there.
                </p>
                <div className="mt-6 flex justify-center gap-2">
                  <span className="text-2xl">💍</span>
                  <span className="text-2xl">✈️</span>
                  <span className="text-2xl">💕</span>
                </div>
              </div>
            </section>

            {/* Signature */}
            <section 
              className={`text-center pt-8 transition-all duration-1000 delay-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p 
                className="text-lg text-[#4D6B8B] font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Alpha & PRiViLEDGE
              </p>
              <p 
                className="text-sm text-[#A5B4C4]"
                style={{ fontFamily: "'Lora', serif" }}
              >
                See you soon. In person. For real. ✈️
              </p>
            </section>
          </div>

          {/* Chapter Navigation */}
          <div 
            className={`mt-12 flex justify-between items-center gap-4 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="/chapter-five">
              <a
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-sm border border-sky-200 text-[#4D6B8B] rounded-full shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 hover:-translate-y-1"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span>←</span>
                <span className="hidden sm:inline">Chapter Five: The Battle That Became Us</span>
                <span className="sm:hidden">Previous</span>
              </a>
            </Link>
            
            <Link href="/#story">
              <a
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-sky-400 to-indigo-400 text-white rounded-full shadow-md hover:shadow-lg hover:from-sky-500 hover:to-indigo-500 transition-all duration-300 hover:-translate-y-1"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span>Back to Timeline</span>
                <span>✈️</span>
              </a>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
