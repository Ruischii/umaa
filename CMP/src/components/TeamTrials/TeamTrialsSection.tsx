import Image from "next/image";

const TeamTrialsSection = () => {
  return (
    <section className="pb-12">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Banner at top */}
          <div className="w-full px-4">
            <div className="flex flex-col w-full">
              <div className="relative w-full aspect-video select-none">
                <Image
                  src="/images/teamtrials/teamtrials_header 1.webp"
                  alt="Team Trials Header"
                  fill
                  priority
                  className="object-contain pointer-events-none select-none"
                  loading="eager"
                />
              </div>
              <div className="text-right pr-4 relative z-10 -mt-8 md: mt-2">
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

