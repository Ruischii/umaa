import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Pagination from "@/components/Common/Pagination";
import { getAllCMGuides } from "@/lib/guides";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CM Guides | umaAssist",
  description: "Champions Meeting guides for Uma Musume Pretty Derby",
};

interface GuidesPageProps {
  searchParams: Promise<{ page?: string }>;
}

const GuidesPage = async ({ searchParams }: GuidesPageProps) => {
  const guides = getAllCMGuides();
  const params = await searchParams;
  const currentPage = params.page ? parseInt(params.page, 10) : 1;
  const itemsPerPage = 4;

  // Validate page number
  const validPage = currentPage > 0 && currentPage <= Math.ceil(guides.length / itemsPerPage) 
    ? currentPage 
    : 1;

  // Calculate pagination
  const startIndex = (validPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedGuides = guides.slice(startIndex, endIndex);

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
            {paginatedGuides.map((guide) => (
              <div
                key={guide.id}
                className="w-full px-4 mb-10 md:mb-8 lg:mb-10 md:w-2/3 lg:w-1/2"
              >
                <SingleBlog blog={guide} />
              </div>
            ))}
          </div>
          <Pagination
            totalItems={guides.length}
            itemsPerPage={itemsPerPage}
            currentPage={validPage}
            basePath="/guides"
          />
        </div>
      </section>
    </>
  );
};

export default GuidesPage;