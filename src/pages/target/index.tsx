import { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import PublicLayout from "../../layouts/public/PublicLayout";
import { TARGET_BY_CONTENT } from "../../mainViews/alternativeForOthers/seeds";
import instance from "../../services/baseServices";
import Table from "../../shared/components/table/Table";
import { COLUMNS_TABLE, TABLE_ATTRIBUTES } from "../../shared/constants";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import { IMainProductInfo } from "../../shared/interface";
import { routeToLowerCase } from "../../shared/InternalService";

interface ISpecialDatabasePage {
  tableDataSet: IMainProductInfo[];
}

const INDUSTRY_SET_ATTRIBUTES = {
  uniqueDirectContacts: "uniqueDirectContacts",
};

const SpecialDatabasePage = (props: ISpecialDatabasePage) => {
  const router = useRouter();

  const { tableDataSet } = props;

  useEffect(() => {
    routeToLowerCase(router);
  }, []);

  return (
    <>
      <NextSeo
        title="Unlock Growth Opportunities with Targeted Email Lists"
        description="Drive higher engagement rates with Targeted Email Lists. Maximize your marketing efforts by delivering personalized content to specific segments"
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/target`}
      />
      <PublicLayout>
        <section className="sectiontopfix pb-3">
          <Container>
            <h1 style={{ fontSize: 31 }} className="text-center">
              Maximize Conversion Rates with Targeted Email Lists
            </h1>
          </Container>
        </section>
        <section style={{ marginTop: -30 }}>
          <Container>
            <Table
              columns={COLUMNS_TABLE}
              data={tableDataSet}
              attributesSet={TABLE_ATTRIBUTES}
              isProductPage={false}
              type={DATABASE_MAIN_TYPES.INDUSTRY}
            />
          </Container>
        </section>
        <section>
          <Container>
            <div dangerouslySetInnerHTML={{ __html: TARGET_BY_CONTENT }} />
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default SpecialDatabasePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let response = null;
  try {
    response = await instance.post(`/targetProduct`);
  } catch (error) {}

  return {
    props: {
      tableDataSet: (response && response.data) || null,
      databaseMainTypes: DATABASE_MAIN_TYPES.TARGET,
    },
  };
}
