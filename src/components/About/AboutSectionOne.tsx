import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const doubleCircleIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text, icon }: { text: string; icon: string | "double-circle" }) => (
    <p className="text-body-color mb-5 flex items-center text-2xl font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:shadow-lg">
        {icon === "double-circle" ? (
          doubleCircleIcon
        ) : (
          <Image
            src={icon}
            alt=""
            width={30}
            height={30}
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
          />
        )}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Built for the Uma Community."
                paragraph="Umaa is here for the assist to help any player get their carrots. The info provided is to help minimize luck and create consistency in runs and races."
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Up To Date" icon="/images/statImage/speedStat.png" />
                    <List text="Top Player Guided" icon="/images/statImage/strengthStat.png" />
                    <List text="F2P Friendly" icon="/images/statImage/witStat.png" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Global Server" icon="/images/statImage/staminaStat.png" />
                    <List text="In-Depth Guides" icon="/images/statImage/gutsStat.png" />
                    <List text="Summarized Guides" icon="double-circle" />
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
