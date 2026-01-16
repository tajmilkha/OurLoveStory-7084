import { useEffect, useState } from "react";

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
  <div className="flex items-center justify-center gap-4 my-12">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300/50" />
    <span className="text-rose-400 text-xl">♥</span>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300/50" />
  </div>
);

function Index() {
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
    { delay: 8, left: "60%", size: 16, duration: 12 },
    { delay: 1, left: "92%", size: 12, duration: 14 },
    { delay: 4, left: "5%", size: 14, duration: 13 },
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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16">
        {/* Hero Section */}
        <header 
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative top element */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-200 to-amber-100 flex items-center justify-center shadow-lg shadow-rose-200/30">
              <span className="text-4xl">💕</span>
            </div>
          </div>

          <h1 
            className="font-serif text-5xl md:text-7xl text-[#8B4D5C] mb-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Love Story
          </h1>

          <p 
            className={`text-lg md:text-xl text-[#9C7B7B] leading-relaxed max-w-2xl mx-auto mb-4 transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "'Lora', serif" }}
          >
            It started with a random match in a game lobby. Two strangers, 
            miles apart, connected by pixels and late-night voice chats. 
            What began as "one more round" turned into hours of laughter, 
            secrets shared at 2 AM, and a feeling neither of us expected.
          </p>

          <HeartDivider />

          <p 
            className={`text-lg md:text-xl text-[#9C7B7B] leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "'Lora', serif" }}
          >
            From virtual adventures to real-life butterflies, we found something 
            rare in the most unexpected place. This is our story—a digital 
            scrapbook of the moments, memories, and little things that made 
            us fall for each other.
          </p>
        </header>

        {/* Call to Action */}
        <div 
          className={`mt-16 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#story"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-full shadow-lg shadow-rose-300/40 hover:shadow-xl hover:shadow-rose-300/50 transition-all duration-300 hover:-translate-y-1"
            style={{ fontFamily: "'Lora', serif" }}
          >
            <span className="text-lg">Explore Our Story</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Decorative bottom element */}
        <div 
          className={`mt-24 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex gap-2">
            <span className="text-rose-300 animate-pulse" style={{ animationDelay: "0s" }}>♥</span>
            <span className="text-amber-300 animate-pulse" style={{ animationDelay: "0.2s" }}>♥</span>
            <span className="text-rose-300 animate-pulse" style={{ animationDelay: "0.4s" }}>♥</span>
          </div>
          <p className="text-sm text-[#C4A5A5] italic" style={{ fontFamily: "'Lora', serif" }}>
            Every love story is beautiful, but ours is my favorite
          </p>
        </div>
      </div>

      {/* Soft vignette effect */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-t from-rose-100/20 via-transparent to-amber-50/20" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(45deg);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Index;
