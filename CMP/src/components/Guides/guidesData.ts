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
  publishDate: string; // mm/dd/yy format
  isCurrent: boolean;
  underConstruction?: boolean;
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
    publishDate: "12/08/25",
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
    publishDate: "10/15/25",
    isCurrent: false,
    underConstruction: true,
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
    publishDate: "08/20/25",
    isCurrent: false,
    underConstruction: true,
  },
];

// Helper function to parse mm/dd/yy date format
function parseDateMMDDYY(dateStr: string): Date {
  const [month, day, year] = dateStr.split('/').map(Number);
  // Assuming 20xx for year
  const fullYear = year + 2000;
  return new Date(fullYear, month - 1, day);
}

// Automatically set isCurrent based on the newest publishDate
const sortedByDate = [...guidesData].sort((a, b) => {
  return parseDateMMDDYY(b.publishDate).getTime() - parseDateMMDDYY(a.publishDate).getTime();
});

if (sortedByDate.length > 0) {
  sortedByDate[0].isCurrent = true;
}

