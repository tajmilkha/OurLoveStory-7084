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
              March to November 2025 — From emptiness to finding her
            </p>
          </header>

          <HeartDivider />

          {/* Story content card */}
          <div 
            className={`bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl shadow-rose-100/30 border border-rose-100/50 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* The Beginning */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Before Her
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Back in <span className="text-[#8B4D5C] font-medium">March 2025</span>, I was empty. Bored. Just going through 
                life without really feeling anything. One night, scrolling through Roblox with nothing better 
                to do, I stumbled onto a game called <span className="italic">2 Player Hugs RP</span>.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I didn't think much of it at first. But something about the competitive side of the game 
                pulled me in. There was this group the <span className="font-medium">BR Team</span> dominating everyone, 
                picking fights, making the game hell for regular players And I decided I was going to stop them.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                So I fought. And I kept fighting. I found a crew, we trained together, we pushed back. 
                For a while, it felt like I had something a purpose, friends who had my back.
              </p>
            </section>

            {/* The Betrayal */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The Betrayal
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Then they turned on me.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The people I trusted, the ones I fought alongside they betrayed me. Left me behind. 
                Sided with the very players we were supposed to be fighting against. I was alone again, 
                but this time it hit different. <span className="italic">Harder.</span>
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Instead of quitting, I got angry. I trained by myself. Alone in servers, grinding, 
                getting stronger. If everyone was going to abandon me, then I'd become someone who 
                <span className="font-medium"> didn't need anyone</span>. I became the strongest fighter in the game. 
                People knew my name. They feared me. But I was still empty inside.
              </p>
            </section>

            {/* Her */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Then I Saw Her
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span className="text-[#8B4D5C] font-medium">November 2025.</span> I noticed someone new in the game. 
                Not new to the game itself she'd been around but new to <em>me</em>. 
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span className="font-medium">PRiViLEDGE</span>
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                There was something different about her. While everyone else was chaotic, loud, 
                always trying to prove something she was <span className="italic">calm</span>. 
                Quiet. She moved through the server with this graceful energy that made me stop 
                and actually look.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                And then I noticed the crown. This little <span className="text-[#8B4D5C] font-medium">8-bit crown</span> sitting 
                on her avatar. Something about it just... caught me. It was simple, but elegant. 
                Like her whole aesthetic.this beautiful outfit, put together with actual thought and care. 
                She stood out without even trying.
              </p>
            </section>

            {/* The Featured Image */}
            <div 
              className={`my-12 transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-rose-200/40 border-4 border-white">
                <img 
                  src="./pri-crown.png" 
                  alt="PRi's character with her signature 8-bit crown"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p 
                    className="text-white/90 text-sm text-center italic"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    The 8-bit crown that caught my eye — PRi with her elegant style
                  </p>
                </div>
              </div>
            </div>

            {/* Watching from afar */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Four Weeks of Watching
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                For <span className="font-medium">four weeks</span>, I didn't say a word to her. I just... watched. 
                Not in a weird way I just noticed her. Every time she was in a server, I'd see her. 
                I'd notice the way she played, the way she carried herself. She never got involved 
                in the drama. She was just <em>there</em>, doing her own thing, being peaceful.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Meanwhile, I was still the fighter everyone knew. Still strong. Still respected. 
                Still feared. She had no idea about any of that. To her, I was probably just 
                another player in the server.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                But that crown kept pulling my attention back to her. Every single time.
              </p>
            </section>

            {/* Finally Speaking */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Finally, I Spoke
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I don't even remember exactly what I said. Something about the crown. I just 
                asked about it where she got it, why she wore it. Something simple. Something safe.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                And she answered. We talked. It was easy. Natural. No pressure, no agenda. 
                Just two people having a conversation in a game.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                She didn't know I was the strongest player in the game. She didn't know my 
                reputation, my history, any of it. And honestly? <span className="italic">That's what made it special.</span> 
                She liked me for <em>me</em> not for who I was in the fighting community, not for 
                what I could do. Just me.
              </p>
            </section>

            {/* The ending */}
            <section>
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                And Everything Changed
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                We became friends naturally. No big dramatic moment just conversations that got longer, 
                nights that got later, jokes that became inside references. She filled a space I 
                didn't even know was empty.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                From <span className="font-medium">March</span>, when I was nothing but anger and loneliness, 
                to <span className="font-medium">November</span>, when I finally found someone who saw the real me.it 
                was a journey I never expected to take.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg text-center font-medium"
                style={{ fontFamily: "'Lora', serif" }}
              >
                All because of an 8-bit crown and the beautiful girl wearing it.
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
