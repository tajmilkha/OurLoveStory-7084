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
    <span className="text-rose-400 text-xl">💍</span>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300/50" />
  </div>
);

export default function ChapterFive() {
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
                <span className="text-3xl">💍</span>
              </div>
            </div>

            <p 
              className="text-sm text-[#C4A5A5] uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Chapter Five — The Final Chapter
            </p>

            <h1 
              className="font-serif text-3xl md:text-5xl text-[#8B4D5C] mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Battle That Became Us
            </h1>
            
            <p 
              className="text-lg text-[#C4A5A5] italic"
              style={{ fontFamily: "'Lora', serif" }}
            >
              January 2026 — From pixels to forever
            </p>
          </header>

          <HeartDivider />

          {/* Story content card */}
          <div 
            className={`bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl shadow-rose-100/30 border border-rose-100/50 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Reflection */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Looking Back
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Sometimes I sit back and think about everything. Every fight. Every betrayal. Every 
                moment I wanted to give up on that stupid game. And I realize something now that I 
                couldn't see then.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                It was all training. Every single moment was preparing me for something bigger. 
                For <em>someone</em> bigger. For her.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The BR Team. The betrayals. Learning to stand alone. Learning to fight for what 
                mattered. It all led to the moment I saw a girl with an 8-bit crown and decided 
                she was worth everything.
              </p>
            </section>

            {/* The Lessons */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                What Roblox Taught Me About Love
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                People laugh when they hear how we met. "You fell in love in a Roblox game?" 
                They don't understand. They see pixels and avatars. They don't see the hours of 
                conversations, the late nights, the moments when someone shows you who they really are.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                That game taught me <span className="font-medium text-[#8B4D5C]">patience</span>. 
                Months of watching PRiViLEDGE before saying a single word. Learning that the best 
                things are worth waiting for.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                It taught me <span className="font-medium text-[#8B4D5C]">courage</span>. The moment 
                I finally spoke to her about that crown, my heart was pounding. But I did it anyway. 
                And it changed my life.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                It taught me <span className="font-medium text-[#8B4D5C]">loyalty</span>. Seeing who 
                stayed and who left when things got hard. Learning that real love means standing 
                beside someone even when it costs you everything.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                And it taught me <span className="font-medium text-[#8B4D5C]">strength</span>. Not 
                just to fight but to protect. To know what's worth fighting for and to never let it go.
              </p>
            </section>

            {/* Telling Our Families */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Making It Real
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Telling our families was terrifying. How do you explain to your parents that you 
                fell in love with someone you met in a video game? That you've never touched them, 
                never been in the same room, but you <em>know</em> they're your person?
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                But that fear, that vulnerability it was beautiful in its own way. Because it meant 
                this was real. Real enough to be scary. Real enough to fight for.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                They didn't all understand at first. Some still don't. But we know what we have. 
                And that's enough.
              </p>
            </section>

            {/* The Engagement */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                January 9, 2026
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I didn't plan a big gesture. No elaborate speech. No dramatic moment. That's not 
                who we are. We're the late-night voice calls. The "you still awake?" texts at 3 AM. 
                The quiet moments that mean more than any grand display ever could.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I asked her simply. Honestly. From the same heart that fell for her the moment I 
                saw that crown.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5 font-medium text-[#8B4D5C]"
                style={{ fontFamily: "'Lora', serif" }}
              >
                "Will you spend forever with me?"
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                She said yes. And in that moment, every battle, every tear, every moment of doubt 
                was worth it. It was all worth it.
              </p>
            </section>

            {/* The 2v16 Memory */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                She Never Ran
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I keep thinking about that 2v16 battle. Sixteen people against us, and she never 
                left. Didn't hesitate. Didn't run. She stood beside me and fought for hours.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                That's when I knew. Not when she said yes to dating me. Not when we had our first 
                call. But when she stood beside me in a battle she had no reason to fight and 
                <span className="font-medium text-[#8B4D5C]"> refused to leave</span>.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                That's the person I'm marrying. Someone who stays. Someone who fights. Someone 
                who chooses me even when it's hard.
              </p>
            </section>

            {/* What I See In Her */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Everything I Fought For
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I spent so long fighting for loyalty. For trust. For someone who wouldn't leave 
                when things got hard. I fought the BR Team. I fought fake friends. I fought 
                loneliness.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                And then I found her. PRiViLEDGE. The girl with the crown. And she had everything 
                I was fighting for already inside her.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span className="font-medium text-[#8B4D5C]">Trust</span> she believed in me when 
                she had every reason not to.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span className="font-medium text-[#8B4D5C]">Loyalty</span> she chose me over 
                friends, over comfort, over everything safe.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span className="font-medium text-[#8B4D5C]">Kindness</span> the way she treats 
                everyone, even people who don't deserve it.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span className="font-medium text-[#8B4D5C]">Strength</span> quiet strength, the 
                kind that doesn't need to prove anything but shows up when it matters.
              </p>
            </section>

            {/* The Future */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                August 2026
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                In a few months, I'll meet her for the first time. Actually see her. Touch her. 
                Hold her. After all these months of screens and voice calls and falling asleep 
                on the phone together.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I'm nervous. Terrified, honestly. But also more excited than I've ever been for 
                anything in my life.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Real life won't be a game. There will be new challenges. New battles. Moments 
                that will test us in ways Roblox never could. But I know one thing for certain.
              </p>
            </section>

            {/* Forever */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                We Fight Together
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Whatever comes, we face it the same way we faced those sixteen players. Side by side. 
                No running. No giving up. Just two people who chose each other and keep choosing 
                each other every single day.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                That's what love is, I think. Not the big moments or the dramatic confessions. 
                It's the daily choice. Waking up and deciding that this person, this specific 
                person, is worth it. Worth the fights. Worth the fear. Worth everything.
              </p>
            </section>

            {/* Closing */}
            <section className="text-center py-8 border-t border-rose-100/50">
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5 italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                From an empty player looking for purpose...
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5 italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                To finding the one person who made every battle worth fighting.
              </p>
              <p 
                className="text-xl font-medium text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Alpha & PRiViLEDGE
              </p>
              <p 
                className="text-sm text-[#C4A5A5]"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Our story is still being written. ♥
              </p>
            </section>
          </div>

          {/* Chapter Navigation */}
          <div 
            className={`mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="/chapter-four">
              <a
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-sm border border-rose-200 text-[#8B4D5C] rounded-full shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 hover:-translate-y-1"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span>←</span>
                <span className="hidden sm:inline">Chapter Four: When Love Turned Into War</span>
                <span className="sm:hidden">Previous</span>
              </a>
            </Link>
            
            <Link href="/chapter-six">
              <a
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-sky-300 to-indigo-300 text-white rounded-full shadow-md hover:shadow-lg hover:from-sky-400 hover:to-indigo-400 transition-all duration-300 hover:-translate-y-1 relative"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
                <span className="hidden sm:inline">Chapter Six: When Pixels Become Reality</span>
                <span className="sm:hidden">Next</span>
                <span>✈️</span>
                <span>→</span>
              </a>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
