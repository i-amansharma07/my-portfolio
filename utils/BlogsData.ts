interface BlogType {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  readTime: string;
  dateTime: string;
}
interface TagType {
  personal: string;
  tech: string;
  fe: string;
  be: string;
  randomThoughts: string;
  philosophy: string;
  ai: string;
  exploration: string;
  science: string;
}

const allTags: TagType = {
  personal: "Personal",
  tech: "Technology",
  fe: "Front-end",
  be: "Back-end",
  randomThoughts: "randomThoughts",
  philosophy: "Philosophy",
  ai: "AI",
  exploration: "Exploration",
  science: "Science",
};

const allBlogs: BlogType[] = [
  {
    id: "mcp-claude-code",
    title: "MCP with Claude Code",
    image: "/blogs/wtf-is-mcp-claude.webp",
    description: `In this Blog we will first understand what an MCP is and create our very own MCP server and let claude code use it`,
    tags: [allTags.ai, allTags.tech],
    readTime: "15 mins",
    dateTime: "Wed Jun 10, 2026",
  },
  {
    id: "science-and-dinosaurs",
    title: "Understanding Science and seeing Dinosaurs",
    image: "/blogs/science-dino-cover.webp",
    description: `Light carries the memory of everything that ever happened on Earth — 
    and it's still travelling. Here's my thought`,
    tags: [allTags.science, allTags.randomThoughts],
    readTime: "12 mins",
    dateTime: "Mon may 04, 2026",
  },
  {
    id: "wtf-ai",
    title: "WTF is LLM, Agentic AI and AI Agent",
    image: "/blogs/llm-cover.webp",
    description: `AI is full of buzzwords right now, LLM, Agents, Agentic AI, Autonomous systems.
If you're building things or just exploring the space, it can feel confusing.`,
    tags: [allTags.ai, allTags.exploration, allTags.tech],
    readTime: "10 mins",
    dateTime: "Sat march 07, 2026",
  },
  {
    id: "marcus-aurelius",
    title: "Marcus Aurelius: Conquering the Self, Not the World",
    image: "/blogs/marcus.webp",
    description: `The story of Rome’s philosopher king who proved that true 
    strength lies not in ruling an empire, but in mastering the
     mind and living with virtue.`,
    tags: [allTags.philosophy, allTags.randomThoughts],
    readTime: "8 mins",
    dateTime: "Mon sept 01, 2025",
  },
  {
    id: "react-vs-next",
    title: "Next.js vs React: How Frontend Development is Evolving",
    image: "/blogs/react-vs-next.webp",
    description: `React is a powerful UI library, but it leaves developers to handle routing,
     SEO, and performance optimizations on their own. Next.js builds on React 
     by adding file-based routing, server-side rendering, static site generation, 
     API routes, and built-in optimizations like image handling. This makes Next.js 
     the go-to framework for building production-ready apps, 
     while React remains great for UI components.`,
    tags: [allTags.tech, allTags.ai, allTags.exploration],
    readTime: "5 mins",
    dateTime: "Fri jun 27, 2025",
  },
];

const findBlogsWithTag = (tag: string) => {
  let blogArray: BlogType[] = [];

  blogArray = allBlogs.filter((blog) => {
    return blog.tags.find((tagItem) => tagItem.toLowerCase() === tag);
  });

  return blogArray;
};
export type { BlogType, TagType };
export { allTags, allBlogs, findBlogsWithTag };
