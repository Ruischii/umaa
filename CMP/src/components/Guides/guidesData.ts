export type CMGuide = {
  id: number;
  slug: string;
  title: string;
  paragraph: string;
  image: string;
  author: {
    name: string;
    image: string;
    designation: string;
  };
  tags: string[];
  publishDate: string;
  isCurrent: boolean;
  content?: string;
};

export const guidesData: CMGuide[] = [
  {
    id: 1,
    slug: "cm-libra-2025",
    title: "Champions Meeting Libra Guide",
    paragraph:
      "Complete guide for Champions Meeting Libra. Learn the best strategies and tips.",
    image: "/images/blog/libra-cm.jpg",
    author: {
      name: "umaa Team",
      image: "/images/blog/author-03.png",
      designation: "Guide Writer",
    },
    tags: ["champions-meeting"],
    publishDate: "2025",
    isCurrent: false,
  },
  {
    id: 2,
    slug: "cm-virgo-2025",
    title: "Champions Meeting Virgo Guide",
    paragraph:
      "Complete guide for Champions Meeting Virgo. Learn the best strategies and tips.",
    image: "/images/blog/virgo-cm.jpg",
    author: {
      name: "umaa Team",
      image: "/images/blog/author-02.png",
      designation: "Guide Writer",
    },
    tags: ["champions-meeting"],
    publishDate: "2025",
    isCurrent: false,
  },
  {
    id: 3,
    slug: "cm-leo-2025",
    title: "Champions Meeting Leo Guide",
    paragraph:
      "Complete guide for Champions Meeting Leo. Learn the best strategies and tips.",
    image: "/images/blog/leo-cm.jpg",
    author: {
      name: "umaa Team",
      image: "/images/blog/author-03.png",
      designation: "Guide Writer",
    },
    tags: ["champions-meeting"],
    publishDate: "2025",
    isCurrent: true,
  },
];

