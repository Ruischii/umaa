import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import GuideNav from "@/components/Common/GuideNav";
import Breadcrumb from "@/components/Common/Breadcrumb";
import TeamTrialsSection from "@/components/TeamTrials/TeamTrialsSection";
import ScoringDropdown from "@/components/TeamTrials/ScoringDropdown";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team TrialsGuide | umaAssist",
  description: "Complete guide for Team Trials mode in Uma Musume Pretty Derby",
  // other metadata
};

const guideNavItems = [
  { id: "training-flow", title: "Training Flow" },
  { id: "card-priority", title: "Card Priority" },
  { id: "race-strategy", title: "Race Strategy" },
  { id: "stat-goals", title: "Stat Goals" },
  { id: "skill-buying", title: "Skill Buying" },
  { id: "energy-management", title: "Energy Management" },
  { id: "explosions", title: "Explosions" },
  { id: "parent-selection", title: "Parent Selection" },
  { id: "mindset", title: "Team Mindset" },
];

const TeamTrialsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Team Trials Guide"
        description="Consitency is key, having good runs often is better than peak runs once in a while. This guide focuses on building stable, consistent Uma builds rather than chasing peak tournament runs."
      />
      <TeamTrialsSection />
      <section className="pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white relative z-20">
                  Team Trials Guide
                </h2>
                <GuideNav items={guideNavItems} />
                <div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    These are the core rules that you should follow to have a good chance of winning Team Trials and scoring high to move up divisions. If you would like
                    to learn more about the scoring, the bottom of the page contains specific details on what affect score gains.
                  </p>

                  <h3 id="training-flow" className="font-xl mb-6 mt-12 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white scroll-mt-24">
                    1. Prioritize Training Flow Correctly
                  </h3>
                  <p className="text-body-color mb-6 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    These rules remain true across almost every scenario:
                  </p>

                  <h4 className="text-body-color mb-4 mt-8 text-lg font-bold text-black dark:text-white">
                    Early Game (Turns 1–12)
                  </h4>
                  <ul className="text-body-color mb-8 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Chase friendship (green smile icons) first.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Try to activate friendship on as many cards as possible before the mid-game.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Don't worry too much about which stat — early stats matter less than early friendship activation.
                    </li>
                  </ul>

                  <h4 className="text-body-color mb-4 mt-8 text-lg font-bold text-black dark:text-white">
                    White Bubbles (Training Boost Icons)
                  </h4>
                  <ul className="text-body-color mb-8 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      White bubbles are extremely valuable early.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      They scale your training later, so building them up sooner = better long-term stat curve.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Prioritize friendship + white bubble combinations when possible.
                    </li>
                  </ul>

                  <h4 className="text-body-color mb-4 mt-8 text-lg font-bold text-black dark:text-white">
                    Late Game
                  </h4>
                  <ul className="text-body-color mb-8 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Follow the stat-based training conditions.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Speed becomes the most efficient stat by mid–late game.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Wit becomes important to reach activation thresholds (400–500+ depending on Uma).
                    </li>
                  </ul>

                  <h3 id="card-priority" className="font-xl mb-6 mt-12 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white scroll-mt-24">
                    2. Card Priority & Deck Logic
                  </h3>
                  <p className="text-body-color mb-6 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Even if you don't have MLB cards or meta SSRs:
                  </p>

                  <h4 className="text-body-color mb-4 mt-8 text-lg font-bold text-black dark:text-white">
                    General Deck Priorities
                  </h4>
                  <ul className="text-body-color mb-8 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong className="text-primary dark:text-white">Speed</strong> (2–3 cards minimum)
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong className="text-primary dark:text-white">Wit</strong> (1–2 cards)
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong className="text-primary dark:text-white">Stamina / Power / Support</strong> flex spot depending on distance requirement
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Borrow the strongest Speed support you can (Kitasan Black is the universal go-to for a reason)
                    </li>
                  </ul>

                  <h4 className="text-body-color mb-4 mt-8 text-lg font-bold text-black dark:text-white">
                    Why This Works
                  </h4>
                  <ul className="text-body-color mb-8 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Speed cap and training efficiency determine almost every run's ceiling.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Wit gives: Skill points, Additional training stats, Race performance stability.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Stamina is the only stat that can cause you to fail races — hit the requirement early.
                    </li>
                  </ul>

                  <h3 id="race-strategy" className="font-xl mb-6 mt-12 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white scroll-mt-24">
                    3. Race Strategy Rules That Always Work
                  </h3>

                  <h4 className="text-body-color mb-4 mt-8 text-lg font-bold text-black dark:text-white">
                    Front Runner works for the debut race to avoid losing.
                  </h4>
                  <p className="text-body-color mb-6 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Even if your Uma is normally Mid/Chaser:
                  </p>
                  <ul className="text-body-color mb-8 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Running front reduces the chance of being blocked.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Losing debut and early G3 races = lost SP, lost mood, derailed run.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      You can adjust back later if the distance requires more stamina than you have, or running front guarantees a choke due to race design.
                    </li>
                  </ul>

                  <h4 className="text-body-color mb-4 mt-8 text-lg font-bold text-black dark:text-white">
                    Always Check Race UI for Weird Meta Picks
                  </h4>
                  <p className="text-body-color mb-6 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Sometimes enemy teams put an Uma in a bizarre strategy or distance. Always check once before each Unity Cup race to avoid surprise losses.
                  </p>

                  <h4 className="text-body-color mb-4 mt-8 text-lg font-bold text-black dark:text-white">
                    Getting Top 3 Matters
                  </h4>
                  <p className="text-body-color mb-6 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Getting Top 3 in optional races gives the SP you need. Even 2nd or 3rd is totally fine — SP matters way more than +1 stat.
                  </p>

                  <h3 id="stat-goals" className="font-xl mb-6 mt-12 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white scroll-mt-24">
                    4. Stat Goals by Distance (Team Trials Focused)
                  </h3>
                  <p className="text-body-color mb-6 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    General rough targets for Team Trials (These are for stable, general-purpose Uma builds):
                  </p>

                  <div className="mb-10 overflow-x-auto">
                    <table className="text-body-color w-full border-collapse border border-gray-300 dark:border-gray-700">
                      <thead>
                        <tr className="bg-primary/10">
                          <th className="border border-gray-300 px-4 py-3 text-left font-bold dark:border-gray-700">Distance</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-bold dark:border-gray-700">Speed</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-bold dark:border-gray-700">Stamina</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-bold dark:border-gray-700">Power</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-bold dark:border-gray-700">Guts</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-bold dark:border-gray-700">Wit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">Short</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">1200</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">300–400</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">800+</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">300</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">400–500</td>
                        </tr>
                        <tr className="bg-body-color/5">
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">Mile</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">1200</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">600+</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">800+</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">300</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">400–500</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">Medium</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">1200</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">800–900</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">900+</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">400</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">400–500</td>
                        </tr>
                        <tr className="bg-body-color/5">
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">Long</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">1000+</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">1000+</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">900+</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">400–600</td>
                          <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">400–500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Speed cap and Wit stability are always the biggest contributors for Team Trials.
                  </p>

                  <h3 id="skill-buying" className="font-xl mb-6 mt-12 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white scroll-mt-24">
                    5. Skill Buying Logic
                  </h3>
                  <p className="text-body-color mb-6 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Universal rules that never change:
                  </p>

                  <h4 className="text-body-color mb-4 mt-8 text-lg font-bold text-black dark:text-white">
                    Always Prioritize Gold Skills
                  </h4>
                  <ul className="text-body-color mb-8 list-inside list-disc">
                    <h3 className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      1 Gold skill is worth more than 2 Silver skills in terms of point gains, and will usually cost the same or less.
                    </h3>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Good passive skills (green) → Adaptations, corner skills, straight skills.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Stamina recovery if your stamina is borderline.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Strategy-appropriate acceleration if available.
                    </li>
                  </ul>

                  <h4 className="text-body-color mb-4 mt-8 text-lg font-bold text-black dark:text-white">
                    Save Skill Points Unless Fast Learner Already Triggered
                  </h4>
                  <ul className="text-body-color mb-8 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      If you haven't seen Fast Learner: Hold SP until end of career.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      If Fast Learner is done: You can start purchasing early if it helps stabilize races.
                    </li>
                  </ul>

                  <h3 id="energy-management" className="font-xl mb-6 mt-12 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white scroll-mt-24">
                    6. Recovery / Energy Management
                  </h3>
                  <ul className="text-body-color mb-8 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Never "extra train" unless 100% energy.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Prefer training that gives +Energy (Wit, Power when Rico/Haru are present).
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Wrecking (Resting) is fine — better than failing runs.
                    </li>
                  </ul>

                  <h3 id="explosions" className="font-xl mb-6 mt-12 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white scroll-mt-24">
                    7. Why White/Blue Explosions Matter
                  </h3>
                  <ul className="text-body-color mb-8 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong className="text-primary dark:text-white">White</strong> = Training boost scaling
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong className="text-primary dark:text-white">Blue</strong> = Massive stat efficiency spike
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      The order and timing of seeing these is what separates a good run from a scuffed run.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Blue on off-type cards (like Wit cards when your Speed deck is stacked) → Is still worth taking early since it boosts later success rates.
                    </li>
                  </ul>

                  <h3 id="parent-selection" className="font-xl mb-6 mt-12 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white scroll-mt-24">
                    8. Parent Selection Rules
                  </h3>
                  <p className="text-body-color mb-6 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Always use <a href="https://uma-global.pure-db.com/#/search" target="_blank" rel="noopener noreferrer" className="text-primary underline dark:text-white hover:text-primary/80 hover:scale-105 inline-block transition-all duration-200">UMADB</a> or <a href="https://uma.moe" target="_blank" rel="noopener noreferrer" className="text-primary underline dark:text-white hover:text-primary/80 hover:scale-105 inline-block transition-all duration-200">uma.moe</a> to:
                  </p>
                  <ul className="text-body-color mb-8 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Find double sparkle parents
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Find the right skill inheritance
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Avoid bad rolls / bad clubs / bad friend picks
                    </li>
                  </ul>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Most mistakes come from bad roots, not bad decks.
                  </p>

                  <h3 id="mindset" className="font-xl mb-6 mt-12 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white scroll-mt-24">
                    9. Team Trials Mindset
                  </h3>
                  <p className="text-body-color mb-6 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Team Trials doesn't require "meta tournament monsters." You want:
                  </p>
                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Stable stat lines
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Consistent race completion
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Good front-running
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Reliable skill packages
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      No-brainer adapt skills and corner skills
                    </li>
                  </ul>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong className="text-primary dark:text-white">Consistency &gt; High-end peak runs.</strong>
                  </p>

                  <div className="bg-primary/10 relative z-10 mb-10 overflow-hidden rounded-md p-8 md:p-9 lg:p-8 xl:p-9">
                    <div className="-mx-4 flex flex-wrap items-center">
                      <div className="w-full px-4 lg:w-2/3">
                        <h4 className="text-body-color mb-4 text-center text-xl font-bold text-black dark:text-white">
                          ⭐ Summary Cheat Sheet (Ultra-Condensed)
                        </h4>
                        <p className="text-body-color mb-4 text-center text-base font-medium">
                          To build a strong Uma for Team Trials:
                        </p>
                        <ul className="text-body-color list-inside list-disc space-y-4 text-base font-medium">
                          <li>Chase friendship early, white bubbles early.</li>
                          <li>Borrow the best speed support you can.</li>
                          <li>Run 2–3 Speed, 1–2 Wit, 1 Flex.</li>
                          <li>Run Front in most career races to avoid blocking.</li>
                          <li>Hit stamina minimums early.</li>
                          <li>Use UMADB/RunGenesis for inheritance.</li>
                          <li>Buy good passives first, stamina recovery if needed.</li>
                          <li>Don't panic if you place 2nd or 3rd in gold races.</li>
                          <li>Aim for key stats with balanced stat lines and fully stable skill sets.</li>
                        </ul>
                      </div>
                      <div className="w-full px-4 lg:w-1/3 mt-6 lg:mt-0 flex items-center justify-center">
                        <div className="relative w-full max-w-xl h-[512px]">
                          <Image
                            src="/images/teamtrials/teamtrials_score.svg"
                            alt="Team Trials Score"
                            fill
                            loading="eager"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <span className="absolute top-0 left-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute right-0 bottom-0 z-[-1]">
                      <svg
                        width="53"
                        height="30"
                        viewBox="0 0 53 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.8"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                          fill="#4A6CF7"
                        />
                        <mask
                          id="mask0_111:596"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="75"
                          height="75"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                          />
                        </mask>
                        <g mask="url(#mask0_111:596)">
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="url(#paint0_radial_111:596)"
                          />
                          <g opacity="0.8" filter="url(#filter0_f_111:596)">
                            <circle
                              cx="40.8089"
                              cy="19.853"
                              r="15.4412"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_111:596"
                            x="4.36768"
                            y="-16.5881"
                            width="72.8823"
                            height="72.8823"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.5"
                              result="effect1_foregroundBlur_111:596"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_111:596"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                          >
                            <stop stopOpacity="0.47" />
                            <stop offset="1" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <ScoringDropdown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamTrialsPage;

