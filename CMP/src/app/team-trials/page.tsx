import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import GuideNav from "@/components/Common/GuideNav";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Trials Mode Guide | UMAssist",
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
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  Team Trials Mode Guide
                </h2>
                <GuideNav items={guideNavItems} />
                <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src="/images/blog/author-02.png"
                            alt="author"
                            fill
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="text-body-color mb-1 text-base font-medium">
                          By <span>UMAssist Team</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="text-body-color mr-5 flex items-center text-base font-medium">
                        <span className="mr-3">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current"
                          >
                            <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                            <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                            <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                            <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                            <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                            <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                            <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                            <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                            <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                          </svg>
                        </span>
                        12 Jan 2024
                      </p>
                      <p className="text-body-color mr-5 flex items-center text-base font-medium">
                        <span className="mr-3">
                          <svg
                            width="18"
                            height="13"
                            viewBox="0 0 18 13"
                            className="fill-current"
                          >
                            <path d="M15.6375 0H1.6875C0.759375 0 0 0.759375 0 1.6875V10.6875C0 11.3062 0.309375 11.8406 0.84375 12.15C1.09687 12.2906 1.40625 12.375 1.6875 12.375C1.96875 12.375 2.25 12.2906 2.53125 12.15L5.00625 10.7156C5.11875 10.6594 5.23125 10.6312 5.34375 10.6312H15.6094C16.5375 10.6312 17.2969 9.87187 17.2969 8.94375V1.6875C17.325 0.759375 16.5656 0 15.6375 0ZM16.3406 8.94375C16.3406 9.3375 16.0312 9.64687 15.6375 9.64687H5.37187C5.09062 9.64687 4.78125 9.73125 4.52812 9.87187L2.05313 11.3063C1.82812 11.4187 1.575 11.4187 1.35 11.3063C1.125 11.1938 1.0125 10.9688 1.0125 10.7156V1.6875C1.0125 1.29375 1.32188 0.984375 1.71563 0.984375H15.6656C16.0594 0.984375 16.3687 1.29375 16.3687 1.6875V8.94375H16.3406Z" />
                            <path d="M12.2342 3.375H4.69668C4.41543 3.375 4.19043 3.6 4.19043 3.88125C4.19043 4.1625 4.41543 4.3875 4.69668 4.3875H12.2623C12.5435 4.3875 12.7685 4.1625 12.7685 3.88125C12.7685 3.6 12.5154 3.375 12.2342 3.375Z" />
                            <path d="M11.0529 6.55322H4.69668C4.41543 6.55322 4.19043 6.77822 4.19043 7.05947C4.19043 7.34072 4.41543 7.56572 4.69668 7.56572H11.0811C11.3623 7.56572 11.5873 7.34072 11.5873 7.05947C11.5873 6.77822 11.3342 6.55322 11.0529 6.55322Z" />
                          </svg>
                        </span>
                        50
                      </p>
                      <p className="text-body-color flex items-center text-base font-medium">
                        <span className="mr-3">
                          <svg
                            width="20"
                            height="12"
                            viewBox="0 0 20 12"
                            className="fill-current"
                          >
                            <path d="M10.2559 3.8125C9.03711 3.8125 8.06836 4.8125 8.06836 6C8.06836 7.1875 9.06836 8.1875 10.2559 8.1875C11.4434 8.1875 12.4434 7.1875 12.4434 6C12.4434 4.8125 11.4746 3.8125 10.2559 3.8125ZM10.2559 7.09375C9.66211 7.09375 9.16211 6.59375 9.16211 6C9.16211 5.40625 9.66211 4.90625 10.2559 4.90625C10.8496 4.90625 11.3496 5.40625 11.3496 6C11.3496 6.59375 10.8496 7.09375 10.2559 7.09375Z" />
                            <path d="M19.7559 5.625C17.6934 2.375 14.1309 0.4375 10.2559 0.4375C6.38086 0.4375 2.81836 2.375 0.755859 5.625C0.630859 5.84375 0.630859 6.125 0.755859 6.34375C2.81836 9.59375 6.38086 11.5312 10.2559 11.5312C14.1309 11.5312 17.6934 9.59375 19.7559 6.34375C19.9121 6.125 19.9121 5.84375 19.7559 5.625ZM10.2559 10.4375C6.84961 10.4375 3.69336 8.78125 1.81836 5.96875C3.69336 3.1875 6.84961 1.53125 10.2559 1.53125C13.6621 1.53125 16.8184 3.1875 18.6934 5.96875C16.8184 8.78125 13.6621 10.4375 10.2559 10.4375Z" />
                          </svg>
                        </span>
                        35
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="bg-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                    >
                      Guide
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Master Team Trials mode with these proven strategies and rules that work across almost every scenario. This guide focuses on building stable, consistent Uma builds rather than chasing peak tournament runs.
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
                    Run Front (逃げ/Nige) for Career Mode
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
                    Always Prioritize
                  </h4>
                  <ul className="text-body-color mb-8 list-inside list-disc">
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
                    Always use <span className="text-primary underline dark:text-white">UMADB</span> or <span className="text-primary underline dark:text-white">Run Genesis</span> to:
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
                    <h4 className="text-body-color mb-4 text-center text-xl font-bold text-black dark:text-white">
                      ⭐ Summary Cheat Sheet (Ultra-Condensed)
                    </h4>
                    <p className="text-body-color mb-4 text-center text-base font-medium">
                      To build a strong Uma for Team Trials:
                    </p>
                    <ul className="text-body-color list-inside list-disc space-y-2 text-base font-medium">
                      <li>Chase friendship early, white bubbles early.</li>
                      <li>Borrow the best speed support you can.</li>
                      <li>Run 2–3 Speed, 1–2 Wit, 1 Flex.</li>
                      <li>Run Front in most career races to avoid blocking.</li>
                      <li>Hit stamina minimums early.</li>
                      <li>Use UMADB/RunGenesis for inheritance.</li>
                      <li>Buy good passives first, stamina recovery if needed.</li>
                      <li>Don't panic if you place 2nd or 3rd in gold races.</li>
                      <li>Aim for balanced stat lines and fully stable skill sets.</li>
                    </ul>
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

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="text-body-color mb-3 text-sm font-medium">
                        Popular Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="Team Trials" />
                        <TagButton text="Guide" />
                        <TagButton text="Strategy" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                        Share this post :
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>
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

