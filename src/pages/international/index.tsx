import { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import PublicLayout from "../../layouts/public/PublicLayout";
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

const AllOtherCountriesPage = (props: ISpecialDatabasePage) => {
  const router = useRouter();

  const { tableDataSet } = props;

  useEffect(() => {
    routeToLowerCase(router);
  }, []);

  return (
    <>
      <NextSeo
        title="2023 Updated Mailing Lists and Email Lists by Industries"
        description="Purchase an industry-specific email list from UsCompanyData. Our industry-specific Email lists are very accurate and verified up to date."
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/special-databases`}
      />
      <PublicLayout>
        <h1 className="sectiontopfix text-center mb-5" style={{ fontSize: 31 }}>
          Email List of different Countries
        </h1>
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
      </PublicLayout>
    </>
  );
};

export default AllOtherCountriesPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const response = await instance.post(`/countryProduct`);

  return {
    props: {
      tableDataSet: response.data || null,
      databaseMainTypes: DATABASE_MAIN_TYPES.COUNTRY,
    },
  };
}
