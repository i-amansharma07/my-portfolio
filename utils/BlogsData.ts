export interface BlogType {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  readTime: string;
  dateTime: string;
}

const allBlogs: BlogType[] = [
  {
    id: "alice-in-the-tinder-land",
    title: "Alice in the tinder land",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_aliceinwonderland_19875_ad409a49.jpeg?region=0%2C0%2C540%2C810",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Saepe sit nisi eligendi! Possimus nostrum et reiciendis inventore. Voluptatibus illum 
       maxime molestiae soluta exercitationem? Nostrum quia, similique 
       officiis incidunt expedita corrupti.`,
    tags: ["Fiction", "Hot chick", "Darma", "Girls"],
    readTime: "8 mins",
    dateTime: "sat oct 12, 2024",
  },
  {
    id: "react-vs-next",
    title: "React VS Next",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfWWBJ_Aqr1Phj1-0hqgYWv_weTm0AzidO0g&s",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Saepe sit nisi eligendi! Possimus nostrum et reiciendis inventore. Voluptatibus illum 
       maxime molestiae soluta exercitationem? Nostrum quia, similique 
       officiis incidunt expedita corrupti.`,
    tags: ["Fiction", "Hot chick", "Darma", "Girls"],
    readTime: "8 mins",
    dateTime: "sat oct 12, 2024",
  },
  {
    id: "brain-rotting",
    title: "Brain rotting",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*eRDecUz13fOHlm8x2WzZgQ.jpeg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Saepe sit nisi eligendi! Possimus nostrum et reiciendis inventore. Voluptatibus illum 
       maxime molestiae soluta exercitationem? Nostrum quia, similique 
       officiis incidunt expedita corrupti.`,
    tags: ["Fiction", "Hot chick", "Darma", "Girls"],
    readTime: "8 mins",
    dateTime: "sat oct 12, 2024",
  },
  {
    id: "react-server-component",
    title: "Understanding React Server Components: A Practical Guide",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_aliceinwonderland_19875_ad409a49.jpeg?region=0%2C0%2C540%2C810",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Saepe sit nisi eligendi! Possimus nostrum et reiciendis inventore. Voluptatibus illum 
       maxime molestiae soluta exercitationem? Nostrum quia, similique 
       officiis incidunt expedita corrupti.`,
    tags: ["Fiction", "Hot chick", "Darma", "Girls"],
    readTime: "8 mins",
    dateTime: "sat oct 12, 2024",
  },
  
];

export { allBlogs };
