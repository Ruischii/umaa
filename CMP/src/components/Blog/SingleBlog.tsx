import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { slug, title, image, paragraph, tags, isCurrent } = blog;
  const guideLink = `/guides/${slug}`;
  
  // Extract race name from title (e.g., "Champions Meeting Libra Guide" -> "Libra")
  const extractRaceName = (fullTitle: string): string => {
    const match = fullTitle.match(/Champions Meeting\s+(\w+)/i);
    return match ? match[1] : fullTitle;
  };
  
  const raceName = extractRaceName(title);
  
  // Determine the tag to display based on isCurrent status
  const displayTag = isCurrent !== undefined 
    ? (isCurrent ? "Current CM" : "Past CM")
    : tags[0];
  
  // Set tag color based on current/past status
  const tagColorClass = isCurrent 
    ? "bg-primary" 
    : "bg-gray-500 dark:bg-gray-600";
  
  return (
    <>
      <Link href={guideLink} className="block">
        <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300 hover:-translate-y-2 transition-all cursor-pointer">
          <div className="relative block aspect-37/22 w-full overflow-hidden">
            <span className={`${tagColorClass} absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white capitalize transition-transform duration-300 group-hover:scale-110`}>
              {displayTag}
            </span>
            <Image 
              src={image} 
              alt="image" 
              fill 
              className="transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-1"
            />
          </div>
          <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
            <h3 className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white">
              <span className="block">Champions Meeting</span>
              <span className="block">{raceName}</span>
            </h3>
            <p className="text-body-color text-base font-medium dark:text-body-color-dark">
              {paragraph}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleBlog;
