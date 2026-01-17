import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import { memories, Memory } from "../data/memories";

interface TimelineMilestone {
  date: string;
  title: string;
  description: string;
  icon: string;
}

const timelineMilestones: TimelineMilestone[] = [
  {
    date: "Mid-October 2025",
    title: "First Match",
    description: "A random Roblox lobby brought Alpha and PRi together. We were just two players in a game, but something about that match felt different. That one game changed everything.",
    icon: "🎮",
  },
  {
    date: "Mid-November 2025",
    title: "Started Hanging Out",
    description: "What started as random matches became intentional. Weeks of late-night gaming sessions, getting to know each other, and falling for someone we'd never even seen. Every game was a date.",
    icon: "🌙",
  },
  {
    date: "November 23, 2025",
    title: "Became Official",
    description: "After weeks of talking, laughing, and falling hard, Alpha asked PRi to be official. She said yes without hesitation. Our love story officially began.",
    icon: "💝",
  },
  {
    date: "Around November 30, 2025",
    title: "First Voice Call",
    description: "About a week after becoming official, we finally heard each other's voices. That nervous 'hello' turned into hours of laughter and late-night conversations we never wanted to end.",
    icon: "📞",
  },
  {
    date: "December 2025",
    title: "Epic 2v16 Game War",
    description: "When the BR Team touched PRi, Alpha snapped. For hours, we fought side by side—two against sixteen. She never left. We became the strongest couple in the game that day.",
    icon: "⚔️",
  },
  {
    date: "January 9, 2026",
    title: "Got Engaged",
    description: "Alpha asked PRi to spend forever together, and she said yes! From pixels to promises, our virtual love story became a real-life commitment. Forever starts now.",
    icon: "💍",
  },
  {
    date: "August 2026",
    title: "First IRL Meeting",
    description: "The moment we've been waiting for. After months of video calls and virtual dates, we'll finally hold each other for real. Our countdown has begun.",
    icon: "✈️",
  },
];

