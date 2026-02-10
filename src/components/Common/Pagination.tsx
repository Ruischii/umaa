"use client";
import Link from "next/link";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  basePath?: string;
}

const Pagination = ({ totalItems, itemsPerPage, currentPage, basePath = "/guides" }: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      // Show all pages if total pages is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const createPageUrl = (page: number) => {
    if (page === 1) {
      return basePath;
    }
    return `${basePath}?page=${page}`;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* Previous Button */}
      <Link
        href={createPageUrl(currentPage - 1)}
        className={`flex items-center justify-center px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
          currentPage === 1
            ? "bg-body-color/10 text-body-color/50 cursor-not-allowed dark:bg-white/10 dark:text-white/50"
            : "bg-primary text-white hover:bg-primary/90 hover:scale-105 shadow-md"
        }`}
        aria-disabled={currentPage === 1}
        onClick={(e) => {
          if (currentPage === 1) {
            e.preventDefault();
          }
        }}
      >
        <svg
          className="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Previous
      </Link>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-body-color dark:text-white"
              >
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <Link
              key={pageNum}
              href={createPageUrl(pageNum)}
              className={`flex items-center justify-center min-w-[44px] h-11 px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
                isActive
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-body-color hover:bg-primary/10 hover:text-primary dark:bg-gray-dark dark:text-white dark:hover:bg-primary/20"
              }`}
            >
              {pageNum}
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      <Link
        href={createPageUrl(currentPage + 1)}
        className={`flex items-center justify-center px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
          currentPage === totalPages
            ? "bg-body-color/10 text-body-color/50 cursor-not-allowed dark:bg-white/10 dark:text-white/50"
            : "bg-primary text-white hover:bg-primary/90 hover:scale-105 shadow-md"
        }`}
        aria-disabled={currentPage === totalPages}
        onClick={(e) => {
          if (currentPage === totalPages) {
            e.preventDefault();
          }
        }}
      >
        Next
        <svg
          className="w-5 h-5 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default Pagination;
