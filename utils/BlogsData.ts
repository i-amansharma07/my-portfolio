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
}

const allTags: TagType = {
  personal: "Personal",
  tech: "Technology",
  fe: "Front-end",
  be: "Back-end",
  randomThoughts: "randomThoughts",
  philosophy: "Philosophy",
};

const allBlogs: BlogType[] = [
  {
    id: "marcus-aurelius",
    title: "Marcus Aurelius: Conquering the Self, Not the World",
    image: "/blogs/marcus.jpg",
    description: `The story of Rome’s philosopher king who proved that true 
    strength lies not in ruling an empire, but in mastering the
     mind and living with virtue.`,
    tags: [allTags.philosophy, allTags.randomThoughts],
    readTime: "8 mins",
    dateTime: "mon sept 01, 2025",
  },
  {
    id: "react-vs-next",
    title: "Next.js vs React: How Frontend Development is Evolving",
    image: "/blogs/react-vs-next.png",
    description: `React is a powerful UI library, but it leaves developers to handle routing,
     SEO, and performance optimizations on their own. Next.js builds on React 
     by adding file-based routing, server-side rendering, static site generation, 
     API routes, and built-in optimizations like image handling. This makes Next.js 
     the go-to framework for building production-ready apps, 
     while React remains great for UI components.`,
    tags: [allTags.tech, allTags.fe],
    readTime: "5 mins",
    dateTime: "fri jun 27, 2025",
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
