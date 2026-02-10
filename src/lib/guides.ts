import { guidesData, CMGuide } from "@/components/Guides/guidesData";

// Helper function to parse mm/dd/yy date format
function parseDateMMDDYY(dateStr: string): Date {
  const [month, day, year] = dateStr.split('/').map(Number);
  // Assuming 20xx for year
  const fullYear = year + 2000;
  return new Date(fullYear, month - 1, day);
}

export function getAllCMGuides(): CMGuide[] {
  return guidesData;
}

export function getCMGuideBySlug(slug: string): CMGuide | undefined {
  return guidesData.find((guide) => guide.slug === slug);
}

export function getCurrentCMGuide(): CMGuide | undefined {
  // First try to find by isCurrent flag
  const currentGuide = guidesData.find((guide) => guide.isCurrent);
  
  // If no guide is marked as current, return the one with the newest date
  if (!currentGuide && guidesData.length > 0) {
    const sortedByDate = [...guidesData].sort((a, b) => {
      return parseDateMMDDYY(b.publishDate).getTime() - parseDateMMDDYY(a.publishDate).getTime();
    });
    return sortedByDate[0];
  }
  
  return currentGuide;
}

export function getAllCMGuideSlugs(): string[] {
  return guidesData.map((guide) => guide.slug);
}

