import { NextSeo } from "next-seo";
import React from "react";

import PublicLayout from "../../layouts/public/PublicLayout";
import MainProductMainView from "../../mainViews/mainProduct/MainProductView";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";

const GeneralContractorsAndHomeBuildersPage = () => {
  return (
    <PublicLayout>
      <NextSeo
        title="List of General Contractors with 95% Email Deliverability"
        description="Do you want to get in contact with high-quality leads from a General Contractors? If you do, then you are at the right place! at Email Datas"
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/industry/general-contractors-and-home-builders`}
      />
      <MainProductMainView
        databaseMainType={DATABASE_MAIN_TYPES.INDUSTRY}
        // @ts-ignore - Exceptional
        currentObject={{
          breadCrumb: "General Contractors",
          url: "/general-contractors-and-home-builders",
          name: "General Contractors",
          banner: {
            title: `<h1>List of General Contractors with 95% Email Deliverability</h1>`,
            description: `<p>Find the most promising sales leads of general contractors in the United States that are accurate. You may obtain a contact database for general contractors that has been checked and is ready to use. We will offer you the contact name, phone number, email address, postal address, revenue, and number of workers that have been validated and are correct.
            </p>
            
            <p>With the ready-made list, we can even construct a specialized and targeted general contractors list for you, which will be pertinent to your needs and will be done according to your specifications. The data that we send to you comes with an accuracy guarantee of 95% for the emails, and we will also give you free credits if the percentage of undeliverable messages is more than 5%. You will receive excellent value with this purchase since it is of the highest quality.
            </p>

            <p>
            The information that we provide here at Email Datas is both accurate and trustworthy. It comes with a comprehensive contact list that you can download and use at your leisure. We have a team of professionals that are responsible for compiling, verifying, and dividing the data in accordance with the needs of the campaign and the business. People may look for various lists, which they can then investigate and save for themselves.

            </p>
            `,
            plainTitle:
              "List of General Contractors with 95% Email Deliverability",
          },
          why: {
            title: `<h2>Connect With General Contractor Worldwide With Our Contractors Mailing List</h2>`,
            description: `<p>A general contractor is the individual who is in charge of supervising all of the various building projects from the very beginning to the very end. The key responsibilities of a general contractor include the recruitment and instruction of subcontractors, as well as the application for construction licenses and permits. In addition to this, they are responsible for coordinating and managing the various activities to ensure that everything runs well.
            </p>

            <p>
            Our business is happy to give you with an email list that will cover all of the required information in its entirety and will be available to you right now. You will receive information such as your name, email address, physical address, various contact data, and so on. This information will be sent to you. With all of this information at your disposal, you will have the opportunity to expand your business by implementing a new marketing campaign. This new marketing campaign will assist you in increasing your email marketing, fax marketing, telemarketing, and even direct mail marketing.
            </p>

            <p>
            It is now possible for the individual to send the letter or postcards straight to the other person, which makes marketing much more efficient.
            </p>

            <p>
            effective. In addition to this, it helps establish greater trust between the two of you since when you speak with the individual directly, it will be easier for them to respond quickly to what you say.
            </p>
            `,
            list: [],
          },
        }}
      />
    </PublicLayout>
  );
};

export default GeneralContractorsAndHomeBuildersPage;
