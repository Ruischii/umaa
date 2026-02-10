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
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                  Consise
                </h3>
                <p className="text-xl font-medium leading-relaxed text-body-color sm:text-2xl sm:leading-relaxed">
                  The guides are a hub of usefull info consise for quick and easy refrences.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                  Universal
                </h3>
                <p className="text-xl font-medium leading-relaxed text-body-color sm:text-2xl sm:leading-relaxed">
                  From casual players, non-spenders, to whales, the info is relevant far all trainers.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                  Overview
                </h3>
                <p className="text-xl font-medium leading-relaxed text-body-color sm:text-2xl sm:leading-relaxed">
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
