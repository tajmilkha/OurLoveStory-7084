import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { getMemoryBySlug, getAdjacentMemories, getTotalMemories, Memory } from "../data/memories";

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

const PhotoPlaceholder = ({ index }: { index: number }) => (
  <div className="relative rounded-2xl overflow-hidden border-2 border-dashed border-rose-200/60 bg-gradient-to-br from-rose-50/50 to-amber-50/50 aspect-video flex flex-col items-center justify-center p-6 text-center group hover:border-rose-300 transition-colors duration-300">
    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
      <span className="text-xl">📷</span>
    </div>
    <p 
      className="text-[#C4A5A5] font-medium mb-1"
      style={{ fontFamily: "'Lora', serif" }}
    >
      Add Photo {index}
    </p>
    <p 
      className="text-[#D4B5B5] text-sm"
      style={{ fontFamily: "'Lora', serif" }}
    >
      Upload your memory here
    </p>
  </div>
);

function MemoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [isLoaded, setIsLoaded] = useState(false);
  const memory = getMemoryBySlug(slug || "");
  const totalMemories = getTotalMemories();
  
  const adjacent = memory ? getAdjacentMemories(memory.id) : { prev: undefined, next: undefined };

  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), 50);
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
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

  const hasAdditionalImages = memory.additionalImages && memory.additionalImages.length > 0;
  const hasMultipleParagraphs = memory.storyParagraphs && memory.storyParagraphs.length > 0;

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

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
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

        {/* Main Photo */}
        <div 
          className={`relative mb-8 transition-all duration-700 delay-200 ${
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

        {/* Photo Gallery Section */}
        <div 
          className={`mb-10 transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-6">
            <h2 
              className="text-xl text-[#8B4D5C] inline-flex items-center gap-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <span>📸</span>
              <span>More Photos from this Memory</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hasAdditionalImages ? (
              memory.additionalImages.map((img, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg shadow-rose-100/30 border-2 border-white">
                  <img 
                    src={img} 
                    alt={`${memory.title} - Photo ${i + 2}`}
                    className="w-full h-auto"
                  />
                </div>
              ))
            ) : (
              <>
                <PhotoPlaceholder index={2} />
                <PhotoPlaceholder index={3} />
              </>
            )}
          </div>
          
          {/* Placeholder hint */}
          {!hasAdditionalImages && (
            <p 
              className="text-center text-[#C4A5A5] text-sm mt-4 italic"
              style={{ fontFamily: "'Lora', serif" }}
            >
              💡 Add more photos to this memory to create a richer scrapbook entry
            </p>
          )}
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
          
          {/* Story content - supports multiple paragraphs */}
          <div className="space-y-4">
            {hasMultipleParagraphs ? (
              memory.storyParagraphs.map((paragraph, i) => (
                <p 
                  key={i}
                  className="text-[#9C7B7B] leading-relaxed text-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg text-center italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {memory.story}
              </p>
            )}
          </div>
          
          {/* Divider */}
          <div className="flex justify-center my-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-200" />
              <span className="text-rose-300">♥</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-200" />
            </div>
          </div>
          
          {/* Add Your Story Section */}
          <div className="bg-gradient-to-br from-rose-50/50 to-amber-50/50 rounded-2xl p-6 border border-dashed border-rose-200/60">
            <div className="text-center mb-4">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">✍️</span>
              </div>
              <h3 
                className="text-lg text-[#8B4D5C] font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Add to Your Story
              </h3>
            </div>
            <p 
              className="text-[#C4A5A5] text-center text-sm mb-4"
              style={{ fontFamily: "'Lora', serif" }}
            >
              This is your space to write more about this memory. What made this moment special? What were you feeling? What do you remember most? Share your personal thoughts here...
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/70 rounded-full text-xs text-[#9C7B7B]" style={{ fontFamily: "'Lora', serif" }}>
                <span>💭</span> What you were thinking
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/70 rounded-full text-xs text-[#9C7B7B]" style={{ fontFamily: "'Lora', serif" }}>
                <span>💫</span> Inside jokes
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/70 rounded-full text-xs text-[#9C7B7B]" style={{ fontFamily: "'Lora', serif" }}>
                <span>🎵</span> Songs you associate
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/70 rounded-full text-xs text-[#9C7B7B]" style={{ fontFamily: "'Lora', serif" }}>
                <span>🌟</span> Why this matters
              </span>
            </div>
          </div>
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
            Memory {memory.id} of {totalMemories}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MemoryPage;
