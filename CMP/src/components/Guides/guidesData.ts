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
  isNext?: boolean;
  underConstruction?: boolean;
  content?: string;
  timeline?: string;
};

export const guidesData: CMGuide[] = [
  {
    id: -1,
    slug: "cm-sagittarius-2026",
    title: "Champions Meeting Sagittarius Guide",
    paragraph:
      "Complete guide for Champions Meeting Sagittarius. Learn the best strategies and tips.",
    image: "/images/cm/Sagittarius2026/sagittarius-cm.jpg",
    author: {
      name: "umaa Team",
      image: "/images/blog/author-03.png",
      designation: "Guide Writer",
    },
    tags: ["champions-meeting"],
    publishDate: "01/08/26",
    isCurrent: false,
    isNext: true,
    underConstruction: true,
    timeline: "Late January 2026",
  },
  {
    id: 0,
    slug: "cm-scorpio-2025",
    title: "Champions Meeting Scorpio Guide",
    paragraph:
      "Complete guide for Champions Meeting Scorpio. Learn the best strategies and tips.",
    image: "/images/cm/Scorpio2026/scorpio-cm.jpg",
    author: {
      name: "umaa Team",
      image: "/images/blog/author-03.png",
      designation: "Guide Writer",
    },
    tags: ["champions-meeting"],
    publishDate: "12/28/25",
    isCurrent: true,
    timeline: "December 28, 2025 to January 7, 2026",
  },
  {
    id: 1,
    slug: "cm-libra-2025",
    title: "Champions Meeting Libra Guide",
    paragraph:
      "Complete guide for Champions Meeting Libra. Learn the best strategies and tips.",
    image: "/images/cm/libra2025/libra-cm.jpg",
    author: {
      name: "umaa Team",
      image: "/images/blog/author-03.png",
      designation: "Guide Writer",
    },
    tags: ["champions-meeting"],
    publishDate: "12/08/25",
    isCurrent: false,
    timeline: "December 12 to December 18, 2025",
  },
  {
    id: 2,
    slug: "cm-virgo-2025",
    title: "Champions Meeting Virgo Guide",
    paragraph:
      "Complete guide for Champions Meeting Virgo. Learn the best strategies and tips.",
    image: "/images/cm/Virgo2025/virgo-cm.jpg",
    author: {
      name: "umaa Team",
      image: "/images/blog/author-02.png",
      designation: "Guide Writer",
    },
    tags: ["champions-meeting"],
    publishDate: "10/15/25",
    isCurrent: false,
    underConstruction: true,
    timeline: "November 20 to November 26, 2025",
  },
  {
    id: 3,
    slug: "cm-leo-2025",
    title: "Champions Meeting Leo Guide",
    paragraph:
      "Complete guide for Champions Meeting Leo. Learn the best strategies and tips.",
    image: "/images/cm/Leo2025/leo-cm.jpg",
    author: {
      name: "umaa Team",
      image: "/images/blog/author-03.png",
      designation: "Guide Writer",
    },
    tags: ["champions-meeting"],
    publishDate: "08/20/25",
    isCurrent: false,
    underConstruction: true,
    timeline: "November 3rd to November 9th, 2025",
  },
];

// Helper function to parse mm/dd/yy date format
function parseDateMMDDYY(dateStr: string): Date {
  const [month, day, year] = dateStr.split('/').map(Number);
  // Assuming 20xx for year
  const fullYear = year + 2000;
  return new Date(fullYear, month - 1, day);
}

// Automatically set isCurrent and isNext based on publishDate and construction status
const sortedByDate = [...guidesData].sort((a, b) => {
  return parseDateMMDDYY(b.publishDate).getTime() - parseDateMMDDYY(a.publishDate).getTime();
});

if (sortedByDate.length > 0) {
  // Find the newest guide that is NOT under construction
  const newestCompleteGuide = sortedByDate.find(guide => !guide.underConstruction);
  
  if (newestCompleteGuide) {
    // Set the newest complete guide as current
    newestCompleteGuide.isCurrent = true;
    
    // Find guides newer than current that are under construction and mark as "Next CM"
    const currentDate = parseDateMMDDYY(newestCompleteGuide.publishDate);
    sortedByDate.forEach(guide => {
      if (guide !== newestCompleteGuide && 
          guide.underConstruction && 
          parseDateMMDDYY(guide.publishDate).getTime() > currentDate.getTime()) {
        guide.isNext = true;
        guide.isCurrent = false;
      }
    });
  } else {
    // If all guides are under construction, mark the newest as current
    sortedByDate[0].isCurrent = true;
  }
}

