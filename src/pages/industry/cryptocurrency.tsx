import { NextSeo } from "next-seo";
import React from "react";
import PublicLayout from "../../layouts/public/PublicLayout";
import MainProductMainView from "../../mainViews/mainProduct/MainProductView";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";

const CryptoCurrencyPage = () => {
  return (
    <PublicLayout>
      <NextSeo
        title="Cryptocurrency Mailing List with 95% Email Deliverability"
        description="Our District of Cryptocurrency database makes it easier for the person to enhance their marketing at an affordable price."
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/industry/cryptocurrency`}
      />
      <MainProductMainView
        databaseMainType={DATABASE_MAIN_TYPES.INDUSTRY}
        // @ts-ignore - Exceptional
        currentObject={{
          breadCrumb: "Cryptocurrency Mailing List",
          url: "/general-contractors-and-home-builders",
          name: "Cryptocurrency Mailing List",
          banner: {
            title: `<h1>Cryptocurrency Mailing List with 95% Email Deliverability</h1>`,
            description: `<p>Investigate your options with the personal contact information that we provide for cryptocurrency. You will be able to get a sizable contact list that has been checked by real people, will have all of the relevant data, and will function as a component of your marketing outreach. You can now locate the contact information for the financial professionals thanks to the ready-made data package that we provide.</p>
            
            <p>You get quick access to the database containing the key contacts' information, which includes their names, emails, titles, and other essential contact details. We will make every effort to supply you with information that has been independently verified on the employees of the company. We will obtain information that has been checked out on the cryptocurrency business and investors, and then we will utilize the list for your own advantage.
            </p>

            <p>
            We will offer you with the most recent contact information, and you will have the opportunity to buy it and download it immediately after making the transaction. Before we sell the list, our specialists verify its authenticity and ensure that it contains only up-to-date information on the banking and financial industry's most qualified individuals. In order for the person to be able to acquire the list and communicate with their prospective clients.
            </p>
            `,
            plainTitle:
              "Cryptocurrency Mailing List with 95% Email Deliverability",
          },
          why: {
            title: `<h2>Connect with Cryptocurrency Email Leads</h2>`,
            description: `<p>Our organization will supply you with an email list that has a huge database that is simple to navigate and contains the individuals' names as well as their email addresses, telephone numbers, physical addresses, and other important contact information. It is a pre-built crypto directory that is ready to be downloaded and will include more and more material as time goes on.
            </p>

            <p>
            It even provides start-ups and small enterprises with the resources and opportunities they need to develop relationships with potential investors. You may develop your own list with targeted sales leads using the mailing list for finance, which is available for download. The list that we are making available to you is reasonably priced and has improved deliverability. You will receive an explicit list from these resources, and it will contain all of the relevant information.
            </p>

            <p>
            In addition to this, the list will be kept up to date and will provide you with a high rate of deliverability. This implies that when you send the email to the appropriate individual, it will result in the expansion of your company's market and more sales will be generated. In addition, you will have access to useful information that you may not be able to obtain from any other site.
            </p>

            <p>
            In the recent past, cryptocurrency has seen a meteoric rise in popularity, and as a result, an increasing number of individuals are making connections with one another. Our bitcoin investor leads will make it simple for you to have access to a database containing the most important connections. These contacts come with a comprehensive set of details and are correct and consistent. In addition to this, it is a website that can be downloaded immediately, is of great use, and will have all of the information that is necessary for the list.
            </p>

            <p>
            You may construct your list of focused sales leads, which is fairly vital for the individual to have so that they can enjoy a variety of benefits. You can also build your list of potential customers.
            </p>

            <p>
            You will be able to have a direct conversation with the individual and receive prompt replies from them if you use this. It even helps to develop trust among the clients, which is crucial for the growth of your organization.
            </p>
            `,
            list: [],
          },
        }}
      />
    </PublicLayout>
  );
};

export default CryptoCurrencyPage;
