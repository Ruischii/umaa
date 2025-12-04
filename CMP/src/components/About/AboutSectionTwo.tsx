import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[600px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              {/* Left image - offset up */}
              <div className="absolute left-0 top-0 -translate-y-6">
                <Image
                  src="/images/about/Agroup.svg"
                  alt="Team group"
                  width={250}
                  height={300}
                  loading="eager"
                  className="w-[180px] sm:w-[230px] md:w-[220px] lg:w-[220px] xl:w-[250px] rounded-lg object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Right image - offset down */}
              <div className="absolute right-0 bottom-0 translate-y-6">
                <Image
                  src="/images/about/ttHighScore.svg"
                  alt="High score"
                  width={250}
                  height={200}
                  loading="eager"
                  className="w-[180px] sm:w-[230px] md:w-[220px] lg:w-[220px] xl:w-[250px] rounded-lg object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Top Player Influenced Findings
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  All guide information is documented from global server's top players testing and performance, 
                  ensuring the accuracy and reliability of the information provided.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Universal CM Guides
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  From casual players, non-spenders, to whales, you will find the things you needfor building your competitive umas.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Overview
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  You do not need to beat the best players and the people who spend the most, you just need to beat the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
