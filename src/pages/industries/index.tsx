import React from "react";
import { GetServerSidePropsContext } from "next";
import { Container } from "react-bootstrap";

import PublicLayout from "../../layouts/public/PublicLayout";
import instance from "../../services/baseServices";
import Table from "../../shared/components/table/Table";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import { COLUMNS_TABLE, TABLE_ATTRIBUTES } from "../../shared/constants";

const CompanyByStatePage = (props: any) => {
  const { tableDataSet } = props;

  return (
    <>
      {/* <NextSeo
        title={Seeds.metaTitle}
        description={Seeds.metaDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/us-company-database-by-state`}
      /> */}
      <PublicLayout>
        {/* <section className="sectiontopfix pb-3">
          <Container>
            <div dangerouslySetInnerHTML={{ __html: Seeds.mainTitle }} />
            <div
              className="text-center"
              dangerouslySetInnerHTML={{
                __html: Seeds.mainDescription,
              }}
            />
          </Container>
        </section> */}

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
        {/* <section id="#why-us" className="ghost">
          <MainWhyDetailCard whyInfo={Seeds.why} />
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
