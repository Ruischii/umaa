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
            <div className="flex flex-col w-full">
              <div className="relative w-full aspect-video select-none">
                <Image
                  src="/images/footer/credit_banner.webp"
                  alt="Credits Header"
                  fill
                  priority
                  className="object-contain pointer-events-none select-none"
                  loading="eager"
                />
              </div>
              <div className="text-right pr-4 relative z-10 -mt-6 md:-mt-10 lg:-mt-16 xl:-mt-20">
                <a
                  href="https://x.com/Spindrift_illus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary relative z-10"
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
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div>
                <p className="text-body-color mb-10 text-2xl leading-relaxed font-medium sm:text-2xl sm:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed">
                  umaAssist wouldn't exist without the incredible community, talented artists, and amazing developers who share their knowledge and creativity. This page is dedicated to everyone who has contributed to making this resource possible.
                </p>

                <h3 className="mb-8 mt-12 text-4xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white scroll-mt-24">
                  Artists
                </h3>
                <div className="bg-primary/5 dark:bg-gray-dark rounded-lg p-8 mb-12">
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-body-color mb-5 mt-10 text-3xl font-bold text-black dark:text-white sm:text-3xl">
                        Spindrift
                      </h4>
                      <p className="text-body-color text-2xl font-medium mb-2 sm:text-2xl lg:text-2xl xl:text-3xl">
                        Banner artwork and header illustrations
                      </p>
                      <a
                        href="https://x.com/Spindrift_illus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-2xl font-medium sm:text-2xl lg:text-2xl xl:text-3xl"
                      >
                        @Spindrift_illus on Twitter
                      </a>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-body-color mb-5 mt-10 text-3xl font-bold text-black dark:text-white sm:text-3xl">
                        gubuos
                      </h4>
                      <p className="text-body-color text-2xl font-medium mb-2 sm:text-2xl lg:text-2xl xl:text-3xl">
                        404 page artwork and page under construction gif
                      </p>
                      <a
                        href="https://x.com/gubuos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-2xl font-medium sm:text-2xl lg:text-2xl xl:text-3xl"
                      >
                        @gubuos on Twitter
                      </a>
                    </div>
                  </div>
                </div>

                <h3 className="mb-8 mt-12 text-4xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white scroll-mt-24">
                  Game Information
                </h3>
                <div className="bg-primary/5 dark:bg-gray-dark rounded-lg p-8 mb-12">
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-body-color mb-5 mt-10 text-3xl font-bold text-black dark:text-white sm:text-3xl">
                        Uma Musume Pretty Derby
                      </h4>
                      <p className="text-body-color text-2xl font-medium mb-2 sm:text-2xl lg:text-2xl xl:text-3xl">
                        © Cygames, Inc. All rights reserved.
                      </p>
                      <p className="text-body-color text-2xl font-medium sm:text-2xl lg:text-2xl xl:text-3xl">
                        This is an unofficial fan site and is not affiliated with, endorsed by, or connected to Cygames, Inc.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-body-color mb-5 mt-10 text-3xl font-bold text-black dark:text-white sm:text-3xl">
                        Game Resources
                      </h4>
                      <p className="text-body-color text-2xl font-medium mb-4 sm:text-2xl lg:text-2xl xl:text-3xl">
                        All game screenshots, images, character art, and related materials are property of Cygames, Inc. and are used under fair use for educational and informational purposes.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="mb-8 mt-12 text-4xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white scroll-mt-24">
                  Other
                </h3>
                <div className="bg-primary/5 dark:bg-gray-dark rounded-lg p-8 mb-12">
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-body-color mb-5 mt-10 text-3xl font-bold text-black dark:text-white sm:text-3xl">
                        Community Resources
                      </h4>
                      <p className="text-body-color text-2xl font-medium mb-4 sm:text-2xl lg:text-2xl xl:text-3xl">
                        Special thanks to the Uma Musume community for sharing strategies, guides, and knowledge that helped shape this site.
                      </p>
                      <ul className="text-body-color list-inside list-disc space-y-2 mb-10">
                        <li className="text-body-color text-2xl font-medium sm:text-2xl lg:text-2xl xl:text-3xl">
                          <a href="https://umamusume.jp/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline dark:text-white">
                            Official Uma Musume Website
                          </a>
                        </li>
                        <li className="text-body-color text-2xl font-medium sm:text-2xl lg:text-2xl xl:text-3xl">
                          Uma Musume Discord Communities
                        </li>
                        <li className="text-body-color text-2xl font-medium sm:text-2xl lg:text-2xl xl:text-3xl">
                          Reddit r/UmaMusume community
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-body-color mb-5 mt-10 text-3xl font-bold text-black dark:text-white sm:text-3xl">
                        Technical Credits
                      </h4>
                      <p className="text-body-color text-2xl font-medium mb-2 sm:text-2xl lg:text-2xl xl:text-3xl">
                        Built with Next.js, React, and Tailwind CSS
                      </p>
                      <p className="text-body-color text-2xl font-medium sm:text-2xl lg:text-2xl xl:text-3xl">
                        Hosted on Vercel
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-body-color mb-5 mt-10 text-3xl font-bold text-black dark:text-white sm:text-3xl">
                        Data & Tools
                      </h4>
                      <p className="text-body-color text-2xl font-medium mb-4 sm:text-2xl lg:text-2xl xl:text-3xl">
                        Thanks to community tools and databases that provide valuable data:
                      </p>
                      <ul className="text-body-color list-inside list-disc space-y-2 mb-10">
                        <li className="text-body-color text-2xl font-medium sm:text-2xl lg:text-2xl xl:text-3xl">
                          UMADB - Uma Musume Database
                        </li>
                        <li className="text-body-color text-2xl font-medium sm:text-2xl lg:text-2xl xl:text-3xl">
                          Run Genesis - Training simulator
                        </li>
                        <li className="text-body-color text-2xl font-medium sm:text-2xl lg:text-2xl xl:text-3xl">
                          GameWith Uma Musume Wiki
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-body-color mb-5 mt-10 text-3xl font-bold text-black dark:text-white sm:text-3xl">
                        Contributors
                      </h4>
                      <p className="text-body-color text-2xl font-medium mb-4 sm:text-2xl lg:text-2xl xl:text-3xl">
                        Thank you to everyone who has contributed feedback, suggestions, and corrections to improve the guides.
                      </p>
                      <p className="text-body-color text-2xl font-medium sm:text-2xl lg:text-2xl xl:text-3xl">
                        Want to contribute? Reach out via our <a href="/contact" className="text-primary hover:underline dark:text-white">contact page</a> or on <a href="https://x.com/_t2ddy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline dark:text-white">Twitter</a>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-8">
                  <h4 className="text-body-color mb-5 text-4xl font-bold text-black dark:text-white sm:text-3xl">
                    Thank You! 💙
                  </h4>
                  <p className="text-body-color text-2xl font-medium sm:text-2xl lg:text-2xl xl:text-3xl">
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

