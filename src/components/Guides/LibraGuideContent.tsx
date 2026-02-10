"use client";
import { useState } from "react";
import Image from "next/image";

const LibraGuideContent = () => {
  const [openPosition, setOpenPosition] = useState<string | null>("front-runner");

  const togglePosition = (position: string) => {
    setOpenPosition(openPosition === position ? null : position);
  };

  // Comprehensive mapping of skill names to their image files
  const skillImages: { [key: string]: string } = {
    // Green Skills
    "Right-Handed": "speed.png",
    "Fall Runner": "speed.png",
    "Firm Conditions": "strength.png",
    "Outer Post Proficiency (RNG)": "speed.png",
    "Long Shot (RNG)": "speed.png",
    "Target in Sight (RNG)": "guts.png",
    "Non-Standard Distance": "stam.png",
    "Kyoto Racecourse": "stam.png",
    "Sunny Days": "guts.png",
    "Maverick (RNG)": "speed.png",
    "Lone Wolf (RNG)": "speed.png",
    "Inner Post Proficiency (RNG)": "wit.png",
    "Lucky Seven (RNG)": "luck.png",
    
    // Acceleration Skills
    "Groundwork": "accel.png",
    "Early lead": "accel.png",
    "Highlander": "accel.png",
    "Nimble Navigator": "accel.png",
    "Slick Surge": "accel.png",
    "Straightaway Spurt": "accel.png",
    "Head On": "accel.png",
    
    // Recovery Skills (Gold)
    "Swinging Maestro": "recovery_gold.png",
    "Restless": "recovery_gold.png",
    "Cooldown": "recovery_gold.png",
    "Breath of Fresh Air": "recovery_gold.png",
    "Race Planner": "recovery_gold.png",
    "Gourmand": "recovery_gold.png",
    "Calm and Collected": "recovery_gold.png",
    "Lie in Wait": "recovery_gold.png",
    "Go-Home Specialist": "recovery_gold.png",
    "Sleeping Lion": "recovery_gold.png",
    
    // Velocity/Speed Skills
    "Front Runner Corners": "velocity.png",
    "Long Corners": "velocity.png",
    "Corner Adept": "velocity.png",
    "Slipstream": "velocity.png",
    "Ramp Up": "velocity.png",
    "Leader's Pride": "velocity.png",
    "Playtime's Over!": "velocity.png",
    "Fast-Paced": "velocity.png",
    "Tail Held High": "velocity.png",
    "Straightaway Adept": "velocity.png",
    "Long Straightaways": "velocity.png",
    "Front Runner Straightaways": "velocity.png",
    "Pace Chaser Corners": "velocity.png",
    "Pace Chaser Straightaways": "velocity.png",
    "Prepared to Pass": "velocity.png",
    "Late Surger Corners": "velocity.png",
    "Late Surger Straightaways": "velocity.png",
    "Position Pilfer": "velocity.png",
    "End Closer Corners": "velocity.png",
    "End Closer Straightaways": "velocity.png",
    "Early Start": "velocity.png",
    "Uma Stan": "velocity.png",
    
    // Special Skills (Team Bombs)
    "Ignited Spirit PWR": "powerBomb.png",
    "Ignited Spirit SPD": "speedBomb.png",
    "Let's Pump Some Iron!": "powerBomb_gold.png",
    "1,500,000 CC": "velocity.png",
    "Stamina Siphon": "recovery.png",
    
    // Special text (non-skills)
    "3 Greens": "accel.png",
  };
  
  // Helper component to render skills with icons
  const SkillsList = ({ skills }: { skills: string[] }) => (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-1.5 rounded-md bg-body-color/5 dark:bg-white/5 px-2.5 py-1.5 text-xl text-body-color dark:text-white">
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              src={`/images/skills/${skillImages[skill] || "speed.png"}`}
              alt={skill}
              fill
              className="object-contain"
            />
          </div>
          <span>{skill}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-10">
      {/* Quickstart Section */}
      <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-6 dark:bg-primary/10">
        <h3 className="mb-5 text-4xl font-bold text-black dark:text-white sm:text-5xl">
          Quickstart Guide ⚡
        </h3>
        <div className="space-y-5">
          <div>
            <h4 className="mb-3 text-3xl font-semibold text-black dark:text-white sm:text-4xl">
              Skill Building Strategy
            </h4>
            <ul className="space-y-2 text-2xl font-medium text-body-color dark:text-white/90 sm:text-3xl">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span><strong>More skills but white &gt; less skills but gold</strong> (excluding gold recovery skills)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Other than gold recovery skills, buying the same skill twice gives less value - get first stage of multiple skills instead of maxing a few</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-3xl font-semibold text-black dark:text-white sm:text-4xl">
              Skill Priority Order
            </h4>
            <ol className="space-y-2 text-2xl font-medium text-body-color dark:text-white/90 sm:text-3xl">
              <li className="flex gap-2">
                <span className="font-bold text-primary">1.</span>
                <span><strong>Gold recovery x2</strong> / First stage green skills</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">2.</span>
                <span><strong>Late race accels</strong> / Unique skills / Movement skills</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">3.</span>
                <span><strong>Standard mid race velocity skills</strong>, like Corner skills</span>
              </li>
            </ol>
          </div>

          <div>
            <h4 className="mb-3 text-3xl font-semibold text-black dark:text-white sm:text-4xl">
              Pro Tips
            </h4>
            <ul className="space-y-2 text-2xl font-medium text-body-color dark:text-white/90 sm:text-3xl">
              <li className="flex gap-2">
                <span className="text-primary">💡</span>
                <span>Try to use parents with <strong>Long pink sparks</strong> for Long S = ~100 speed for free</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">⚠️</span>
                <span><strong className="text-red-500">Long races require meeting stamina minimum</strong> to even get to the finish line</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* General Info */}
      <div>
        <h3 className="mb-8 text-4xl font-bold text-black dark:text-white sm:text-5xl">
          Race Information
        </h3>
        <div className="mb-8">
          <p className="text-body-color mb-3 text-2xl font-medium sm:text-3xl">
            <strong className="text-black dark:text-white">Track:</strong> Kyoto 3000m (outer) (clockwise)
          </p>
          <p className="text-body-color mb-3 text-2xl font-medium sm:text-3xl">
            <strong className="text-black dark:text-white">Distance:</strong> Long
          </p>
        </div>

        <h4 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl">
          Green Skills
        </h4>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {[
            "Right-Handed", "Fall Runner", "Firm Conditions", "Outer Post Proficiency (RNG)",
            "Long Shot (RNG)", "Target in Sight (RNG)", "Non-Standard Distance",
            "Kyoto Racecourse", "Sunny Days", "Maverick (RNG)", "Lone Wolf (RNG)",
            "Inner Post Proficiency (RNG)", "Lucky Seven (RNG)"
          ].map((skill, index) => (
            <div key={index} className="flex items-center gap-2 rounded-md bg-primary/10 px-3 py-2.5 text-2xl font-medium text-body-color dark:text-white md:px-4 sm:text-3xl">
              <div className="relative h-6 w-6 flex-shrink-0">
                <Image
                  src={`/images/skills/${skillImages[skill]}`}
                  alt={skill}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="flex-1">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stat Requirements */}
      <div>
        <h3 className="mb-8 text-4xl font-bold text-black dark:text-white sm:text-5xl">
          Stat Requirements by Position
        </h3>
        
        {/* Ideal Stats Table */}
        <h4 className="mb-5 text-3xl font-semibold text-black dark:text-white sm:text-4xl">
          Ideal Stats
        </h4>
        <div className="mb-10 overflow-x-auto">
          <table className="w-full border-collapse border border-body-color/10 text-xl sm:text-2xl dark:border-white/10">
            <thead className="bg-primary/10">
              <tr>
                <th className="border border-body-color/10 px-2 py-2 text-left font-bold dark:border-white/10 md:px-3 md:py-2.5 lg:px-4 lg:py-3">Position</th>
                <th className="border border-body-color/10 px-2 py-2 text-left font-bold dark:border-white/10 md:px-3 md:py-2.5 lg:px-4 lg:py-3">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <div className="relative h-5 w-5 flex-shrink-0 lg:h-6 lg:w-6">
                      <Image src="/images/statImage/speedStat.png" alt="Speed" fill className="object-contain" />
                    </div>
                    <span>Speed</span>
                  </div>
                </th>
                <th className="border border-body-color/10 px-2 py-2 text-left font-bold dark:border-white/10 md:px-3 md:py-2.5 lg:px-4 lg:py-3">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <div className="relative h-5 w-5 flex-shrink-0 lg:h-6 lg:w-6">
                      <Image src="/images/statImage/staminaStat.png" alt="Stamina" fill className="object-contain" />
                    </div>
                    <span>Stamina</span>
                  </div>
                </th>
                <th className="border border-body-color/10 px-2 py-2 text-left font-bold dark:border-white/10 md:px-3 md:py-2.5 lg:px-4 lg:py-3">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <div className="relative h-5 w-5 flex-shrink-0 lg:h-6 lg:w-6">
                      <Image src="/images/statImage/strengthStat.png" alt="Power" fill className="object-contain" />
                    </div>
                    <span>Power</span>
                  </div>
                </th>
                <th className="border border-body-color/10 px-2 py-2 text-left font-bold dark:border-white/10 md:px-3 md:py-2.5 lg:px-4 lg:py-3">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <div className="relative h-5 w-5 flex-shrink-0 lg:h-6 lg:w-6">
                      <Image src="/images/statImage/gutsStat.png" alt="Guts" fill className="object-contain" />
                    </div>
                    <span>Guts</span>
                  </div>
                </th>
                <th className="border border-body-color/10 px-2 py-2 text-left font-bold dark:border-white/10 md:px-3 md:py-2.5 lg:px-4 lg:py-3">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <div className="relative h-5 w-5 flex-shrink-0 lg:h-6 lg:w-6">
                      <Image src="/images/statImage/witStat.png" alt="Wit" fill className="object-contain" />
                    </div>
                    <span>Wit</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">Front Runner</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">901</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">500</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">400</td>
              </tr>
              <tr className="bg-body-color/5">
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">Pace Chaser</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1150</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">901</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">500</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">400</td>
              </tr>
              <tr>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">Late Surger</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1050</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">901</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">450</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">400</td>
              </tr>
              <tr className="bg-body-color/5">
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">End Closer</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1050</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">601</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">400</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">301</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Minimum Stats Table */}
        <h4 className="mb-5 text-3xl font-semibold text-black dark:text-white sm:text-4xl">
          Minimum Stats
        </h4>
        <div className="mb-10 overflow-x-auto">
          <table className="w-full border-collapse border border-body-color/10 text-xl sm:text-2xl dark:border-white/10">
            <thead className="bg-primary/10">
              <tr>
                <th className="border border-body-color/10 px-4 py-3 text-left text-2xl font-bold dark:border-white/10 sm:text-3xl md:px-5 md:py-4">Position</th>
                <th className="border border-body-color/10 px-4 py-3 text-left text-2xl font-bold dark:border-white/10 sm:text-3xl md:px-5 md:py-4">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <div className="relative h-5 w-5 flex-shrink-0 lg:h-6 lg:w-6">
                      <Image src="/images/statImage/speedStat.png" alt="Speed" fill className="object-contain" />
                    </div>
                    <span>Speed</span>
                  </div>
                </th>
                <th className="border border-body-color/10 px-4 py-3 text-left text-2xl font-bold dark:border-white/10 sm:text-3xl md:px-5 md:py-4">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <div className="relative h-5 w-5 flex-shrink-0 lg:h-6 lg:w-6">
                      <Image src="/images/statImage/staminaStat.png" alt="Stamina" fill className="object-contain" />
                    </div>
                    <span>Stamina</span>
                  </div>
                </th>
                <th className="border border-body-color/10 px-4 py-3 text-left text-2xl font-bold dark:border-white/10 sm:text-3xl md:px-5 md:py-4">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <div className="relative h-5 w-5 flex-shrink-0 lg:h-6 lg:w-6">
                      <Image src="/images/statImage/strengthStat.png" alt="Power" fill className="object-contain" />
                    </div>
                    <span>Power</span>
                  </div>
                </th>
                <th className="border border-body-color/10 px-4 py-3 text-left text-2xl font-bold dark:border-white/10 sm:text-3xl md:px-5 md:py-4">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <div className="relative h-5 w-5 flex-shrink-0 lg:h-6 lg:w-6">
                      <Image src="/images/statImage/gutsStat.png" alt="Guts" fill className="object-contain" />
                    </div>
                    <span>Guts</span>
                  </div>
                </th>
                <th className="border border-body-color/10 px-4 py-3 text-left text-2xl font-bold dark:border-white/10 sm:text-3xl md:px-5 md:py-4">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <div className="relative h-5 w-5 flex-shrink-0 lg:h-6 lg:w-6">
                      <Image src="/images/statImage/witStat.png" alt="Wit" fill className="object-contain" />
                    </div>
                    <span>Wit</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">Front Runner</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1100</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">601</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">500</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">301</td>
              </tr>
              <tr className="bg-body-color/5">
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">Pace Chaser</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1150</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">601</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">500</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">301</td>
              </tr>
              <tr>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">Late Surger</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1050</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">601</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">450</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">301</td>
              </tr>
              <tr className="bg-body-color/5">
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">End Closer</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1200</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">1050</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">601</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">400</td>
                <td className="border border-body-color/10 px-4 py-3 dark:border-white/10 md:px-5 md:py-4">301</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Position Strategies */}
      <div>
        <h3 className="mb-8 text-4xl font-bold text-black dark:text-white sm:text-5xl">
          Position Strategies
        </h3>

        {/* Front Runner Dropdown */}
        <div className="mb-4">
          <button
            onClick={() => togglePosition("front-runner")}
            className="w-full rounded-lg border border-body-color/20 bg-white px-6 py-4 text-left transition-all duration-300 hover:scale-[1.02] hover:bg-primary/5 hover:border-primary/30 hover:shadow-md dark:border-white/20 dark:bg-gray-dark dark:hover:bg-primary/10"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl">
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
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Core Skills</h5>
                  <SkillsList skills={["Groundwork", "Early lead", "Highlander"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Accelerations</h5>
                  <SkillsList skills={["3 Greens"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Recovery Skills</h5>
                  <SkillsList skills={["Swinging Maestro", "Restless", "Cooldown", "Breath of Fresh Air"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Good to Fight for 1st</h5>
                  <SkillsList skills={["Front Runner Corners", "Long Corners", "Corner Adept", "Slipstream", "Ramp Up", "Leader's Pride"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Speed Skills</h5>
                  <SkillsList skills={["Playtime's Over!", "Fast-Paced", "Tail Held High"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Good but RNG/Expensive</h5>
                  <SkillsList skills={["Straightaway Adept", "Long Straightaways", "Front Runner Straightaways", "Ignited Spirit SPD"]} />
                </div>
                <div className="bg-primary/5 rounded-md p-4">
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Deck Recommendations</h5>
                  <p className="text-body-color mb-2 text-2xl font-medium sm:text-3xl"><strong>Parent Deck:</strong> 30% total race bonus - Use balanced speed and stamina cards</p>
                  <p className="text-body-color mb-2 text-2xl font-medium sm:text-3xl"><strong>Ace (Budget):</strong> 30% race bonus - Budget-friendly core stats focus</p>
                  <p className="text-body-color text-2xl font-medium sm:text-3xl"><strong>Ace (Whale):</strong> 45% race bonus - Premium support cards</p>
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
              <h4 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl">
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
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Core Skills</h5>
                  <SkillsList skills={["Ignited Spirit PWR", "Head On", "Highlander"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Accelerations</h5>
                  <SkillsList skills={["Nimble Navigator", "Uma Stan"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Recovery Skills</h5>
                  <SkillsList skills={["Swinging Maestro", "Race Planner", "Cooldown", "Breath of Fresh Air", "Gourmand", "Calm and Collected"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Speed Skills</h5>
                  <SkillsList skills={["Playtime's Over!", "Tail Held High", "Pace Chaser Corners", "Long Corners", "Corner Adept", "Slipstream", "Prepared to Pass", "Ramp Up"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Good but RNG/Expensive</h5>
                  <SkillsList skills={["Straightaway Adept", "Long Straightaways", "Pace Chaser Straightaways", "Ignited Spirit SPD"]} />
                </div>
                <div className="bg-primary/5 rounded-md p-4">
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Deck Recommendations</h5>
                  <p className="text-body-color mb-2 text-xl"><strong>Parent Deck:</strong> 50% total race bonus - Recovery and speed emphasis</p>
                  <p className="text-body-color mb-2 text-xl"><strong>Ace (Budget):</strong> 30% race bonus - Cost-effective position control</p>
                  <p className="text-body-color text-xl"><strong>Ace (Whale):</strong> 50% race bonus - Consistent pace chasing dominance</p>
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
              <h4 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl">
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
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Core Skills</h5>
                  <SkillsList skills={["Let's Pump Some Iron!", "Ignited Spirit PWR"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Accelerations</h5>
                  <SkillsList skills={["Slick Surge", "Nimble Navigator"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Recovery Skills</h5>
                  <SkillsList skills={["Swinging Maestro", "Lie in Wait", "Cooldown", "Breath of Fresh Air"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Speed Skills</h5>
                  <SkillsList skills={["Playtime's Over!", "Tail Held High", "Late Surger Corners", "Long Corners", "Corner Adept", "Slipstream", "Ramp Up"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Special Notes</h5>
                  <SkillsList skills={["Position Pilfer", "1,500,000 CC"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Good but RNG/Expensive</h5>
                  <SkillsList skills={["Long Straightaways", "Late Surger Straightaways", "Ignited Spirit SPD"]} />
                </div>
                <div className="bg-primary/5 rounded-md p-4">
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Deck Recommendations</h5>
                  <p className="text-body-color mb-2 text-xl"><strong>Parent Deck:</strong> 30% total race bonus - Stamina and late game acceleration focus</p>
                  <p className="text-body-color mb-2 text-xl"><strong>Ace (Budget):</strong> 35% race bonus - Core late surge setup</p>
                  <p className="text-body-color text-xl"><strong>Ace (Whale):</strong> 40% race bonus - Optimized for 2000m+ races</p>
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
              <h4 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl">
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
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Core Skills</h5>
                  <SkillsList skills={["Let's Pump Some Iron!", "Nimble Navigator"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Accelerations</h5>
                  <SkillsList skills={["Straightaway Spurt", "Uma Stan"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Special Notes</h5>
                  <p className="text-body-color text-xl">Get an extra 50 stamina for Manhattan Cafe</p>
                  <SkillsList skills={["Stamina Siphon"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Recovery Skills</h5>
                  <SkillsList skills={["Swinging Maestro", "Go-Home Specialist", "Sleeping Lion", "Breath of Fresh Air"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Speed Skills</h5>
                  <SkillsList skills={["Corner Adept", "Tail Held High", "End Closer Corners", "Long Corners", "Ramp Up", "Slipstream", "Early Start"]} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Good but RNG/Expensive</h5>
                  <SkillsList skills={["Long Straightaways", "End Closer Straightaways", "Ignited Spirit SPD"]} />
                </div>
                <div className="bg-primary/5 rounded-md p-4">
                  <h5 className="mb-2 text-2xl font-semibold text-black dark:text-white">Deck Recommendations</h5>
                  <p className="text-body-color mb-2 text-xl"><strong>Parent Deck:</strong> 45% total race bonus - Stamina inheritance and finishing power</p>
                  <p className="text-body-color mb-2 text-xl"><strong>Ace (Budget):</strong> 35% race bonus - Budget-friendly end closer setup</p>
                  <p className="text-body-color text-xl"><strong>Ace (Whale):</strong> 50% race bonus - Max stat investment</p>
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

