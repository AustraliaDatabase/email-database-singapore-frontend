import React from "react";
import { GetServerSidePropsContext } from "next";
import { Container } from "react-bootstrap";

import PublicLayout from "../../layouts/public/PublicLayout";
import instance from "../../services/baseServices";
import Table from "../../shared/components/table/Table";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import { COLUMNS_TABLE, TABLE_ATTRIBUTES } from "../../shared/constants";
import { NextSeo } from "next-seo";
import { JOB_INDUSTRIES_CONTENT } from "../../mainViews/alternativeForOthers/seeds";

const CompanyByStatePage = (props: any) => {
  const { tableDataSet } = props;

  return (
    <>
      <NextSeo
        title="Buy Email List by Industry for Targeted Outreach"
        description="Gain a competitive edge with industry-specific Email Lists. Connect with key decision-makers, and unlock growth opportunities within niche"
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/industries`}
      />
      <PublicLayout>
        <section className="sectiontopfix pb-3">
          <Container>
            <h1 style={{ fontSize: 31 }} className="text-center">
              Buy Email List by Industry and Elevate your Marketing Strategy
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
            />
          </Container>
        </section>
        <section>
          <Container>
            <div dangerouslySetInnerHTML={{ __html: JOB_INDUSTRIES_CONTENT }} />
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default CompanyByStatePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const response = await instance.post(`/industryProduct`);

  return {
    props: {
      tableDataSet: response.data || null,
      databaseMainTypes: DATABASE_MAIN_TYPES.COMPANY_DATABASE,
    },
  };
}
