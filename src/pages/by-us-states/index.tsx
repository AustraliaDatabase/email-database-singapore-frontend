import React from "react";
import { GetServerSidePropsContext } from "next";
import { Container } from "react-bootstrap";

import PublicLayout from "../../layouts/public/PublicLayout";
import instance from "../../services/baseServices";
import Table from "../../shared/components/table/Table";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import { COLUMNS_TABLE, TABLE_ATTRIBUTES } from "../../shared/constants";
import { NextSeo } from "next-seo";
import { BY_US_STATES_CONTENT } from "../../mainViews/alternativeForOthers/seeds";

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
        title="Reach a Wide Audience with our US Email List"
        description="Expand your marketing reach with our US Email List. Connect with a diverse audience across the United States and unlock new business opportunities"
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/by-us-states`}
      />
      <PublicLayout>
        <section className="sectiontopfix pb-3">
          <Container>
            <h1 style={{ fontSize: 31 }} className="text-center">
              Expand Your Reach with US Email List
            </h1>
          </Container>
        </section>

        <section>
          <Container>
            <Table
              columns={COLUMNS_TABLE}
              data={tableDataSet}
              isProductPage={false}
              attributesSet={TABLE_ATTRIBUTES}
              type={DATABASE_MAIN_TYPES.COMPANY_DATABASE}
            />
          </Container>
        </section>
        <section>
          <Container>
            <div dangerouslySetInnerHTML={{ __html: BY_US_STATES_CONTENT }} />
          </Container>
        </section>
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
