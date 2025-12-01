import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credits | umaAssist",
  description: "Special thanks to all contributors, artists, and resources that made umaAssist possible",
};

const CreditsSection = () => {
  return (
    <section className="pb-12">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Banner at top */}
          <div className="w-full px-4">
            <div className="flex flex-col mx-auto max-w-4xl">
              <div className="relative aspect-video p-4 sm:p-2 sm:pb-0 select-none">
                <Image
                  src="/images/teamtrials/teamtrials_header 1.webp"
                  alt="Credits Header"
                  fill
                  priority
                  className="object-contain pointer-events-none select-none"
                  loading="eager"
                />
              </div>
              <div className="text-right pr-4 sm:pr-2 relative z-10 -mt-8 md:-mt-12">
                <a
                  href="https://x.com/Spindrift_illus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary relative z-10"
                >
                  @Spindrift_illus
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="">

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CreditsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Credits & Special Thanks"
        description="Thank you to everyone who made this possible"
      />
      <CreditsSection />
      <section className="pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <p className="text-body-color mb-12 text-base leading-relaxed font-medium sm:text-lg dark:text-body-color-dark">
                  umaAssist wouldn't exist without the incredible community, talented artists, and amazing developers who share their knowledge and creativity. This page is dedicated to everyone who has contributed to making this resource possible.
                </p>

                <h2 className="mb-8 text-3xl leading-tight font-bold text-black dark:text-white">
                  Artists
                </h2>
                <div className="bg-primary/5 dark:bg-gray-dark rounded-lg p-8 mb-12">
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                        Spindrift
                      </h3>
                      <p className="text-body-color text-base font-medium mb-2 dark:text-body-color-dark">
                        Banner artwork and header illustrations
                      </p>
                      <a
                        href="https://x.com/Spindrift_illus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        @Spindrift_illus on Twitter
                      </a>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                        gubuos
                      </h3>
                      <p className="text-body-color text-base font-medium mb-2 dark:text-body-color-dark">
                        Page under construction gif
                      </p>
                      <a
                        href="https://x.com/gubuos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        @gubuos on Twitter
                      </a>
                    </div>
                  </div>
                </div>

                <h2 className="mb-8 text-3xl leading-tight font-bold text-black dark:text-white">
                  Game Information
                </h2>
                <div className="bg-primary/5 dark:bg-gray-dark rounded-lg p-8 mb-12">
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                        Uma Musume Pretty Derby
                      </h3>
                      <p className="text-body-color text-base font-medium mb-2 dark:text-body-color-dark">
                        © Cygames, Inc. All rights reserved.
                      </p>
                      <p className="text-body-color text-sm font-medium dark:text-body-color-dark">
                        This is an unofficial fan site and is not affiliated with, endorsed by, or connected to Cygames, Inc.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                        Game Resources
                      </h3>
                      <p className="text-body-color text-base font-medium mb-4 dark:text-body-color-dark">
                        All game screenshots, images, character art, and related materials are property of Cygames, Inc. and are used under fair use for educational and informational purposes.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="mb-8 text-3xl leading-tight font-bold text-black dark:text-white">
                  Other
                </h2>
                <div className="bg-primary/5 dark:bg-gray-dark rounded-lg p-8 mb-12">
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                        Community Resources
                      </h3>
                      <p className="text-body-color text-base font-medium mb-4 dark:text-body-color-dark">
                        Special thanks to the Uma Musume community for sharing strategies, guides, and knowledge that helped shape this site.
                      </p>
                      <ul className="text-body-color list-inside list-disc space-y-2">
                        <li className="text-body-color text-base font-medium dark:text-body-color-dark">
                          <a href="https://umamusume.jp/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Official Uma Musume Website
                          </a>
                        </li>
                        <li className="text-body-color text-base font-medium dark:text-body-color-dark">
                          Uma Musume Discord Communities
                        </li>
                        <li className="text-body-color text-base font-medium dark:text-body-color-dark">
                          Reddit r/UmaMusume community
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                        Technical Credits
                      </h3>
                      <p className="text-body-color text-base font-medium mb-2 dark:text-body-color-dark">
                        Built with Next.js, React, and Tailwind CSS
                      </p>
                      <p className="text-body-color text-sm font-medium dark:text-body-color-dark">
                        Hosted on Vercel
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                        Data & Tools
                      </h3>
                      <p className="text-body-color text-base font-medium mb-4 dark:text-body-color-dark">
                        Thanks to community tools and databases that provide valuable data:
                      </p>
                      <ul className="text-body-color list-inside list-disc space-y-2">
                        <li className="text-body-color text-base font-medium dark:text-body-color-dark">
                          UMADB - Uma Musume Database
                        </li>
                        <li className="text-body-color text-base font-medium dark:text-body-color-dark">
                          Run Genesis - Training simulator
                        </li>
                        <li className="text-body-color text-base font-medium dark:text-body-color-dark">
                          GameWith Uma Musume Wiki
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                        Contributors
                      </h3>
                      <p className="text-body-color text-base font-medium mb-4 dark:text-body-color-dark">
                        Thank you to everyone who has contributed feedback, suggestions, and corrections to improve the guides.
                      </p>
                      <p className="text-body-color text-sm font-medium dark:text-body-color-dark">
                        Want to contribute? Reach out via our <a href="/contact" className="text-primary hover:underline">contact page</a> or on <a href="https://x.com/_t2ddy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Twitter</a>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                    Thank You! 💙
                  </h3>
                  <p className="text-body-color text-lg font-medium dark:text-body-color-dark">
                    To everyone who uses, shares, and supports umaAssist - thank you for being part of this journey. Your passion for Uma Musume keeps this project going!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreditsPage;

