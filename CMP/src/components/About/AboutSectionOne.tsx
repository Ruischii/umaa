import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Built for the Uma Musume Community."
                paragraph="The main goal is to provide players with organized, searchable race information and strategies that are always up to date for the next Chmaptions Meetings and current Team Trials environment.
                            Remember, this is a game and its supposed to be fun, prepare with the time you can and enjoy the game!"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Top Player Guided" />
                    <List text="Up To Date" />
                    <List text="F2P Friendly" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Global Server" />
                    <List text="In-Depth Guides" />
                    <List text="Summarized Guides" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0 pointer-events-none">
                {/* Bottom image - OperaS */}
                <div className="absolute left-1/4 top-8 z-30 sm:left-4 lg:-translate-x-20 pointer-events-auto">
                  <Image
                    src="/images/about/takiS.svg"
                    alt="Taki character"
                    width={250}
                    height={300}
                    loading="eager"
                    className="w-[180px] sm:w-[230px] md:w-[220px] lg:w-[250px] rounded-lg object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-110 -rotate-8 lg:translate-x-20"
                  />
                </div>
                {/* Top image - TakiS overlapping OperaS */}
                <div className="absolute left-1/3 top-0 z-20 sm:left-16 lg:translate-x-0 pointer-events-auto -z-10">
                  <Image
                    src="/images/about/OperaS.svg"
                    alt="Opera character"
                    width={250}
                    height={300}
                    loading="eager"
                    className="w-[180px] sm:w-[230px] md:w-[220px] lg:w-[250px] rounded-lg object-contain drop-shadow-2xl duration-300 hover:scale-110 rotate-12 translate-x-30 lg:translate-x-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
