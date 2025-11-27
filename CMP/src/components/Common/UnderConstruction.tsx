import Image from "next/image";

const UnderConstruction = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
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
              className="absolute bottom-2 right-2 text-xs md:text-sm text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary pointer-events-auto">
              @gubuos
            </a>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Under Construction . . .
          </h2>
          <p className="max-w-2xl text-base text-body-color dark:text-body-color-dark sm:text-lg">
            Check my{" "}
            <a
              href="https://x.com/t_2ddy"
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

