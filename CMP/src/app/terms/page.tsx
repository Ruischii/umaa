import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | umaAssist",
  description: "Terms of Use for umaAssist - Una Musume Pretty Derby guides and resources",
};

const TermsSection = () => {
  return (
    <section className="pb-12">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Banner at top */}
          <div className="w-full px-4">
            <div className="flex flex-col mx-auto max-w-4xl">
              <div className="relative aspect-video p-4 sm:p-2 sm:pb-0 select-none">
                <Image
                  src="/images/footer/tou1.webp"
                  alt="Terms Header"
                  fill
                  priority
                  className="object-contain pointer-events-none select-none"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="">

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TermsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Use"
        description="Legal information and terms of use for umaa"
      />
      <TermsSection />
      <section className="pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-body-color text-lg mb-8 dark:text-body-color-dark">
                  <strong>Last Updated: November 30, 2025</strong>
                </p>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  1. Acceptance of Terms
                </h2>
                <p className="text-body-color mb-8 text-xl leading-relaxed font-medium">
                  By accessing and using umaAssist ("the Site"), you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these Terms of Use, please do not use the Site.
                </p>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  2. Description of Service
                </h2>
                <p className="text-body-color mb-4 text-xl leading-relaxed font-medium">
                  umaAssist is a fan-made resource website providing guides, strategies, and information for the game Uma Musume Pretty Derby. The Site offers:
                </p>
                <ul className="text-body-color mb-8 list-inside list-disc">
                  <li className="text-body-color mb-2 text-xl font-medium">Champions Meeting guides</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Team Trials strategies</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Character and deck-building information</li>
                  <li className="text-body-color mb-2 text-xl font-medium">General gameplay tips and resources</li>
                </ul>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  3. Intellectual Property and Copyright
                </h2>

                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
                  3.1 Game Content
                </h3>
                <p className="text-body-color mb-8 text-xl leading-relaxed font-medium">
                  Uma Musume Pretty Derby and all related intellectual property, including but not limited to characters, images, music, and game mechanics, are owned by Cygames, Inc. and/or their respective copyright holders. umaAssist is an unofficial, fan-made resource and is not affiliated with, endorsed by, or connected to Cygames, Inc.
                </p>

                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
                  3.2 Site Content
                </h3>
                <p className="text-body-color mb-4 text-xl leading-relaxed font-medium">
                  All original content created by umaAssist, including guides, analyses, and written materials, is protected by copyright. You may:
                </p>
                <ul className="text-body-color mb-4 list-inside list-disc">
                  <li className="text-body-color mb-2 text-xl font-medium">View and read content for personal, non-commercial use</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Share links to the Site</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Reference our guides with proper attribution</li>
                </ul>
                <p className="text-body-color mb-4 text-xl leading-relaxed font-medium">
                  You may NOT:
                </p>
                <ul className="text-body-color mb-8 list-inside list-disc">
                  <li className="text-body-color mb-2 text-xl font-medium">Reproduce, distribute, or republish our original content without permission</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Use our content for commercial purposes</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Claim our work as your own</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Remove or alter any copyright notices</li>
                </ul>

                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
                  3.3 Fair Use
                </h3>
                <p className="text-body-color mb-8 text-xl leading-relaxed font-medium">
                  The Site uses game screenshots, images, and information under the principles of fair use for educational and informational purposes. All such content belongs to their respective copyright holders.
                </p>

                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
                  3.4 User Attribution
                </h3>
                <p className="text-body-color mb-8 text-xl leading-relaxed font-medium">
                  Content and images created by community members are credited with appropriate attribution. If you believe your work has been used without proper credit, please contact us.
                </p>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  4. Acceptable Use Policy
                </h2>
                <p className="text-body-color mb-4 text-xl leading-relaxed font-medium">
                  You agree to use the Site only for lawful purposes. You must NOT:
                </p>
                <ul className="text-body-color mb-8 list-inside list-disc">
                  <li className="text-body-color mb-2 text-xl font-medium">Use automated systems (bots, scrapers, crawlers) to access the Site without permission</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Attempt to gain unauthorized access to any part of the Site</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Transmit viruses, malware, or any malicious code</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Interfere with or disrupt the Site's operation</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Harvest or collect information about users</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Use the Site for any illegal activity</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Impersonate any person or entity</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Post or transmit spam, advertisements, or promotional materials</li>
                </ul>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  5. Disclaimer of Warranties
                </h2>

                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
                  5.1 Content Accuracy
                </h3>
                <p className="text-body-color mb-4 text-xl leading-relaxed font-medium">
                  The Site provides guides and information on a "as is" and "as available" basis. We strive for accuracy, but:
                </p>
                <ul className="text-body-color mb-8 list-inside list-disc">
                  <li className="text-body-color mb-2 text-xl font-medium">Guides may become outdated due to game updates</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Information may contain errors or inaccuracies</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Strategies may not work for all players or situations</li>
                  <li className="text-body-color mb-2 text-xl font-medium">We make no guarantees about in-game results</li>
                </ul>

                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
                  5.2 Game Changes
                </h3>
                <p className="text-body-color mb-4 text-xl leading-relaxed font-medium">
                  Uma Musume Pretty Derby is subject to updates, patches, and changes by Cygames. We are not responsible for:
                </p>
                <ul className="text-body-color mb-8 list-inside list-disc">
                  <li className="text-body-color mb-2 text-xl font-medium">Guide information becoming outdated</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Game mechanics changing after guide publication</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Meta shifts affecting strategy effectiveness</li>
                </ul>

                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
                  5.3 No Warranty
                </h3>
                <p className="text-body-color mb-8 text-xl leading-relaxed font-medium uppercase">
                  The Site is provided "as is" without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  6. Limitation of Liability
                </h2>
                <p className="text-body-color mb-4 text-xl leading-relaxed font-medium">
                  To the fullest extent permitted by law:
                </p>
                <ul className="text-body-color mb-8 list-inside list-disc">
                  <li className="text-body-color mb-2 text-xl font-medium">umaAssist and its contributors shall not be liable for any damages arising from your use of the Site</li>
                  <li className="text-body-color mb-2 text-xl font-medium">We are not responsible for any in-game losses, account issues, or negative outcomes resulting from following our guides</li>
                  <li className="text-body-color mb-2 text-xl font-medium">We are not liable for any technical issues, downtime, or data loss</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Our total liability shall not exceed the amount you paid to access the Site (which is zero for free access)</li>
                </ul>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  7. External Links
                </h2>
                <p className="text-body-color mb-4 text-xl leading-relaxed font-medium">
                  The Site may contain links to third-party websites or services. We are not responsible for:
                </p>
                <ul className="text-body-color mb-8 list-inside list-disc">
                  <li className="text-body-color mb-2 text-xl font-medium">The content or practices of external sites</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Any damages or losses caused by third-party services</li>
                  <li className="text-body-color mb-2 text-xl font-medium">The availability or accuracy of external resources</li>
                </ul>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  8. User-Generated Content
                </h2>
                <p className="text-body-color mb-4 text-xl leading-relaxed font-medium">
                  If the Site allows user submissions (comments, feedback, etc.):
                </p>
                <ul className="text-body-color mb-8 list-inside list-disc">
                  <li className="text-body-color mb-2 text-xl font-medium">You retain ownership of your content</li>
                  <li className="text-body-color mb-2 text-xl font-medium">You grant umaAssist a non-exclusive, worldwide license to use, display, and distribute your submissions</li>
                  <li className="text-body-color mb-2 text-xl font-medium">You represent that you have the right to submit the content</li>
                  <li className="text-body-color mb-2 text-xl font-medium">We reserve the right to remove any content at our discretion</li>
                </ul>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  9. Privacy
                </h2>
                <p className="text-body-color mb-8 text-xl leading-relaxed font-medium">
                  Your use of the Site is also governed by our Privacy Policy. By using the Site, you consent to our collection and use of information as described in the Privacy Policy.
                </p>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  10. Changes to Terms
                </h2>
                <p className="text-body-color mb-8 text-xl leading-relaxed font-medium">
                  We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after changes constitutes acceptance of the modified terms.
                </p>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  11. Termination
                </h2>
                <p className="text-body-color mb-4 text-xl leading-relaxed font-medium">
                  We reserve the right to:
                </p>
                <ul className="text-body-color mb-8 list-inside list-disc">
                  <li className="text-body-color mb-2 text-xl font-medium">Terminate or suspend access to the Site at any time, for any reason</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Remove or modify content at our discretion</li>
                  <li className="text-body-color mb-2 text-xl font-medium">Change or discontinue any aspect of the Site</li>
                </ul>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  12. Governing Law
                </h2>
                <p className="text-body-color mb-8 text-xl leading-relaxed font-medium">
                  These Terms of Use shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in Nevada, United States.
                </p>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  13. Severability
                </h2>
                <p className="text-body-color mb-8 text-xl leading-relaxed font-medium">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  14. Entire Agreement
                </h2>
                <p className="text-body-color mb-8 text-xl leading-relaxed font-medium">
                  These Terms of Use, together with the Privacy Policy, constitute the entire agreement between you and umaAssist regarding the use of the Site.
                </p>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  15. Contact Information
                </h2>
                <p className="text-body-color mb-4 text-xl leading-relaxed font-medium">
                  For questions about these Terms of Use, please contact us:
                </p>
                <ul className="text-body-color mb-8 list-inside list-disc">
                  <li className="text-body-color mb-2 text-xl font-medium">
                    Twitter: <a href="https://x.com/_t2ddy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@_t2ddy</a>
                  </li>
                  <li className="text-body-color mb-2 text-xl font-medium">
                    GitHub: <a href="https://github.com/t-2ddy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">t-2ddy</a>
                  </li>
                  <li className="text-body-color mb-2 text-xl font-medium">
                    Through the Site's contact form at: <a href="/contact" className="text-primary hover:underline">umaAssist Contact</a>
                  </li>
                </ul>

                <h2 className="mb-6 text-4xl leading-tight font-bold text-black dark:text-white">
                  16. Acknowledgment
                </h2>
                <p className="text-body-color mb-8 text-xl leading-relaxed font-medium uppercase">
                  By using the Site, you acknowledge that you have read these Terms of Use, understand them, and agree to be bound by them.
                </p>

                <hr className="my-10 border-t border-gray-300 dark:border-gray-700" />

                <p className="text-body-color text-center text-lg">
                  <strong>Copyright Notice</strong>: Uma Musume Pretty Derby © Cygames, Inc. All rights reserved. This is an unofficial fan site and is not affiliated with or endorsed by Cygames, Inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;

