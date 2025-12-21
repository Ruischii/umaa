"use client";

import { useEffect, useState } from "react";

export type GuideNavItem = {
  id: string;
  title: string;
};

type GuideNavProps = {
  items: GuideNavItem[];
};

const GuideNav = ({ items }: GuideNavProps) => {
  const [activeId, setActiveId] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past the header
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Find the current section based on scroll position
      const sections = items.map((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          return {
            id: item.id,
            offsetTop: element.offsetTop,
            height: element.offsetHeight,
          };
        }
        return null;
      }).filter(Boolean) as Array<{ id: string; offsetTop: number; height: number }>;

      const scrollPosition = window.scrollY + 150; // Offset for header

      // Find the current active section
      let currentActive = "";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.offsetTop - 100) {
          currentActive = section.id;
          break;
        }
      }

      // If we're at the top, set first section as active
      if (scrollPosition < sections[0]?.offsetTop - 100) {
        currentActive = sections[0]?.id || "";
      }

      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 150; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <>
      {/* Desktop Sticky Nav - positioned outside main content */}
      <div
        className={`hidden xl:block fixed right-4 top-1/2 -translate-y-1/2 z-40 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {isCollapsed ? (
          /* Collapsed bubble state */
          <button
            onClick={() => setIsCollapsed(false)}
            className="w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg flex items-center justify-center origin-right hover:scale-110 transition-transform"
            aria-label="Expand navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        ) : (
          /* Expanded nav state */
        <nav className="bg-white dark:bg-dark border border-body-color/10 dark:border-white/10 rounded-lg shadow-lg p-4 max-h-[80vh] overflow-y-auto w-56">
            {/* Collapse button */}
            <button
              onClick={() => setIsCollapsed(true)}
              className="w-full flex items-center justify-between mb-3 px-2 py-2 rounded-md hover:bg-body-color/10 dark:hover:bg-white/10 transition-colors group"
              aria-label="Collapse navigation"
            >
              <h4 className="text-sm font-bold text-black dark:text-white">
            Contents
          </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-body-color dark:text-white/70 group-hover:text-primary transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left w-full px-3 py-2.5 text-sm rounded-md transition-all duration-200 ${
                    activeId === item.id
                      ? "bg-primary text-white dark:bg-primary dark:text-white font-semibold shadow-sm"
                      : "text-body-color hover:bg-primary/10 dark:text-white/80 dark:hover:bg-white/10 hover:text-primary dark:hover:text-primary font-medium"
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        )}
      </div>

      {/* Mobile/Tablet Horizontal Scroll Nav */}
      <div className="xl:hidden mb-4 -mx-4 px-4">
        <nav className="bg-body-color/5 dark:bg-white/5 rounded-md p-2">
          <div className="flex space-x-1.5 overflow-x-auto pb-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`whitespace-nowrap px-3 py-1.5 text-xs rounded transition-colors flex-shrink-0 ${
                  activeId === item.id
                    ? "bg-primary text-white dark:bg-primary dark:text-white font-medium"
                    : "bg-white dark:bg-dark text-body-color hover:bg-body-color/10 dark:text-white/70 dark:hover:bg-white/10"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default GuideNav;

