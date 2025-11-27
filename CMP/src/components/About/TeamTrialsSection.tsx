import Image from "next/image";

const TeamTrialsSection = () => {
  return (
    <section className="">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Banner at top */}
          <div className="w-full px-4 mt-14 md:mt-2">
            <div className="flex flex-col mx-auto max-w-4xl">
              <div className="relative aspect-video p-4 sm:p-2 sm:pb-0">
                <Image
                  src="/images/teamtrials/teamtrials_header.webp"
                  alt="Team Trials Header"
                  fill
                  priority
                  className="object-contain"
                  loading="eager"
                />
              </div>
              <div className="text-right -mt-12 pr-4 sm:pr-2 relative z-10 sm:-mt-16 md:-mt-24 lg:-mt-32">
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

export default TeamTrialsSection;

