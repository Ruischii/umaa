"use client";
import { useState } from "react";
import Image from "next/image";
import skillsData from "../../../public/images/skills/skills.json";

interface SkillTooltipProps {
  skillName: string;
  imagePath: string;
  children: React.ReactNode;
}

const SkillTooltip = ({ skillName, imagePath, children }: SkillTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // Clean skill name by removing annotations like (RNG), (Budget), etc.
  const cleanSkillName = (name: string): string => {
    return name.replace(/\s*\([^)]*\)\s*/g, '').trim();
  };

  // Find skill description from skills.json
  const findSkillDescription = (name: string): string | null => {
    const cleaned = cleanSkillName(name);
    const skill = skillsData.skills.find(
      (s) => s.name.toLowerCase() === cleaned.toLowerCase()
    );
    return skill ? skill.description : null;
  };

  const description = findSkillDescription(skillName);

  // If no description found, just render children without tooltip
  if (!description) {
    return <>{children}</>;
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={() => setIsVisible(!isVisible)}
    >
      <div className="cursor-help">
        {children}
      </div>
      
      {isVisible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-[99999] pointer-events-none w-[280px] sm:w-[320px]">
          <div className="bg-white dark:bg-gray-dark border-2 border-primary rounded-lg shadow-2xl p-3">
            <div className="flex items-start gap-2">
              <div className="relative h-8 w-8 flex-shrink-0">
                <Image
                  src={`/images/skills/${imagePath}`}
                  alt={skillName}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-lg text-black dark:text-white mb-1 leading-tight">
                  {cleanSkillName(skillName)}
                </p>
                <p className="text-xl text-body-color dark:text-white/90 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
            {/* Arrow pointing down */}
            <div className="absolute top-full left-1/2 -translate-x-1/2">
              <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillTooltip;
