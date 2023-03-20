import React from "react";
import { NextSeo } from "next-seo";
import { GetServerSidePropsContext } from "next";
import { Container } from "react-bootstrap";

import PublicLayout from "../../layouts/public/PublicLayout";
import { CURRENT_OBJECT_HOME } from "../../mainViews/home/constants";
import MainWhyDetailCard from "../../mainViews/mainProduct/views/mainWhyDetailCard/MainWhyDetailCard";
import FloatingMenu from "../../menus/floatingMenu/FloatingMenu";
import instance from "../../services/baseServices";
import Table from "../../shared/components/table/Table";
import TrustPilot from "../../shared/components/trustPilot/TrustPilot";
import { HEADER_COLUMNS_COMPLETE_DATABASE } from "../../shared/constants";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import Seeds from "../../shared/seeds/usCompanybyOld";

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
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/list-of-all-email-lists`}
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
        {/* <FloatingMenu menuList={Seeds.floatingMenu} /> */}
        <section>
          <Container>
            <Table
              columns={HEADER_COLUMNS_COMPLETE_DATABASE}
              data={tableDataSet}
              isProductPage={false}
              attributesSet={COMPANY_SET_ATTRIBUTES}
              middleFix="email"
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
  const response = await instance.post(`/companyProductOld`);

  const fileredList = response?.data?.filter((element: any) => {
    return element.url !== "list-of-all-email-lists";
  });

  return {
    props: {
      tableDataSet: fileredList || null,
      databaseMainTypes: DATABASE_MAIN_TYPES.COMPANY_DATABASE_OLD,
    },
  };
}
