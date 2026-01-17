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

export default function ChapterTwo() {
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
                <span className="text-3xl">⚔️</span>
              </div>
            </div>

            <p 
              className="text-sm text-[#C4A5A5] uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Chapter Two
            </p>

            <h1 
              className="font-serif text-3xl md:text-5xl text-[#8B4D5C] mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Enemies Don't Fall in Love Easily
            </h1>
            
            <p 
              className="text-lg text-[#C4A5A5] italic"
              style={{ fontFamily: "'Lora', serif" }}
            >
              November 2025 — When I realized we were on opposite sides
            </p>
          </header>

          <HeartDivider />

          {/* Story content card */}
          <div 
            className={`bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl shadow-rose-100/30 border border-rose-100/50 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* The Connection */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                After the Crown Conversation
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                After our first conversation about her crown, we added each other. It felt like the 
                natural thing to do. She was easy to talk to, and for once, I wasn't on guard. 
                I was just... <em>me</em>.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                But then I started noticing things.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The people she hung around with. The names on her friends list. 
                <span className="font-medium text-[#8B4D5C]"> My enemies.</span>
              </p>
            </section>

            {/* The Realization */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The Painful Discovery
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                PRiViLEDGE was connected to the very people who had made my life hell. The ones 
                who'd hurt me, betrayed me, turned the whole community against me. She wasn't 
                just some random player. She was part of <em>their</em> world.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                My heart sank. All those walls I'd spent months building up screamed at me: 
                <span className="italic"> "Don't trust her. She's one of them. This is a trap."</span>
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                So I did what I always did when I got scared.
              </p>
            </section>

            {/* Removing her */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                I Removed Her
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Without saying anything. Without explaining. I just... unfriended her. Blocked 
                the connection before it could become something that hurt me. Before she could 
                use me like everyone else had.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                It was <span className="font-medium">fear</span>. Pure paranoia from everything 
                I'd been through. I didn't know her well enough yet to know she wasn't like them. 
                All I saw was the association, and that was enough to make me run.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I thought that would be the end of it.
              </p>
            </section>

            {/* Meeting Again */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                But Fate Had Other Plans
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                We ran into each other again. Randomly. In a server, just like before. And she 
                remembered me. I expected anger, coldness. But she just... looked confused.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I apologized. Told her I'd removed her because I saw her connections and got scared. 
                I expected her to tell me off, to walk away. But she didn't.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                She told me she had <span className="font-medium">no idea</span> about any of the 
                drama. She didn't know about my history, my battles, the war I'd been fighting. 
                She was friends with those people, yeah, but she wasn't part of their schemes. 
                She was just... <em>PRi</em>. Peaceful, kind, caught in the middle of something 
                she didn't even know existed.
              </p>
            </section>

            {/* Rebuilding */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Learning to Trust Again
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                We started over. Slowly. Every time we saw each other in-game, we'd say hi. 
                Little jokes here and there. Playful conversations that grew longer each time.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I was careful at first. Still guarded. But she made it easy to let my walls down. 
                She didn't push. She didn't ask about the drama. She just... showed up. 
                <span className="italic"> Consistently</span>. And slowly, I started believing 
                she was different.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Trust takes time when you've been hurt. But every conversation with her made 
                me want to try.
              </p>
            </section>

            {/* The Opposition */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                They Tried to Separate Us
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Of course, my enemies noticed. They saw me talking to her. They saw the way I 
                looked at her, the way my whole demeanor changed when she was around. And they 
                <span className="font-medium"> hated it</span>.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                They tried everything. Warning her about me. Telling her I was dangerous, that I 
                was using her, that I was nothing but trouble. They spread rumors. Made up stories. 
                Did everything they could to make her see me the way they wanted her to.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                But PRi never wavered. She listened to me instead. She formed her own opinion. 
                She chose to <span className="text-[#8B4D5C] font-medium">trust me</span> anyway.
              </p>
            </section>

            {/* The Fake Girlfriend */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The Jealousy I Didn't Expect
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Then there was this incident. Someone started claiming to be my girlfriend. Some 
                random player, completely fabricated. But the rumors spread fast, and suddenly 
                everyone thought I was taken.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I noticed something change in PRi after that. Something subtle. The way she'd 
                go quiet when the topic came up. The way she'd look away. I couldn't put my 
                finger on it at first, but looking back now... 
                <span className="italic"> she was jealous</span>.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                And honestly? I was feeling things too. Every time I saw her with other people, 
                every time someone else made her laugh, there was this pull in my chest. This 
                protectiveness. This wanting.
              </p>
            </section>

            {/* Choosing Each Other */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Choosing Each Other
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                We were on opposite sides of a war neither of us started. Her friends hated me. 
                My history made everything complicated. By all logic, we shouldn't have worked.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                But somewhere along the way, without either of us planning it, we stopped caring 
                about the sides. The drama. The history. All that mattered was 
                <span className="font-medium"> us</span>.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                She chose me despite everything they said about me. I chose her despite my 
                fears, my walls, everything telling me not to trust again.
              </p>
            </section>

            {/* The closing */}
            <section>
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Enemies Don't Fall in Love Easily
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                They don't. It's messy. It's complicated. It means fighting against people who 
                don't want you together, fighting against your own doubts, fighting against a 
                history that tells you to run.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                But the best things in life aren't easy. PRi taught me that. She taught me that 
                love isn't about being on the same side. It's about 
                <span className="font-medium"> choosing each other</span>. Over and over again.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg text-center font-medium"
                style={{ fontFamily: "'Lora', serif" }}
              >
                And I choose her. Every single time.
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
              Love finds a way, even between enemies
            </p>
          </div>

          {/* Chapter Navigation */}
          <div 
            className={`mt-12 flex justify-between items-center gap-4 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="/how-we-met">
              <a
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-sm border border-rose-200 text-[#8B4D5C] rounded-full shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 hover:-translate-y-1"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span>←</span>
                <span className="hidden sm:inline">Chapter One: How We Met</span>
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
