import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | What umaa has to offer",
  description: "This is About Page for umaa",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About umaa"
        description="UMAA(ssist) is a fan made webapp for the game Uma Musume Pretty Derby to help players have an easy access to helpful information to make competing and getting their carrots a little easier."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
