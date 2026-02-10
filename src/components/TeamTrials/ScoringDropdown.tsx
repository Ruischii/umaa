"use client";
import { useState } from "react";

const ScoringDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-10 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-lg border border-body-color/20 bg-white px-6 py-4 text-left transition-all duration-300 hover:scale-[1.02] hover:bg-primary/5 hover:border-primary/30 hover:shadow-md dark:border-white/20 dark:bg-gray-dark dark:hover:bg-primary/10"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-black dark:text-white">
            Team Trials Scoring Guide
          </h3>
          <svg
            className={`h-5 w-5 text-body-color transition-transform duration-300 dark:text-white ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="mt-2 rounded-lg border border-body-color/20 bg-white p-6 dark:border-white/20 dark:bg-gray-dark">
          <div className="text-body-color space-y-6 text-xl dark:text-body-color-dark">
            {/* Score Modifiers */}
            <div>
              <h4 className="mb-3 text-2xl font-semibold text-black dark:text-white">
                Score Modifiers (Additive)
              </h4>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong className="text-black dark:text-white">Ace Bonus:</strong> +10% for position 1 uma
                </li>
                <li>
                  <strong className="text-black dark:text-white">Opponent Rating Bonus:</strong> ~50% at 100k rating, ~80% at 150k rating
                </li>
                <li>
                  <strong className="text-black dark:text-white">Support Bonus:</strong> Few percent from leveled support cards
                </li>
                <li>
                  <strong className="text-black dark:text-white">Consecutive Win Bonus:</strong> +3% per consecutive race won
                </li>
              </ul>
            </div>

            {/* Team Points */}
            <div>
              <h4 className="mb-3 text-2xl font-semibold text-black dark:text-white">
                Team Points
              </h4>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong className="text-black dark:text-white">Victory (3+ races won):</strong> 10,000 points
                </li>
                <li>
                  <strong className="text-black dark:text-white">Trio (1st, 2nd, 3rd):</strong> 5,000 points
                </li>
                <li>
                  <strong className="text-black dark:text-white">Quinella (1st, 2nd in 2-uma races):</strong> 3,000 points
                </li>
                <li>
                  <strong className="text-black dark:text-white">All Members Top 5:</strong> 4,000 points (mutually exclusive with Trio)
                </li>
              </ul>
            </div>

            {/* Race Results */}
            <div>
              <h4 className="mb-3 text-2xl font-semibold text-black dark:text-white">
                Race Results
              </h4>
              
              {/* Final Position Table */}
              <div className="mb-4">
                <h5 className="mb-2 font-semibold text-black dark:text-white">
                  Final Position
                </h5>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-body-color/20 dark:border-white/20">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="border border-body-color/20 px-4 py-2 text-left font-semibold text-black dark:border-white/20 dark:text-white">Position</th>
                        <th className="border border-body-color/20 px-4 py-2 text-left font-semibold text-black dark:border-white/20 dark:text-white">Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-body-color/20 px-4 py-2 text-body-color dark:border-white/20 dark:text-body-color-dark">1st</td>
                        <td className="border border-body-color/20 px-4 py-2 font-semibold text-black dark:border-white/20 dark:text-white">10,000</td>
                      </tr>
                      <tr className="bg-body-color/5">
                        <td className="border border-body-color/20 px-4 py-2 text-body-color dark:border-white/20 dark:text-body-color-dark">2nd</td>
                        <td className="border border-body-color/20 px-4 py-2 font-semibold text-black dark:border-white/20 dark:text-white">8,000</td>
                      </tr>
                      <tr>
                        <td className="border border-body-color/20 px-4 py-2 text-body-color dark:border-white/20 dark:text-body-color-dark">3rd</td>
                        <td className="border border-body-color/20 px-4 py-2 font-semibold text-black dark:border-white/20 dark:text-white">7,000</td>
                      </tr>
                      <tr className="bg-body-color/5">
                        <td className="border border-body-color/20 px-4 py-2 text-body-color dark:border-white/20 dark:text-body-color-dark">4th</td>
                        <td className="border border-body-color/20 px-4 py-2 font-semibold text-black dark:border-white/20 dark:text-white">6,000</td>
                      </tr>
                      <tr>
                        <td className="border border-body-color/20 px-4 py-2 text-body-color dark:border-white/20 dark:text-body-color-dark">5th</td>
                        <td className="border border-body-color/20 px-4 py-2 font-semibold text-black dark:border-white/20 dark:text-white">5,000</td>
                      </tr>
                      <tr className="bg-body-color/5">
                        <td className="border border-body-color/20 px-4 py-2 text-body-color dark:border-white/20 dark:text-body-color-dark">6th-7th</td>
                        <td className="border border-body-color/20 px-4 py-2 font-semibold text-black dark:border-white/20 dark:text-white">4,000</td>
                      </tr>
                      <tr>
                        <td className="border border-body-color/20 px-4 py-2 text-body-color dark:border-white/20 dark:text-body-color-dark">8th-9th</td>
                        <td className="border border-body-color/20 px-4 py-2 font-semibold text-black dark:border-white/20 dark:text-white">3,000</td>
                      </tr>
                      <tr className="bg-body-color/5">
                        <td className="border border-body-color/20 px-4 py-2 text-body-color dark:border-white/20 dark:text-body-color-dark">10th-12th</td>
                        <td className="border border-body-color/20 px-4 py-2 font-semibold text-black dark:border-white/20 dark:text-white">2,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 1st Place Margin */}
              <div>
                <h5 className="mb-2 font-semibold text-black dark:text-white">
                  1st Place Margin
                </h5>
                <p className="text-body-color text-lg dark:text-body-color-dark">
                  Varies 1,000-5,000 based on distance (extremely close or dominant wins score highest)
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="mb-3 text-2xl font-semibold text-black dark:text-white">
                Skills
              </h4>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong className="text-black dark:text-white">Normal Skill:</strong> 500 points
                </li>
                <li>
                  <strong className="text-black dark:text-white">Golden Skill:</strong> 1,200 points
                </li>
                <li>
                  <strong className="text-black dark:text-white">Unique Skill (⭐/⭐⭐):</strong> 1,500-2,500 (base 1,500 at level 1, +100 per level from level 3+)
                </li>
                <li>
                  <strong className="text-black dark:text-white">Unique Skill (⭐⭐⭐+):</strong> 2,000-3,000 (+500 bonus over lower rarity)
                </li>
              </ul>
            </div>

            {/* Other Bonuses */}
            <div>
              <h4 className="mb-3 text-2xl font-semibold text-black dark:text-white">
                Other Bonuses
              </h4>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong className="text-black dark:text-white">Good Positioning:</strong> 1,000 points at middle phase, 1,000 at final phase (highest placement among same strategy)
                </li>
                <li>
                  <strong className="text-black dark:text-white">Beat Target Time:</strong> 100 per 0.1s faster (max 2,000 for -2.0s)
                </li>
                <li>
                  <strong className="text-black dark:text-white">Strong Start:</strong> 1,000 points (20% chance, affected by Focus/Concentration skills)
                </li>
                <li>
                  <strong className="text-black dark:text-white">Dark Horse:</strong> 4,000 points (8th+ favorite finishes 3rd+)
                </li>
                <li>
                  <strong className="text-black dark:text-white">Rushed Penalty:</strong> -500 flat, -100 per second affected (max -12s naturally)
                </li>
              </ul>
            </div>

            {/* Key Strategy */}
            <div>
              <h4 className="mb-3 text-2xl font-semibold text-black dark:text-white">
                Key Strategy
              </h4>
              <ul className="ml-6 list-disc space-y-2">
                <li>Different strategies on team allow multiple Good Positioning bonuses</li>
                <li>All umas in top 5 provides team bonus</li>
                <li>Higher rarity unique skills significantly boost points</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoringDropdown;

