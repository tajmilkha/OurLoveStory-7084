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

// Floating heart for the song player animation
const SongFloatingHeart = ({ delay, left, isPlaying }: { delay: number; left: string; isPlaying: boolean }) => (
  <div
    className={`absolute text-rose-400/60 pointer-events-none transition-opacity duration-500 ${
      isPlaying ? 'opacity-100' : 'opacity-0'
    }`}
    style={{
      left,
      bottom: "0px",
      fontSize: "16px",
      animation: isPlaying ? `floatUp 4s ease-out ${delay}s infinite` : 'none',
    }}
  >
    ♥
  </div>
);

// Interactive Song Player Component
const InteractiveSongPlayer = ({ memory, isLoaded }: { memory: Memory; isLoaded: boolean }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  
  useEffect(() => {
    if (isPlaying && memory.songLyrics) {
      const timer = setInterval(() => {
        setVisibleLines(prev => {
          if (prev >= memory.songLyrics!.length) {
            return prev;
          }
          return prev + 1;
        });
      }, 800);
      return () => clearInterval(timer);
    } else if (!isPlaying) {
      setVisibleLines(0);
    }
  }, [isPlaying, memory.songLyrics]);

  // Generate hearts for animation
  const songHearts = [
    { delay: 0, left: "5%" },
    { delay: 1.5, left: "15%" },
    { delay: 0.8, left: "85%" },
    { delay: 2, left: "95%" },
    { delay: 1.2, left: "50%" },
    { delay: 2.5, left: "75%" },
    { delay: 0.5, left: "25%" },
  ];

  // If this memory has the interactive player
  if (memory.hasInteractivePlayer && memory.songLyrics) {
    return (
      <div 
        className={`mb-10 transition-all duration-700 delay-500 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <style>{`
          @keyframes floatUp {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0;
            }
            10% {
              opacity: 0.8;
            }
            50% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(-300px) scale(0.5);
              opacity: 0;
            }
          }
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(244, 63, 94, 0.3), 0 0 40px rgba(244, 63, 94, 0.1);
            }
            50% {
              box-shadow: 0 0 30px rgba(244, 63, 94, 0.5), 0 0 60px rgba(244, 63, 94, 0.2);
            }
          }
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes color-shift {
            0%, 100% {
              background: linear-gradient(135deg, #FDF2F8 0%, #FFF5F0 50%, #FDF2F8 100%);
            }
            50% {
              background: linear-gradient(135deg, #FECDD3 0%, #FED7AA 50%, #FECDD3 100%);
            }
          }
        `}</style>
        
        <div 
          className={`relative rounded-2xl p-6 border overflow-hidden transition-all duration-1000 ${
            isPlaying 
              ? 'border-rose-300 bg-gradient-to-br from-rose-100/90 via-amber-50/70 to-rose-100/90' 
              : 'border-rose-200/40 bg-gradient-to-br from-rose-50/80 via-amber-50/50 to-rose-50/80'
          }`}
          style={{
            animation: isPlaying ? 'color-shift 6s ease-in-out infinite' : 'none',
          }}
        >
          {/* Animated floating hearts */}
          {songHearts.map((heart, i) => (
            <SongFloatingHeart key={i} {...heart} isPlaying={isPlaying} />
          ))}
          
          {/* Vinyl record decoration */}
          <div className="absolute -right-8 -top-8 w-32 h-32 opacity-10">
            <div 
              className="w-full h-full rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#333] relative"
              style={{
                animation: isPlaying ? 'spin-slow 4s linear infinite' : 'none',
              }}
            >
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#222] border border-white/10" />
              <div className="absolute inset-[40%] rounded-full bg-rose-400" />
            </div>
          </div>
          
          {/* Musical notes decoration */}
          <div className={`absolute left-4 top-4 text-xl transition-all duration-500 ${isPlaying ? 'text-rose-400/60 animate-bounce' : 'text-rose-200/40'}`}>♪</div>
          <div className={`absolute right-12 bottom-4 text-lg transition-all duration-500 ${isPlaying ? 'text-rose-400/60 animate-bounce' : 'text-rose-200/40'}`} style={{ animationDelay: '0.5s' }}>♫</div>
          
          <div className="relative text-center">
            {/* Interactive play button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="relative w-20 h-20 mx-auto mb-4 group focus:outline-none"
              style={{
                animation: isPlaying ? 'pulse-glow 2s ease-in-out infinite' : 'none',
              }}
            >
              {/* Vinyl record visual */}
              <div 
                className={`absolute inset-0 rounded-full bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] shadow-lg transition-transform duration-300 group-hover:scale-105`}
                style={{
                  animation: isPlaying ? 'spin-slow 3s linear infinite' : 'none',
                }}
              >
                <div className="absolute inset-2 rounded-full border border-white/5" />
                <div className="absolute inset-3 rounded-full border border-white/5" />
                <div className="absolute inset-4 rounded-full border border-white/5" />
                <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center">
                  <span className="text-white text-lg transition-transform duration-200">
                    {isPlaying ? '⏸' : '▶'}
                  </span>
                </div>
              </div>
              {/* Spinning effect glow */}
              <div className={`absolute -inset-2 rounded-full blur-md -z-10 transition-all duration-500 ${
                isPlaying ? 'bg-rose-400/40' : 'bg-rose-400/20'
              }`} />
            </button>
            
            <h3 
              className="text-lg text-[#8B4D5C] font-medium mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Song
            </h3>
            
            {/* Song title and artist */}
            <div className="mb-4">
              <p 
                className="text-[#8B4D5C] font-semibold text-xl mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {memory.songTitle}
              </p>
              <p 
                className="text-[#B89999] text-sm italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {memory.songArtist}
              </p>
            </div>
            
            {/* Play instruction */}
            <p 
              className={`text-sm mb-4 transition-all duration-500 ${
                isPlaying ? 'text-rose-500' : 'text-[#C4A5A5]'
              }`}
              style={{ fontFamily: "'Lora', serif" }}
            >
              {isPlaying ? '♪ Now playing... ♪' : 'Tap to reveal our love song'}
            </p>
            
            {/* Animated lyrics container */}
            <div 
              className={`overflow-hidden transition-all duration-700 ease-out ${
                isPlaying ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-inner border border-rose-100/50 text-left">
                <div className="space-y-2">
                  {memory.songLyrics.map((line, index) => {
                    const isVerse = line.startsWith('♪');
                    const isEmpty = line === '';
                    const isVisible = index < visibleLines;
                    
                    return (
                      <p
                        key={index}
                        className={`transition-all duration-500 ${
                          isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        } ${
                          isVerse 
                            ? 'text-rose-500 font-semibold text-center mt-4 mb-2' 
                            : isEmpty 
                              ? 'h-2' 
                              : 'text-[#7A5A5A]'
                        }`}
                        style={{ 
                          fontFamily: isVerse ? "'Cormorant Garamond', serif" : "'Lora', serif",
                          transitionDelay: `${index * 50}ms`,
                        }}
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>
                
                {/* Heart divider at the end */}
                {visibleLines >= memory.songLyrics.length && (
                  <div className="flex items-center justify-center gap-2 mt-6 animate-pulse">
                    <span className="text-rose-300">♥</span>
                    <span className="text-rose-400">♥</span>
                    <span className="text-rose-500">♥</span>
                    <span className="text-rose-400">♥</span>
                    <span className="text-rose-300">♥</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default song player for other memories
  return (
    <div 
      className={`mb-10 transition-all duration-700 delay-500 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="relative bg-gradient-to-br from-rose-50/80 via-amber-50/50 to-rose-50/80 rounded-2xl p-6 border border-rose-200/40 overflow-hidden">
        {/* Vinyl record decoration */}
        <div className="absolute -right-8 -top-8 w-32 h-32 opacity-10">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#333] relative">
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#222] border border-white/10" />
            <div className="absolute inset-[40%] rounded-full bg-rose-400" />
          </div>
        </div>
        
        {/* Musical notes decoration */}
        <div className="absolute left-4 top-4 text-rose-200/40 text-xl">♪</div>
        <div className="absolute right-12 bottom-4 text-rose-200/40 text-lg">♫</div>
        
        <div className="relative text-center">
          {/* Music icon container */}
          <div className="relative w-16 h-16 mx-auto mb-4">
            {/* Vinyl record visual */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] shadow-lg">
              <div className="absolute inset-2 rounded-full border border-white/5" />
              <div className="absolute inset-3 rounded-full border border-white/5" />
              <div className="absolute inset-4 rounded-full border border-white/5" />
              <div className="absolute inset-[35%] rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center">
                <span className="text-white text-xs">♥</span>
              </div>
            </div>
            {/* Spinning effect glow */}
            <div className="absolute -inset-1 rounded-full bg-rose-400/20 blur-md -z-10" />
          </div>
          
          <h3 
            className="text-lg text-[#8B4D5C] font-medium mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Song
          </h3>
          
          {memory.songTitle ? (
            /* Display song if one is set */
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-rose-100/50">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center shadow-md">
                  <span className="text-white text-lg">🎵</span>
                </div>
                <div className="text-left">
                  <p 
                    className="text-[#8B4D5C] font-medium"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {memory.songTitle}
                  </p>
                  {memory.songArtist && (
                    <p 
                      className="text-[#B89999] text-sm"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      {memory.songArtist}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Placeholder when no song is set */
            <div className="space-y-3">
              <p 
                className="text-[#C4A5A5] text-sm"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Add a song for this memory
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-dashed border-rose-200/60">
                <span className="text-rose-400">🎵</span>
                <span 
                  className="text-[#B89999] text-sm italic"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  What song reminds you of this moment?
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

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

        {/* Story section */}
        <div 
          className={`bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg shadow-rose-100/50 border border-rose-100/50 mb-10 transition-all duration-700 delay-300 ${
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
        </div>

        {/* Photo Gallery Section */}
        <div 
          className={`mb-10 transition-all duration-700 delay-400 ${
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
          
          <div className={`grid gap-4 max-w-2xl mx-auto ${
            hasAdditionalImages && memory.additionalImages.length > 1 
              ? 'grid-cols-1 sm:grid-cols-2' 
              : 'grid-cols-1 max-w-lg'
          }`}>
            {hasAdditionalImages && memory.additionalImages.length > 0 ? (
              memory.additionalImages.map((imgSrc, index) => (
                <div 
                  key={index}
                  className="relative rounded-2xl overflow-hidden shadow-lg shadow-rose-100/30 border-2 border-white hover:scale-[1.02] transition-transform duration-300"
                >
                  {imgSrc ? (
                    <img 
                      src={imgSrc} 
                      alt={`${memory.title} - Photo ${index + 2}`}
                      className="w-full h-auto"
                    />
                  ) : (
                    <div className="aspect-[4/3] bg-gradient-to-br from-rose-50 to-amber-50/50 flex flex-col items-center justify-center p-6">
                      <div className="w-16 h-16 rounded-full bg-white/80 shadow-sm flex items-center justify-center mb-3">
                        <span className="text-2xl">📷</span>
                      </div>
                      <p 
                        className="text-[#C4A5A5] text-sm text-center"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        Photo {index + 2}
                      </p>
                      <p 
                        className="text-[#D4B5B5] text-xs text-center mt-1 italic"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        Add a memory here
                      </p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <PhotoPlaceholder index={2} />
            )}
          </div>
          
          {/* Placeholder hint */}
          {!hasAdditionalImages && (
            <p 
              className="text-center text-[#C4A5A5] text-sm mt-4 italic"
              style={{ fontFamily: "'Lora', serif" }}
            >
              💡 Add a photo to this memory to create a richer scrapbook entry
            </p>
          )}
        </div>

        {/* Our Song Section */}
        <InteractiveSongPlayer memory={memory} isLoaded={isLoaded} />

        {/* Navigation */}
        <nav 
          className={`flex justify-between items-center transition-all duration-700 delay-[600ms] ${
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
