export interface Memory {
  id: number;
  slug: string;
  title: string;
  caption: string;
  src: string;
  story: string;
}

export const memories: Memory[] = [
  { 
    id: 1, 
    slug: "our-first-adventure",
    title: "Our First Adventure",
    caption: "Our first adventure together 💕", 
    src: "/@website-editor/images/95aaa8fbb336.jpeg",
    story: "This screenshot shows the moment everything began. We met in the game, joked a little, and fought together. I didn't know it then, but that was the start of something real our adventure together."
  },
  { 
    id: 2, 
    slug: "making-memories",
    title: "Making Memories",
    caption: "Making memories in our world 🌟", 
    src: "./roblox2.jpeg",
    story: "Write your story here... Every moment spent together becomes a precious memory. What was happening in this screenshot?"
  },
  { 
    id: 3, 
    slug: "side-by-side",
    title: "Side by Side",
    caption: "Side by side, always 💫", 
    src: "./roblox3.jpeg",
    story: "Write your story here... Together through every challenge, every adventure. What does this moment mean to you?"
  },
  { 
    id: 4, 
    slug: "late-night-exploring",
    title: "Late Night Exploring",
    caption: "Late night exploring 🌙", 
    src: "./roblox4.jpeg",
    story: "Write your story here... Those late night gaming sessions when the rest of the world was asleep. What made these moments so special?"
  },
  { 
    id: 5, 
    slug: "our-happy-place",
    title: "Our Happy Place",
    caption: "Our happy place ✨", 
    src: "./roblox5.jpeg",
    story: "Write your story here... Every couple has their special spot. What makes this place meaningful to both of you?"
  },
  { 
    id: 6, 
    slug: "every-moment",
    title: "Every Moment",
    caption: "Every moment with you is magic 💝", 
    src: "./roblox6.jpeg",
    story: "Write your story here... The little moments, the big moments—they all matter. What would you want to remember forever about this?"
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