const GalleryCard = ({ memory, index, isVisible }: { memory: Memory; index: number; isVisible: boolean }) => (
  <Link href={`/memory/${memory.slug}`}>
    <a
      className={`group relative overflow-hidden rounded-2xl aspect-square transition-all duration-700 ease-out block cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Actual image */}
      <img 
        src={memory.src} 
        alt={memory.caption}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#8B4D5C]/80 via-[#8B4D5C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
      
      {/* Caption and CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p 
          className="text-white text-sm font-medium text-center drop-shadow-lg mb-2"
          style={{ fontFamily: "'Lora', serif" }}
        >
          {memory.caption}
        </p>
        <p 
          className="text-white/80 text-xs text-center"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Click to read our story →
        </p>
      </div>
      
      {/* Corner heart decoration */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-lg drop-shadow-lg">♥</span>
      </div>
      
      {/* Subtle border */}
      <div className="absolute inset-0 rounded-2xl border border-white/30 group-hover:border-white/50 transition-colors duration-300" />
    </a>
  </Link>
);

const TimelineItem = ({ milestone, index, isVisible }: { milestone: TimelineMilestone; index: number; isVisible: boolean }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8 gap-4`}>
      {/* Content card */}
      <div 
        className={`md:w-5/12 w-full transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-rose-100/50 border border-rose-100/50 hover:shadow-xl hover:shadow-rose-200/40 transition-all duration-300 hover:-translate-y-1 group">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{milestone.icon}</span>
            <span className="text-sm text-rose-400 font-medium tracking-wide" style={{ fontFamily: "'Lora', serif" }}>
              {milestone.date}
            </span>
          </div>
          <h3 
            className="text-xl text-[#8B4D5C] mb-2 font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {milestone.title}
          </h3>
          <p 
            className="text-[#9C7B7B] leading-relaxed text-sm"
            style={{ fontFamily: "'Lora', serif" }}
          >
            {milestone.description}
          </p>
        </div>
      </div>

      {/* Center timeline marker */}
      <div className="md:w-2/12 flex justify-center relative">
        <div 
          className={`w-5 h-5 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 border-4 border-white shadow-lg z-10 transition-all duration-500 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}
          style={{ transitionDelay: `${index * 150 + 100}ms` }}
        >
          <div className="absolute inset-0 rounded-full bg-rose-400 animate-ping opacity-20" />
        </div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="md:w-5/12 hidden md:block" />
    </div>
  );
};

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
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const timelineRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === timelineRef.current) {
              setTimelineVisible(true);
            }
            if (entry.target === galleryRef.current) {
              setGalleryVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
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
            It started with a random Roblox match in November 2025. Alpha and PRi, 
            two strangers from different places, connected by pixels and late-night 
            gaming sessions. What began as "one more round" turned into hours of 
            laughter, secrets shared at 2 AM, and a love neither of us saw coming.
          </p>

          <HeartDivider />

          <p 
            className={`text-lg md:text-xl text-[#9C7B7B] leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "'Lora', serif" }}
          >
            From virtual adventures to a real engagement, we found our forever 
            in the most unexpected place. Now we're counting down to August 2026, 
            when we'll finally meet in person. This is our story a digital scrapbook 
            of how two gamers became soulmates.
          </p>
        </header>

        {/* Call to Action */}
        <div 
          className={`mt-16 flex flex-col items-center gap-6 transition-all duration-1000 delay-700 ${
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
          
          {/* Story Chapters */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-[#C4A5A5]" style={{ fontFamily: "'Lora', serif" }}>Read Our Story:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/how-we-met">
                <a
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-rose-200 text-[#8B4D5C] rounded-full shadow-sm hover:shadow-md hover:bg-white/90 hover:border-rose-300 transition-all duration-300 text-sm"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  <span className="text-rose-400">🎮</span>
                  <span>Chapter One</span>
                </a>
              </Link>
              <Link href="/chapter-two">
                <a
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-rose-200 text-[#8B4D5C] rounded-full shadow-sm hover:shadow-md hover:bg-white/90 hover:border-rose-300 transition-all duration-300 text-sm"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  <span className="text-rose-400">⚔️</span>
                  <span>Chapter Two</span>
                </a>
              </Link>
              <Link href="/chapter-three">
                <a
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-rose-200 text-[#8B4D5C] rounded-full shadow-sm hover:shadow-md hover:bg-white/90 hover:border-rose-300 transition-all duration-300 text-sm"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  <span className="text-rose-400">💕</span>
                  <span>Chapter Three</span>
                </a>
              </Link>
              <Link href="/chapter-four">
                <a
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-rose-200 text-[#8B4D5C] rounded-full shadow-sm hover:shadow-md hover:bg-white/90 hover:border-rose-300 transition-all duration-300 text-sm"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  <span className="text-rose-400">⚔️</span>
                  <span>Chapter Four</span>
                </a>
              </Link>
              <Link href="/chapter-five">
                <a
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-400 to-amber-300 text-white rounded-full shadow-md hover:shadow-lg hover:from-rose-500 hover:to-amber-400 transition-all duration-300 text-sm"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  <span>💍</span>
                  <span>Chapter Five</span>
                </a>
              </Link>
              <Link href="/chapter-six">
                <a
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-300 to-indigo-300 text-white rounded-full shadow-md hover:shadow-lg hover:from-sky-400 hover:to-indigo-400 transition-all duration-300 text-sm border border-sky-200/50 relative"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
                  <span>✈️</span>
                  <span>Chapter Six</span>
                  <span className="text-xs opacity-75">(Aug 2026)</span>
                </a>
              </Link>
            </div>
          </div>
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

      {/* Our Story Timeline Section */}
      <section 
        id="story"
        ref={timelineRef}
        className="relative z-10 py-24 px-6"
      >
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
          timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 
            className="text-4xl md:text-5xl text-[#8B4D5C] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Story
          </h2>
          <p 
            className="text-[#9C7B7B] text-lg"
            style={{ fontFamily: "'Lora', serif" }}
          >
            The chapters of how we fell in love
          </p>
          <HeartDivider />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-200 transform -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-200 md:hidden" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {timelineMilestones.map((milestone, index) => (
              <TimelineItem 
                key={index} 
                milestone={milestone} 
                index={index} 
                isVisible={timelineVisible} 
              />
            ))}
          </div>

          {/* End heart */}
          <div className={`flex justify-center mt-16 transition-all duration-700 ${
            timelineVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`} style={{ transitionDelay: "900ms" }}>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center shadow-lg shadow-rose-300/40">
              <span className="text-white text-xl">♥</span>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section
        ref={galleryRef}
        className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent"
      >
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
          galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 
            className="text-4xl md:text-5xl text-[#8B4D5C] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Pixelated Memories
          </h2>
          <p 
            className="text-[#9C7B7B] text-lg"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Screenshots from our gaming adventures together
          </p>
          <HeartDivider />
        </div>

        {/* Gallery grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {memories.map((memory, index) => (
              <GalleryCard 
                key={memory.id} 
                memory={memory} 
                index={index} 
                isVisible={galleryVisible} 
              />
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className={`flex justify-center mt-16 transition-all duration-700 ${
          galleryVisible ? "opacity-100" : "opacity-0"
        }`} style={{ transitionDelay: "800ms" }}>
          <p 
            className="text-[#C4A5A5] italic text-center"
            style={{ fontFamily: "'Lora', serif" }}
          >
            More memories to come... 💕
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            <span className="text-rose-300 text-lg">♥</span>
            <span className="text-amber-300 text-lg">♥</span>
            <span className="text-rose-300 text-lg">♥</span>
          </div>
          <p 
            className="text-[#9C7B7B] text-sm"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Made with love, for the one I love
          </p>
        </div>
      </footer>

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
