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
    <span className="text-rose-400 text-xl">⚔</span>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300/50" />
  </div>
);

export default function ChapterFour() {
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
              Chapter Four
            </p>

            <h1 
              className="font-serif text-3xl md:text-5xl text-[#8B4D5C] mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              When Love Turned Into War
            </h1>
            
            <p 
              className="text-lg text-[#C4A5A5] italic"
              style={{ fontFamily: "'Lora', serif" }}
            >
              December 2025 — Fighting together, falling harder
            </p>
          </header>

          <HeartDivider />

          {/* Story content card */}
          <div 
            className={`bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl shadow-rose-100/30 border border-rose-100/50 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* The Sweet Early Days */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The Honeymoon Phase
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Those first weeks of being together were different. Softer. The game that used to 
                be about fighting and proving myself suddenly became about something else entirely. 
                Every time I logged on, it was to see her. Every server was just a backdrop for 
                us being together.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                PRiViLEDGE changed me in ways I didn't expect. The anger that used to fuel me? 
                It started to fade. The constant need to fight, to prove, to dominate? It didn't 
                matter as much anymore. She made me want to be better. Calmer. Present.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                For a while, I thought I was done fighting. That maybe I could just be the person 
                she saw in me instead of the fighter everyone else knew.
              </p>
            </section>

            {/* The Old Fire */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Old Habits
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                But old fire doesn't die easy. Before we got together, in those weeks of uncertainty, 
                I'd reignited conflicts with the BR Team. Boredom, restlessness, maybe a need to feel 
                something when I couldn't have her. I poked the bear. Started tensions that would 
                eventually explode.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The BR Team hadn't forgotten. They were waiting. And now that I had something 
                precious to protect, they saw their opportunity.
              </p>
            </section>

            {/* She Changed Me */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                From Fighter to Lover
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                PRiViLEDGE didn't ask me to change. She never demanded I stop fighting or give up 
                who I was. But being with her made me <em>want</em> to be different. Made me see 
                that there was more to this game, more to life, than just winning battles.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                She was my peace. My reason to log on. My reason to smile at my screen like an 
                idiot at 2 AM. I was becoming someone new someone who cared more about making her 
                laugh than making enemies fear me.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                But life doesn't always let you be peaceful. Sometimes you have to fight for what 
                you love.
              </p>
            </section>

            {/* The Pivotal Moment */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The Moment Everything Snapped
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                It happened fast. We were in a server, just hanging out, and a BR Team member showed 
                up. I tensed up immediately. But I tried to stay calm. I was different now. I wasn't 
                going to start anything.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Then he grabbed her.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Something in me <span className="font-medium text-[#8B4D5C]">broke</span>. Every ounce of 
                peace I'd found, every bit of calm she'd given me it all vanished in a single moment. 
                You can touch me. You can fight me. You can talk all the trash you want about me.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg font-medium text-[#8B4D5C]"
                style={{ fontFamily: "'Lora', serif" }}
              >
                But you do NOT touch her.
              </p>
            </section>

            {/* The 2v16 Battle */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                2 vs 16 — The Legendary Battle
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                I stepped in front of her and the whole BR Team came for me. All of them. Sixteen 
                players against one. They thought they finally had me. Thought they could break me 
                in front of the person I loved.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                They were wrong.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                But what I didn't expect what still makes my chest tight when I think about it is 
                that <span className="font-medium text-[#8B4D5C]">she stayed</span>. PRiViLEDGE didn't run. 
                Didn't hide. Didn't leave me to fight alone. She stood right beside me and fought.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                For <em>hours</em>.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Two of us against sixteen of them. And we didn't back down. Not once. She wasn't 
                the fighter I was she hadn't trained like I had, hadn't been through what I'd been 
                through. But she fought anyway. For me. For us.
              </p>
            </section>

            {/* Betrayal */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The Ones Who Left
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                That battle revealed everything. My old friends the ones I thought had my back 
                they helped the BR Team. They chose my enemies over me. Not because they believed 
                in the BR Team's cause, but because I had chosen her.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                They couldn't handle that I'd found someone more important than the fighting. That 
                I was changing. That PRiViLEDGE was becoming my priority over the endless wars.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Betrayal hit different when you're fighting for someone you love. It hurt. But it 
                also clarified everything. I knew who mattered and who never did.
              </p>
            </section>

            {/* New Alliance */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Luxx & The New Team
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                But I wasn't completely alone. Luxx stayed. My duo, my brother in every battle that 
                mattered he never wavered. While others ran or turned against me, Luxx stood firm. 
                He didn't care about the drama or the politics. He cared about loyalty.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Together, we built something new. A smaller crew, but a real one. People who actually 
                had each other's backs. People who fought for the right reasons.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                And with PRiViLEDGE by my side? We were unstoppable.
              </p>
            </section>

            {/* Victory */}
            <section className="mb-12 border-l-4 border-rose-300/50 pl-6">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The Strongest Couple
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                We didn't just survive. We won. The BR Team fell. All those people who tried to 
                tear us apart, who thought they could break us through sheer numbers they lost. 
                To us. To two people who refused to let go of each other.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                We became known as the strongest players in the game. But more than that we became 
                known as the strongest <em>couple</em>. The ones who fought through everything. The 
                ones who chose love over convenience, over safety, over approval.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Every battle we won together made us stronger. Every enemy who fell made our bond 
                tighter. This wasn't just a game anymore. This was us, proving what we were willing 
                to do for each other.
              </p>
            </section>

            {/* Making It Real */}
            <section className="mb-12">
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Beyond the Screen
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                After the war, something shifted. We'd proven ourselves in the game. We'd fought 
                together, won together, chosen each other over and over. But it wasn't enough to 
                just exist in pixels anymore.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                We decided to make it real. To tell our families. To face the world outside the 
                screen and say: <span className="font-medium text-[#8B4D5C]">this is who I love</span>.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                It was terrifying. An online relationship doesn't always make sense to people who 
                haven't lived it. But we'd been through too much together to hide anymore. If we 
                could fight 16 people and win, we could face our families and the outside world.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg text-center font-medium"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Our love was never just a game. It was time the world knew that.
              </p>
            </section>

            {/* Closing */}
            <section>
              <h2 
                className="text-2xl text-[#8B4D5C] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Forged in Fire
              </h2>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                They say love is patient. Love is kind. But sometimes love is also war. Sometimes 
                you have to fight for the person who matters. Sometimes you discover who you really 
                are when everything is on the line.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg mb-5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                PRiViLEDGE didn't just stand beside me she fought with me. And in those hours of 
                battle, in every moment she refused to leave, I knew this was forever. This wasn't 
                puppy love. This wasn't just an online fling.
              </p>
              <p 
                className="text-[#9C7B7B] leading-relaxed text-lg text-center font-medium text-[#8B4D5C]"
                style={{ fontFamily: "'Lora', serif" }}
              >
                This was the person I was going to marry.
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
              <span className="text-rose-300 animate-pulse" style={{ animationDelay: "0s" }}>⚔</span>
              <span className="text-amber-300 animate-pulse" style={{ animationDelay: "0.2s" }}>♥</span>
              <span className="text-rose-300 animate-pulse" style={{ animationDelay: "0.4s" }}>⚔</span>
            </div>
            <p 
              className="text-sm text-[#C4A5A5] italic"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Sometimes love means going to war together
            </p>
          </div>

          {/* Chapter Navigation */}
          <div 
            className={`mt-12 flex justify-between items-center gap-4 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="/chapter-three">
              <a
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-sm border border-rose-200 text-[#8B4D5C] rounded-full shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 hover:-translate-y-1"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span>←</span>
                <span className="hidden sm:inline">Chapter Three: The Moment I Knew</span>
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
