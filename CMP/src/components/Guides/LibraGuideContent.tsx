"use client";
import { useState } from "react";

const LibraGuideContent = () => {
  const [openPosition, setOpenPosition] = useState<string | null>("front-runner");

  const togglePosition = (position: string) => {
    setOpenPosition(openPosition === position ? null : position);
  };

  return (
    <div className="space-y-10">
      {/* General Info */}
      <div>
        <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
          Race Information
        </h3>
        <div className="mb-6">
          <p className="text-body-color mb-2 text-base font-medium">
            <strong className="text-black dark:text-white">Track:</strong> Kyoto 3000m (outer) (clockwise)
          </p>
          <p className="text-body-color mb-2 text-base font-medium">
            <strong className="text-black dark:text-white">Race Type:</strong> Championship Cup
          </p>
        </div>

        <h4 className="mb-4 text-xl font-bold text-black dark:text-white">
          Green Skills
        </h4>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Right-Handed", "Fall Runner", "Firm Conditions", "Outer Post Proficiency (RNG)",
            "Long Shot (RNG)", "Target in Sight (RNG)", "Non-Standard Distance",
            "Kyoto Racecourse", "Sunny Days", "Maverick (RNG)", "Lone Wolf (RNG)",
            "Inner Post Proficiency (RNG)", "Lucky Seven (RNG)"
          ].map((skill, index) => (
            <div key={index} className="rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-body-color dark:text-white">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Stat Requirements */}
      <div>
        <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
          Stat Requirements by Position
        </h3>
        
        {/* Ideal Stats Table */}
        <h4 className="mb-4 text-lg font-semibold text-black dark:text-white">
          Ideal Stats
        </h4>
        <div className="mb-8 overflow-x-auto">
          <table className="w-full border-collapse border border-body-color/10 dark:border-white/10">
            <thead className="bg-primary/10">
              <tr>
                <th className="border border-body-color/10 px-4 py-3 text-left font-bold dark:border-white/10">Position</th>
                <th className="border border-body-color/10 px-4 py-3 text-left font-bold dark:border-white/10">Speed</th>
                <th className="border border-body-color/10 px-4 py-3 text-left font-bold dark:border-white/10">Stamina</th>
                <th className="border border-body-color/10 px-4 py-3 text-left font-bold dark:border-white/10">Power</th>
                <th className="border border-body-color/10 px-4 py-3 text-left font-bold dark:border-white/10">Guts</th>
                <th className="border border-body-color/10 px-4 py-3 text-left font-bold dark:border-white/10">Wisdom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">Front Runner</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">901</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">500</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">400</td>
              </tr>
              <tr className="bg-body-color/5">
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">Pace Chaser</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1150</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">901</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">500</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">400</td>
              </tr>
              <tr>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">Late Surger</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1050</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">901</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">450</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">400</td>
              </tr>
              <tr className="bg-body-color/5">
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">End Closer</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1050</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">601</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">400</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">301</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Minimum Stats Table */}
        <h4 className="mb-4 text-lg font-semibold text-black dark:text-white">
          Minimum Stats
        </h4>
        <div className="mb-8 overflow-x-auto">
          <table className="w-full border-collapse border border-body-color/10 dark:border-white/10">
            <thead className="bg-primary/10">
              <tr>
                <th className="border border-body-color/10 px-4 py-3 text-left font-bold dark:border-white/10">Position</th>
                <th className="border border-body-color/10 px-4 py-3 text-left font-bold dark:border-white/10">Speed</th>
                <th className="border border-body-color/10 px-4 py-3 text-left font-bold dark:border-white/10">Stamina</th>
                <th className="border border-body-color/10 px-4 py-3 text-left font-bold dark:border-white/10">Power</th>
                <th className="border border-body-color/10 px-4 py-3 text-left font-bold dark:border-white/10">Guts</th>
                <th className="border border-body-color/10 px-4 py-3 text-left font-bold dark:border-white/10">Wisdom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">Front Runner</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1100</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">601</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">500</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">301</td>
              </tr>
              <tr className="bg-body-color/5">
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">Pace Chaser</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1150</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">601</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">500</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">301</td>
              </tr>
              <tr>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">Late Surger</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1050</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">601</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">450</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">301</td>
              </tr>
              <tr className="bg-body-color/5">
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">End Closer</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">1050</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">601</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">400</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10">301</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Position Strategies */}
      <div>
        <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
          Position Strategies
        </h3>

        {/* Front Runner Dropdown */}
        <div className="mb-4">
          <button
            onClick={() => togglePosition("front-runner")}
            className="w-full rounded-lg border border-body-color/20 bg-white px-6 py-4 text-left transition-all duration-300 hover:scale-[1.02] hover:bg-primary/5 hover:border-primary/30 hover:shadow-md dark:border-white/20 dark:bg-gray-dark dark:hover:bg-primary/10"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-black dark:text-white">
                Front Runner
              </h4>
              <svg
                className={`h-5 w-5 text-body-color transition-transform duration-300 dark:text-white ${
                  openPosition === "front-runner" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {openPosition === "front-runner" && (
            <div className="mt-2 rounded-lg border border-body-color/20 bg-white p-6 dark:border-white/20 dark:bg-gray-dark">
              <div className="space-y-4">
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Core Skills</h5>
                  <p className="text-body-color text-base">Groundwork, Early lead, Highlander</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Accelerations</h5>
                  <p className="text-body-color text-base">3 Greens</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Recovery Skills</h5>
                  <p className="text-body-color text-base">Swinging Maestro, Restless, Cooldown, Breath of Fresh Air</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Good to Fight for 1st</h5>
                  <p className="text-body-color text-base">Front Runner Corners, Long Corners, Corner Adept, Slipstream, Ramp Up, Leader's Pride</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Speed Skills</h5>
                  <p className="text-body-color text-base">Playtime's Over!, Fast-Paced, Tail Held High</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Good but RNG/Expensive</h5>
                  <p className="text-body-color text-base">Straightaway Adept, Long Straightaways, Front Runner Straights, Ignited Spirit SPD</p>
                </div>
                <div className="bg-primary/5 rounded-md p-4">
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Deck Recommendations</h5>
                  <p className="text-body-color mb-2 text-sm"><strong>Parent Deck:</strong> 30% total race bonus - Use balanced speed and stamina cards</p>
                  <p className="text-body-color mb-2 text-sm"><strong>Ace (Budget):</strong> 30% race bonus - Budget-friendly core stats focus</p>
                  <p className="text-body-color text-sm"><strong>Ace (Whale):</strong> 45% race bonus - Premium support cards</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Pace Chaser Dropdown */}
        <div className="mb-4">
          <button
            onClick={() => togglePosition("pace-chaser")}
            className="w-full rounded-lg border border-body-color/20 bg-white px-6 py-4 text-left transition-all duration-300 hover:scale-[1.02] hover:bg-primary/5 hover:border-primary/30 hover:shadow-md dark:border-white/20 dark:bg-gray-dark dark:hover:bg-primary/10"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-black dark:text-white">
                Pace Chaser
              </h4>
              <svg
                className={`h-5 w-5 text-body-color transition-transform duration-300 dark:text-white ${
                  openPosition === "pace-chaser" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {openPosition === "pace-chaser" && (
            <div className="mt-2 rounded-lg border border-body-color/20 bg-white p-6 dark:border-white/20 dark:bg-gray-dark">
              <div className="space-y-4">
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Core Skills</h5>
                  <p className="text-body-color text-base">Ignited Spirit PWR, Head On, Highlander</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Accelerations</h5>
                  <p className="text-body-color text-base">Nimble Navigator, Uma Stan</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Recovery Skills</h5>
                  <p className="text-body-color text-base">Swinging Maestro, Race Planner, Cooldown, Breath of Fresh Air, Gourmand, Calm and Collected</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Speed Skills</h5>
                  <p className="text-body-color text-base">Playtime's Over!, Tail Held High, Pace Chaser Corners, Long Corners, Corner Adept, Slipstream, Prepared to Pass, Ramp Up</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Good but RNG/Expensive</h5>
                  <p className="text-body-color text-base">Straightaway Adept, Long Straightaways, Pace Chaser Straights, Ignited Spirit SPD</p>
                </div>
                <div className="bg-primary/5 rounded-md p-4">
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Deck Recommendations</h5>
                  <p className="text-body-color mb-2 text-sm"><strong>Parent Deck:</strong> 50% total race bonus - Recovery and speed emphasis</p>
                  <p className="text-body-color mb-2 text-sm"><strong>Ace (Budget):</strong> 30% race bonus - Cost-effective position control</p>
                  <p className="text-body-color text-sm"><strong>Ace (Whale):</strong> 50% race bonus - Consistent pace chasing dominance</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Late Surger Dropdown */}
        <div className="mb-4">
          <button
            onClick={() => togglePosition("late-surger")}
            className="w-full rounded-lg border border-body-color/20 bg-white px-6 py-4 text-left transition-all duration-300 hover:scale-[1.02] hover:bg-primary/5 hover:border-primary/30 hover:shadow-md dark:border-white/20 dark:bg-gray-dark dark:hover:bg-primary/10"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-black dark:text-white">
                Late Surger
              </h4>
              <svg
                className={`h-5 w-5 text-body-color transition-transform duration-300 dark:text-white ${
                  openPosition === "late-surger" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {openPosition === "late-surger" && (
            <div className="mt-2 rounded-lg border border-body-color/20 bg-white p-6 dark:border-white/20 dark:bg-gray-dark">
              <div className="space-y-4">
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Core Skills</h5>
                  <p className="text-body-color text-base">Let's Pump Some Iron!, Ignited Spirit PWR</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Accelerations</h5>
                  <p className="text-body-color text-base">Slick Surge, Nimble Navigator</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Recovery Skills</h5>
                  <p className="text-body-color text-base">Swinging Maestro, Lie in Wait, Cooldown, Breath of Fresh Air</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Speed Skills</h5>
                  <p className="text-body-color text-base">Playtime's Over!, Tail Held High, Late Surger Corners, Long Corners, Corner Adept, Slipstream, Ramp Up</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Special Notes</h5>
                  <p className="text-body-color text-base">Position Pilfer, 1,500,000 CC</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Good but RNG/Expensive</h5>
                  <p className="text-body-color text-base">Long Straightaways, Late Surger Straightaways, Ignited Spirit SPD</p>
                </div>
                <div className="bg-primary/5 rounded-md p-4">
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Deck Recommendations</h5>
                  <p className="text-body-color mb-2 text-sm"><strong>Parent Deck:</strong> 30% total race bonus - Stamina and late game acceleration focus</p>
                  <p className="text-body-color mb-2 text-sm"><strong>Ace (Budget):</strong> 35% race bonus - Core late surge setup</p>
                  <p className="text-body-color text-sm"><strong>Ace (Whale):</strong> 40% race bonus - Optimized for 2000m+ races</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* End Closer Dropdown */}
        <div className="mb-4">
          <button
            onClick={() => togglePosition("end-closer")}
            className="w-full rounded-lg border border-body-color/20 bg-white px-6 py-4 text-left transition-all duration-300 hover:scale-[1.02] hover:bg-primary/5 hover:border-primary/30 hover:shadow-md dark:border-white/20 dark:bg-gray-dark dark:hover:bg-primary/10"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-black dark:text-white">
                End Closer
              </h4>
              <svg
                className={`h-5 w-5 text-body-color transition-transform duration-300 dark:text-white ${
                  openPosition === "end-closer" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {openPosition === "end-closer" && (
            <div className="mt-2 rounded-lg border border-body-color/20 bg-white p-6 dark:border-white/20 dark:bg-gray-dark">
              <div className="space-y-4">
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Core Skills</h5>
                  <p className="text-body-color text-base">Let's Pump Some Iron!, Nimble Navigator</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Accelerations</h5>
                  <p className="text-body-color text-base">Straightaway Spurt, Uma Stan</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Special Notes</h5>
                  <p className="text-body-color text-base">Get an extra 50 stamina for Manhattan Cafe | Stamina Siphon</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Recovery Skills</h5>
                  <p className="text-body-color text-base">Swinging Maestro, Go-Home Specialist, Sleeping Lion, Breath of Fresh Air</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Speed Skills</h5>
                  <p className="text-body-color text-base">Corner Adept, Tail Held High, End Closer Corners, Long Corners, Ramp Up, Slipstream, Early Start</p>
                </div>
                <div>
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Good but RNG/Expensive</h5>
                  <p className="text-body-color text-base">Long Straightaways, End Closer Straightaways, Ignited Spirit SPD</p>
                </div>
                <div className="bg-primary/5 rounded-md p-4">
                  <h5 className="mb-2 text-base font-semibold text-black dark:text-white">Deck Recommendations</h5>
                  <p className="text-body-color mb-2 text-sm"><strong>Parent Deck:</strong> 45% total race bonus - Stamina inheritance and finishing power</p>
                  <p className="text-body-color mb-2 text-sm"><strong>Ace (Budget):</strong> 35% race bonus - Budget-friendly end closer setup</p>
                  <p className="text-body-color text-sm"><strong>Ace (Whale):</strong> 50% race bonus - Max stat investment</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LibraGuideContent;

