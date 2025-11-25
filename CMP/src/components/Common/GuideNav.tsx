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
        className={`hidden xl:block fixed left-2 top-1/2 -translate-y-1/2 z-40 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="bg-white dark:bg-dark border border-body-color/10 dark:border-white/10 rounded-md shadow-md p-2 max-h-[80vh] overflow-y-auto w-36">
          <h4 className="text-body-color mb-2 text-xs font-semibold text-black dark:text-white px-1">
            Contents
          </h4>
          <ul className="space-y-0.5">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left w-full px-2 py-1 text-xs rounded transition-colors ${
                    activeId === item.id
                      ? "bg-primary text-white dark:bg-primary dark:text-white font-medium"
                      : "text-body-color hover:bg-body-color/10 dark:text-white/70 dark:hover:bg-white/10"
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
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

