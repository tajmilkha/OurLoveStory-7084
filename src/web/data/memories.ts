export interface Memory {
  id: number;
  slug: string;
  title: string;
  caption: string;
  date: string;
  src: string;
  story: string;
}

export const memories: Memory[] = [
  { 
    id: 1, 
    slug: "first-match",
    title: "First Match",
    caption: "When I first noticed her 👑", 
    date: "October 2025",
    src: "/@website-editor/images/95aaa8fbb336.jpeg",
    story: "October 2025 — the month everything changed. I saw her in the game with that little 8-bit crown, elegant outfit, calm presence. While everyone else was chaotic and loud, she moved with grace. For four weeks I just watched, noticed her, before I finally found the courage to say something about that crown."
  },
  { 
    id: 2, 
    slug: "getting-to-know-you",
    title: "Getting to Know You",
    caption: "Those weeks of falling 🌙", 
    date: "November 2025",
    src: "./roblox2.jpeg",
    story: "Four weeks of hanging out, late-night gaming sessions, conversations that got longer, jokes that became inside references. She didn't know about my reputation, my history with the fighters. She liked me for me. This was when we went from strangers to something more."
  },
  { 
    id: 3, 
    slug: "we-became-official",
    title: "We Became Official",
    caption: "November 23, midnight 💝", 
    date: "November 23, 2025",
    src: "./roblox3.jpeg",
    story: "November 23, 2025 at midnight. We both said we'd never e-date. We both said we weren't looking for anything. And then we did it anyway. That nervous confession, both of us scared but wanting it anyway. Our love story officially began."
  },
  { 
    id: 4, 
    slug: "2v16-war",
    title: "The 2v16 War",
    caption: "Us against the world ⚔️", 
    date: "December 2025",
    src: "./roblox4.jpeg",
    story: "December 2025. When the BR Team touched PRiViLEDGE, I snapped. For hours, we fought side by side—two against sixteen. She never left my side. We became the strongest couple in the game that day. This was the moment I knew she'd always have my back."
  },
  { 
    id: 5, 
    slug: "engaged",
    title: "Engaged",
    caption: "She said yes 💍", 
    date: "January 9, 2026",
    src: "./roblox5.jpeg",
    story: "January 9, 2026. I asked her to spend forever with me. From pixels to promises, from late-night Roblox sessions to planning a real future together. She said yes. We're building something real, something beautiful, something that started with a game but became so much more."
  },
  { 
    id: 6, 
    slug: "our-future",
    title: "Our Future",
    caption: "Building our forever ✨", 
    date: "January 2026",
    src: "./roblox6.jpeg",
    story: "January 2026. The month we got engaged and started planning our forever. From pixels to promises, from late-night Roblox sessions to dreaming about our real future together. She said yes. We're building something beautiful, something that started with a game but became so much more."
  },
  { 
    id: 7, 
    slug: "mid-winter-love",
    title: "Mid-Winter Love",
    caption: "Growing closer every day 💕", 
    date: "February 2026",
    src: "./roblox5.jpeg",
    story: "February 2026 — the middle of our first winter as an engaged couple. Every day we grow closer. The countdown to August continues, but we're not just waiting—we're living. Late-night calls, inside jokes, planning our future, falling deeper in love. This is our daily life now, and it's beautiful."
  },
];

export const getMemoryBySlug = (slug: string): Memory | undefined => {
  return memories.find(m => m.slug === slug);
};

export const getMemoryById = (id: number): Memory | undefined => {
  return memories.find(m => m.id === id);
};

export const getAdjacentMemories = (id: number): { prev: Memory | undefined; next: Memory | undefined } => {
  const currentIndex = memories.findIndex(m => m.id === id);
  return {
    prev: currentIndex > 0 ? memories[currentIndex - 1] : undefined,
    next: currentIndex < memories.length - 1 ? memories[currentIndex + 1] : undefined,
  };
};
