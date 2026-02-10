const SectionTitle = ({
  title,
  paragraph,
  center,
}: {
  title: string;
  paragraph: string;
  center?: boolean;
}) => {
  return (
    <div
      className={`w-full max-w-[570px] mb-[100px] ${center ? "mx-auto text-center" : ""}`}
    >
      <h2 className="mb-4 text-5xl font-bold leading-tight! text-black dark:text-white sm:text-6xl md:text-[45px]">
        {title}
      </h2>
      <p className="text-xl leading-relaxed! text-body-color md:text-2xl">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
