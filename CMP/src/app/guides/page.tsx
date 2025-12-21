import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllCMGuides } from "@/lib/guides";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CM Guides | umaAssist",
  description: "Champions Meeting guides for Uma Musume Pretty Derby",
};

const GuidesPage = () => {
  const guides = getAllCMGuides();

  return (
    <>
      <Breadcrumb
        pageName="Champions Meeting Guides"
        description="If you meet the requirements below, you will make it to the CM finals. See the specific guide for your race for more details."
      >
        <ul className="space-y-2 text-xl font-medium leading-relaxed text-body-color">
          <li className="flex items-start">
            <span className="mr-3 text-primary text-3xl">◎</span>
            <span>Race course length s</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary text-3xl">◎</span>
            <span>Max speed</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary text-3xl">◎</span>
            <span>Stam requirement for position and race length</span>
          </li>
        </ul>
      </Breadcrumb>

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {guides.map((guide) => (
              <div
                key={guide.id}
                className="w-full px-4 mb-10 md:mb-8 lg:mb-10 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={guide} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GuidesPage;