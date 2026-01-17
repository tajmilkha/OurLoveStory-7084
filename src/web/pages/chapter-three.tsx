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

export default function ChapterThree() {
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
                <span className="text-3xl">💕</span>
              </div>
            </div>

            <p 
              className="text-sm text-[#C4A5A5] uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Chapter Three
            </p>

            <h1 
              className="font-serif text-3xl md:text-5xl text-[#8B4D5C] mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Moment I Knew
            </h1>
            
            <p 
              className="text-lg text-[#C4A5A5] italic"
              style={{ fontFamily: "'Lora', serif" }}
            >
              November 23, 2025 — When I couldn't pretend anymore
            </p>
          </header>

          <HeartDivider />

          {/* Story content card */}
          <div 
            className={`bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl shadow-rose-100/30 border border-rose-100/50 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* The Fragile Friendship */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Walking on Glass
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                By this point, PRiViLEDGE and I had something real. It wasn't official, it wasn't labeled, 
                but it was <em>there</em>. Every time we talked, every time we played together, I felt it 
                growing stronger. And it terrified me.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Our friendship was fragile. One wrong move and everything could shatter. I knew her friends 
                didn't like me. I knew they were waiting for me to mess up, to prove them right about who 
                they thought I was.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                And they weren't subtle about trying to pull her away from me.
              </p>
            </section>

            {/* Her Friends */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The Jealous Friends
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                They didn't want to share her. Didn't want me in the picture. Every chance they got, 
                they'd try to get between us. Inviting her to things without me. Making plans right 
                in front of me that didn't include me.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                One of them especially. He was always there, always hovering, always finding reasons 
                to be close to her. And I noticed. Every single time.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I told myself it didn't matter. That we were just friends. That I had no right to feel 
                what I was feeling. But the jealousy was eating me alive.
              </p>
            </section>

            {/* The Pivotal Moment */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The Moment Everything Changed
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Something happened. A situation where she needed someone to have her back. And her friend 
                stepped in before I could. He protected her. He was there for her when I hesitated.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                It should have been me. <span className="font-medium text-[#8B4D5C]">It should have been me.</span>
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The jealousy hit different that time. It wasn't just about who got to spend time with her. 
                It was about who she trusted. Who she relied on. And in that moment, it wasn't me.
              </p>
            </section>

            {/* Pushing Her Away */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Running Scared
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                So I did what I always do when I'm scared. I pushed her away. I got distant. Cold. 
                I convinced myself it was better to leave before I got hurt. Better to walk away 
                than to watch her choose someone else.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                But I couldn't just disappear. Not this time. Something made me ask her. I needed 
                to know, even if the answer would destroy me.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span className="italic">"How do you feel about him?"</span>
              </p>
            </section>

            {/* Her Answer */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The Answer That Changed Everything
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                She told me she was about to delete me. That she thought I didn't care anymore. 
                That she was ready to give up on whatever this was between us because I kept 
                pulling away.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                And then it hit me. Like a truck. Like the world suddenly snapping into focus.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg text-center font-medium text-[#8B4D5C]"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I loved her. I was completely, stupidly, terrifyingly in love with her.
              </p>
            </section>

            {/* Growing Closer */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                After That
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I stopped running. Stopped pushing. Started actually being there. We spent more 
                time together, talked longer, let our guards down more. Every moment with her 
                felt like coming home.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                And the closer we got, the harder it became to pretend we were just friends. 
                Something was building. Something inevitable.
              </p>
            </section>

            {/* November 23 */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                November 23rd, Midnight
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                We were talking late, like we always did. And somehow the conversation shifted. 
                We started talking about us. About e-dating. About relationships online.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span className="italic">"I'd never e-date,"</span> she said.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span className="italic">"Me neither,"</span> I replied.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                And then we both laughed. Because we both knew we were lying. Because we both knew 
                what we wanted. What we'd been wanting for weeks.
              </p>
            </section>

            {/* The Confession */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                So We Did It Anyway
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The confession wasn't dramatic. It wasn't some big movie moment. It was quiet 
                and real and scared and brave all at once. Two people who said they'd never 
                do this, doing exactly this.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                We started dating. November 23rd, 2025. <span className="font-medium">Midnight</span>. 
                The moment I stopped fighting what I felt and finally let myself have this.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                We kept it quiet at first. Secret. Just for us. The world didn't need to know 
                yet. All that mattered was that <em>we</em> knew.
              </p>
            </section>

            {/* The Closing */}
            <section>
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Just the Beginning
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                November 23rd wasn't the end of our story. It was just the start of a new chapter. 
                The real adventure was only beginning. There would be more challenges, more people 
                trying to come between us, more reasons to doubt.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                But none of that mattered anymore. Because I finally had her. And she had me. 
                And for the first time in a long time, I wasn't scared.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg text-center font-medium"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I was home.
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
              The moment I stopped running and started loving
            </p>
          </div>

          {/* Chapter Navigation */}
          <div 
            className={`mt-12 flex justify-between items-center gap-4 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="/chapter-two">
              <a
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-sm border border-rose-200 text-[#8B4D5C] rounded-full shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 hover:-translate-y-1"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span>←</span>
                <span className="hidden sm:inline">Chapter Two: Enemies</span>
                <span className="sm:hidden">Previous</span>
              </a>
            </Link>
            
            <Link href="/#story">
              <a
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#8B4D5C] text-white rounded-full shadow-md hover:shadow-lg hover:bg-[#7A3D4C] transition-all duration-300 hover:-translate-y-1"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span>View Timeline</span>
                <span>→</span>
              </a>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
