import Image from "next/image";

const UnderConstruction = () => {
  return (
    <section className="py-8 md:py-4 lg:py-2">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative w-full max-w-md aspect-square mb-8">
            <Image
              src="/images/under_construction.gif"
              alt="Under Construction"
              fill
              className="object-contain select-none pointer-events-none"
              priority
            />
            <a
              href="https://x.com/gubuos "
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 text-xl md:text-2xl text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary pointer-events-auto">
              @gubuos
            </a>
          </div>
          <h2 className="mb-4 text-5xl font-bold text-black dark:text-white sm:text-6xl">
            Under Construction . . .
          </h2>
          <p className="max-w-2xl text-xl text-body-color dark:text-body-color-dark sm:text-2xl pb-14">
            Check my{" "}
            <a
              href="https://x.com/_t2ddy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline dark:text-primary"
            >
              twitter
            </a>{" "}
            for updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnderConstruction;

