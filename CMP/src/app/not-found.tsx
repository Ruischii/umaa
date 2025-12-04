import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Uma CM Guides",
  description: "The page you are looking for could not be found.",
};

const NotFoundPage = () => {
  return (
    <>
      <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <div className="mx-auto text-center mb-9 relative flex items-center justify-center gap-4 md:gap-8 overflow-visible">
                  {/* Left 4 */}
                  <div className="text-[120px] sm:text-[150px] md:text-[180px] font-bold text-primary opacity-80 leading-none">
                    4
                  </div>
                  
                  {/* Center image with speech bubble */}
                  <div className="relative flex-shrink-0 group z-10 hover:z-20">
                    <Image
                      src="/images/gold404.webp"
                      alt="404 - Page Not Found"
                      width={474}
                      height={210}
                      className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[474px] mx-auto transition-all duration-[2000ms] ease-out group-hover:scale-[3.5] group-hover:rotate-3 cursor-pointer"
                      priority
                    />
                    {/* Speech bubble */}
                    <div className="absolute -top-12 sm:-top-16 md:-top-20 -right-4 sm:-right-8 md:-right-12 bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-lg border-2 border-primary max-w-[200px] sm:max-w-[220px] z-10">
                      <p className="text-sm font-medium text-gray-800 dark:text-white leading-relaxed">
                        Sorry I ate the page . . . <span className="text-primary font-bold">burp!</span>
                      </p>
                      {/* Speech bubble tail */}
                      <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-primary"></div>
                      <div className="absolute -bottom-[9px] right-[34px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white dark:border-t-gray-800"></div>
                    </div>

                  </div>
                  
                  
                  {/* Right 4 */}
                  <div className="text-[120px] sm:text-[150px] md:text-[180px] font-bold text-primary opacity-80 leading-none">
                    4
                  </div>
                </div>
                                    {/* Artist credit */}
                    <div className="text-center -translate-y-10 translate-x-1/20">
                      <a
                        href="https://x.com/gubuos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-sm text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-colors"
                      >
                        @gubuos
                      </a>
                    </div>
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  Sorry, the page can't be found
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The page you were looking for appears to have been moved,
                  deleted or does not exist.
                </p>
                <Link
                  href="/"
                  className="px-8 py-3 text-base font-bold text-white duration-300 rounded-md bg-primary shadow-signUp hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
                >
                  Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] hidden sm:block">
          <svg
            width="406"
            height="286"
            viewBox="0 0 406 286"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <rect
                opacity="0.5"
                x="56.25"
                y="110.344"
                width="116.719"
                height="116.438"
                stroke="url(#paint0_linear_116:1140)"
              />
              <rect
                opacity="0.1"
                x="56.25"
                y="110.344"
                width="116.719"
                height="116.438"
                fill="url(#paint1_linear_116:1140)"
              />
              <path
                opacity="0.5"
                d="M172.688 110.344L229.219 51V167.601L172.688 226.781V110.344Z"
                stroke="url(#paint2_linear_116:1140)"
              />
              <path
                opacity="0.1"
                d="M172.688 110.344L229.219 51V167.601L172.688 226.781V110.344Z"
                fill="url(#paint3_linear_116:1140)"
              />
              <path
                opacity="0.5"
                d="M0 169.619L56.25 110.344V226.85L0 286.125V169.619Z"
                stroke="url(#paint4_linear_116:1140)"
              />
              <path
                opacity="0.1"
                d="M0 169.619L56.25 110.344V226.85L0 286.125V169.619Z"
                fill="url(#paint5_linear_116:1140)"
              />
              <rect
                opacity="0.5"
                x="228.938"
                y="51.2812"
                width="119.25"
                height="116.438"
                stroke="url(#paint6_linear_116:1140)"
              />
              <rect
                opacity="0.1"
                x="228.938"
                y="51.2812"
                width="119.25"
                height="116.438"
                fill="url(#paint7_linear_116:1140)"
              />
              <path
                opacity="0.5"
                d="M347.906 51.2812L405 2V110.113L347.906 167.719V51.2812Z"
                stroke="url(#paint8_linear_116:1140)"
              />
              <path
                opacity="0.1"
                d="M347.906 51.2812L405 2V110.113L347.906 167.719V51.2812Z"
                fill="url(#paint9_linear_116:1140)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_116:1140"
                x1="49.0781"
                y1="112.313"
                x2="148.922"
                y2="131.859"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_116:1140"
                x1="179.141"
                y1="209.062"
                x2="32.6026"
                y2="145.47"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_116:1140"
                x1="170.016"
                y1="125.25"
                x2="217.542"
                y2="125.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_116:1140"
                x1="233.578"
                y1="113.156"
                x2="146.509"
                y2="143.95"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_116:1140"
                x1="-3.45633"
                y1="113.316"
                x2="46.311"
                y2="116.426"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_116:1140"
                x1="69.8907"
                y1="189.234"
                x2="84.0124"
                y2="249.947"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_116:1140"
                x1="218.953"
                y1="157.453"
                x2="330.261"
                y2="148.369"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_116:1140"
                x1="348.187"
                y1="46.6406"
                x2="280.112"
                y2="168.552"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_116:1140"
                x1="329"
                y1="190"
                x2="369.525"
                y2="-29.8829"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_116:1140"
                x1="409"
                y1="10"
                x2="331.729"
                y2="34.2741"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute right-0 top-0 z-[-1] hidden sm:block">
          <svg
            width="406"
            height="286"
            viewBox="0 0 406 286"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <rect
                opacity="0.5"
                x="57.25"
                y="108.344"
                width="116.719"
                height="116.438"
                stroke="url(#paint0_linear_116:1151)"
              />
              <rect
                opacity="0.1"
                x="57.25"
                y="108.344"
                width="116.719"
                height="116.438"
                fill="url(#paint1_linear_116:1151)"
              />
              <path
                opacity="0.5"
                d="M173.688 108.344L230.219 49V165.601L173.688 224.781V108.344Z"
                stroke="url(#paint2_linear_116:1151)"
              />
              <path
                opacity="0.1"
                d="M173.688 108.344L230.219 49V165.601L173.688 224.781V108.344Z"
                fill="url(#paint3_linear_116:1151)"
              />
              <path
                opacity="0.5"
                d="M1 167.619L57.25 108.344V224.85L1 284.125V167.619Z"
                stroke="url(#paint4_linear_116:1151)"
              />
              <path
                opacity="0.1"
                d="M1 167.619L57.25 108.344V224.85L1 284.125V167.619Z"
                fill="url(#paint5_linear_116:1151)"
              />
              <rect
                opacity="0.5"
                x="229.938"
                y="49.2812"
                width="119.25"
                height="116.438"
                stroke="url(#paint6_linear_116:1151)"
              />
              <rect
                opacity="0.1"
                x="229.938"
                y="49.2812"
                width="119.25"
                height="116.438"
                fill="url(#paint7_linear_116:1151)"
              />
              <path
                opacity="0.5"
                d="M348.906 49.2812L406 0V108.113L348.906 165.719V49.2812Z"
                stroke="url(#paint8_linear_116:1151)"
              />
              <path
                opacity="0.1"
                d="M348.906 49.2812L406 0V108.113L348.906 165.719V49.2812Z"
                fill="url(#paint9_linear_116:1151)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_116:1151"
                x1="50.0781"
                y1="110.313"
                x2="149.922"
                y2="129.859"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_116:1151"
                x1="180.141"
                y1="207.062"
                x2="33.6026"
                y2="143.47"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_116:1151"
                x1="171.016"
                y1="123.25"
                x2="218.542"
                y2="123.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_116:1151"
                x1="234.578"
                y1="111.156"
                x2="147.509"
                y2="141.95"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_116:1151"
                x1="85.5"
                y1="71.5"
                x2="100.174"
                y2="270.716"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_116:1151"
                x1="70.8907"
                y1="187.234"
                x2="85.0124"
                y2="247.947"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_116:1151"
                x1="219.953"
                y1="155.453"
                x2="331.261"
                y2="146.369"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_116:1151"
                x1="349.187"
                y1="44.6406"
                x2="281.112"
                y2="166.552"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_116:1151"
                x1="394.75"
                y1="64.3284"
                x2="409.531"
                y2="110.901"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_116:1151"
                x1="410"
                y1="8.00001"
                x2="332.729"
                y2="32.2741"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;


