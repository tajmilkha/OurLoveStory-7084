import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { getMemoryBySlug, getAdjacentMemories, Memory } from "../data/memories";

const FloatingHeart = ({ delay, left, size, duration }: { delay: number; left: string; size: number; duration: number }) => (
  <div
    className="absolute text-rose-300/30 animate-float pointer-events-none"
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

function MemoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [isLoaded, setIsLoaded] = useState(false);
  const memory = getMemoryBySlug(slug || "");
  
  const adjacent = memory ? getAdjacentMemories(memory.id) : { prev: undefined, next: undefined };

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, [slug]);

  const hearts = [
    { delay: 0, left: "8%", size: 14, duration: 13 },
    { delay: 4, left: "88%", size: 16, duration: 12 },
    { delay: 2, left: "45%", size: 12, duration: 14 },
  ];

  if (!memory) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FDF8F5] via-[#FFF5F0] to-[#FDF8F5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-[#8B4D5C] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Memory not found
          </h1>
          <Link href="/">
            <a className="text-rose-400 hover:text-rose-500 underline" style={{ fontFamily: "'Lora', serif" }}>
              Return to our story
            </a>
          </Link>
        </div>
      </div>
    );
  }

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

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Back button */}
        <Link href="/#memories">
          <a 
            className={`inline-flex items-center gap-2 text-rose-400 hover:text-rose-500 transition-all duration-500 mb-8 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ fontFamily: "'Lora', serif" }}
          >
            <span>←</span>
            <span>Back to our story</span>
          </a>
        </Link>

        {/* Header */}
        <header 
          className={`text-center mb-10 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-4 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-200 to-amber-100 flex items-center justify-center shadow-lg shadow-rose-200/30">
              <span className="text-2xl">💕</span>
            </div>
          </div>
          <span 
            className="inline-block px-4 py-1.5 bg-rose-100/50 text-rose-500 rounded-full text-sm mb-3"
            style={{ fontFamily: "'Lora', serif" }}
          >
            {memory.date}
          </span>
          <h1 
            className="text-4xl md:text-5xl text-[#8B4D5C] mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {memory.title}
          </h1>
          <p 
            className="text-[#9C7B7B] text-lg"
            style={{ fontFamily: "'Lora', serif" }}
          >
            {memory.caption}
          </p>
        </header>

        {/* Photo */}
        <div 
          className={`relative mb-10 transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/30 border-4 border-white">
            <img 
              src={memory.src} 
              alt={memory.title}
              className="w-full h-auto"
            />
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 text-white/70 text-2xl">♥</div>
            <div className="absolute top-4 right-4 text-white/70 text-2xl">♥</div>
            <div className="absolute bottom-4 left-4 text-white/70 text-2xl">♥</div>
            <div className="absolute bottom-4 right-4 text-white/70 text-2xl">♥</div>
          </div>
        </div>

        {/* Story section */}
        <div 
          className={`bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg shadow-rose-100/50 border border-rose-100/50 mb-10 transition-all duration-700 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 
            className="text-2xl text-[#8B4D5C] mb-6 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ♥ Our Story ♥
          </h2>
          <p 
            className="text-[#9C7B7B] leading-relaxed text-lg text-center italic"
            style={{ fontFamily: "'Lora', serif" }}
          >
            {memory.story}
          </p>
        </div>

        {/* Navigation */}
        <nav 
          className={`flex justify-between items-center transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {adjacent.prev ? (
            <Link href={`/memory/${adjacent.prev.slug}`}>
              <a 
                className="group flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg border border-rose-100/50 hover:border-rose-200 transition-all duration-300"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
                <span className="text-[#8B4D5C]">Previous</span>
              </a>
            </Link>
          ) : (
            <div />
          )}
          
          {adjacent.next ? (
            <Link href={`/memory/${adjacent.next.slug}`}>
              <a 
                className="group flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg border border-rose-100/50 hover:border-rose-200 transition-all duration-300"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span className="text-[#8B4D5C]">Next</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </Link>
          ) : (
            <div />
          )}
        </nav>

        {/* Memory counter */}
        <div className="text-center mt-8">
          <p className="text-sm text-[#C4A5A5]" style={{ fontFamily: "'Lora', serif" }}>
            Memory {memory.id} of 6
          </p>
        </div>
      </div>
    </div>
  );
}

export default MemoryPage;
