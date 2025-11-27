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
        description="Complete guides for Champions Meeting events. Learn the best strategies and tips to compete effectively."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {guides.map((guide) => (
              <div
                key={guide.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
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
