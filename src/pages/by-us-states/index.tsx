import React from "react";
import { NextSeo } from "next-seo";
import { GetServerSidePropsContext } from "next";
import { Container } from "react-bootstrap";

import PublicLayout from "../../layouts/public/PublicLayout";
import MainWhyDetailCard from "../../mainViews/mainProduct/views/mainWhyDetailCard/MainWhyDetailCard";
import instance from "../../services/baseServices";
import Table from "../../shared/components/table/Table";
import { HEADER_COLUMNS_COMPLETE_DATABASE } from "../../shared/constants";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import Seeds from "../../shared/seeds/usCompanyby";

export const COMPANY_SET_ATTRIBUTES = {
  contactNames: "contactNames",
  uniqueDirectB2BEmails: "uniqueDirectB2BEmails",
  uniqueCompanies: "uniqueCompanies",
  uniquePhones: "uniquePhones",
  uniqueFaxNumbers: "uniqueFaxNumbers",
  uniqueCells: "uniqueCells",
  uniqueAddresses: "uniqueAddresses",
  noofIndustries: "noofIndustries",
};

const CompanyByStatePage = (props: any) => {
  const { tableDataSet } = props;

  return (
    <>
      <NextSeo
        title={Seeds.metaTitle}
        description={Seeds.metaDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/us-company-database-by-state`}
      />
      <PublicLayout>
        <section className="sectiontopfix pb-3">
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
        {/* <section className="py-0">
          <FloatingMenu menuList={Seeds.floatingMenu} />
        </section> */}
        <section>
          <Container>
            <Table
              columns={HEADER_COLUMNS_COMPLETE_DATABASE}
              data={tableDataSet}
              isProductPage={false}
              attributesSet={COMPANY_SET_ATTRIBUTES}
            />
          </Container>
        </section>
        <section id="#why-us" className="ghost">
          <MainWhyDetailCard whyInfo={Seeds.why} />
        </section>
        {/* <section id="#review">
          <TrustPilot title={CURRENT_OBJECT_HOME.review.title} />
        </section> */}
      </PublicLayout>
    </>
  );
};

export default CompanyByStatePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const response = await instance.post(`/companyProduct`);

  return {
    props: {
      tableDataSet: response.data || null,
      databaseMainTypes: DATABASE_MAIN_TYPES.COMPANY_DATABASE,
    },
  };
}
