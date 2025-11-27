import { guidesData, CMGuide } from "@/components/Guides/guidesData";

export function getAllCMGuides(): CMGuide[] {
  return guidesData;
}

export function getCMGuideBySlug(slug: string): CMGuide | undefined {
  return guidesData.find((guide) => guide.slug === slug);
}

export function getCurrentCMGuide(): CMGuide | undefined {
  return guidesData.find((guide) => guide.isCurrent);
}

export function getAllCMGuideSlugs(): string[] {
  return guidesData.map((guide) => guide.slug);
}

