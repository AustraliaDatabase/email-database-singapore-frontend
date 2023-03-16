import { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { Container } from "react-bootstrap";

import PublicLayout from "../../layouts/public/PublicLayout";
import { CURRENT_OBJECT_HOME } from "../../mainViews/home/constants";
import BeneifitView from "../../mainViews/mainProduct/views/beneifit/Beneifit";
import MainWhyDetailCard from "../../mainViews/mainProduct/views/mainWhyDetailCard/MainWhyDetailCard";
import FloatingMenu from "../../menus/floatingMenu/FloatingMenu";
import instance from "../../services/baseServices";
import Table from "../../shared/components/table/Table";
import TrustPilot from "../../shared/components/trustPilot/TrustPilot";
import { HEADER_COLUMNS_USA_OTHER_COUNTRIES_DATABASE } from "../../shared/constants";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import { IMainProductInfo } from "../../shared/interface";
import Seeds from "../../shared/seeds/otherCountries";

const OTHER_COUNTRIES_ATTRIBUTES = {
  uniqueDirectContacts: "uniqueDirectContacts",
};

interface IRealtorsByStatePage {
  tableDataSet: IMainProductInfo[];
}

const OtherCountriesPage = (props: IRealtorsByStatePage) => {
  const { tableDataSet } = props;

  return (
    <>
      <NextSeo
        title="International Email List with over 95% Email Deliverability"
        description="EmailDatas allows you to create a targeted B2B email list by US state. Simply choose your selected State Email Database with all premium information and download."
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/other-countries`}
      />
      <PublicLayout>
        <section className="pt-5 pb-3">
          <Container>
            <div dangerouslySetInnerHTML={{ __html: Seeds.mainTitle }} />
            <div
              className="text-center"
              dangerouslySetInnerHTML={{
                __html: Seeds.mainDescription,
              }}
            />
          </Container>
        </section>
        <FloatingMenu menuList={Seeds.floatingMenu} />
        <section>
          <Container>
            <Table
              columns={HEADER_COLUMNS_USA_OTHER_COUNTRIES_DATABASE}
              data={tableDataSet}
              isProductPage={false}
              type={DATABASE_MAIN_TYPES.COUNTRY}
              attributesSet={OTHER_COUNTRIES_ATTRIBUTES}
            />
          </Container>
        </section>
        <section id="#why-us" className="ghost">
          <MainWhyDetailCard whyInfo={Seeds.why} />
        </section>
        {/* <section id="#review">
          <TrustPilot title={CURRENT_OBJECT_HOME.review.title} />
        </section> */}
        <section className="ghost">
          <BeneifitView beneifitInfo={Seeds?.beneifits} />
        </section>
      </PublicLayout>
    </>
  );
};

export default OtherCountriesPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let response = await instance.post(`/countryProduct`);

  response =
    response.data?.length &&
    response.data.filter((element: any) => {
      return element.id !== "real-estate-agent-email-list";
    });

  return {
    props: {
      tableDataSet: response || null,
      databaseMainTypes: DATABASE_MAIN_TYPES.COUNTRY,
    },
  };
}
