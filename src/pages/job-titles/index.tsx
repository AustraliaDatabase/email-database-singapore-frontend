import { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { Container } from "react-bootstrap";

import PublicLayout from "../../layouts/public/PublicLayout";
import { CURRENT_OBJECT_HOME } from "../../mainViews/home/constants";
import MainWhyDetailCard from "../../mainViews/mainProduct/views/mainWhyDetailCard/MainWhyDetailCard";
import FloatingMenu from "../../menus/floatingMenu/FloatingMenu";
import instance from "../../services/baseServices";
import Table from "../../shared/components/table/Table";
import TrustPilot from "../../shared/components/trustPilot/TrustPilot";
import { HEADER_COLUMNS_REALTORS } from "../../shared/constants";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import { IMainProductInfo } from "../../shared/interface";
import Seeds from "../../shared/seeds/realtorBy";

const REALTOR_SET_ATTRIBUTES = {
  numberOfRealtors: "numberOfRealtors",
  directEmailAddresses: "directEmailAddresses",
  officeAddresses: "officeAddresses",
  officePhoneNumbers: "officePhoneNumbers",
  officeFaxNumbers: "officeFaxNumbers",
  cellPhones: "cellPhones",
  licenseTypes: "licenseTypes",
};

interface IRealtorsByStatePage {
  tableDataSet: IMainProductInfo[];
}

const RealtorsByStatePage = (props: IRealtorsByStatePage) => {
  const { tableDataSet } = props;

  return (
    <>
      <NextSeo
        title="Realtor Email List by State with over 95% Email Deliverability"
        description="Get A Usa Real Estate Database With A 95% Email Deliverability Guaranteed To Connect With All Real Estate Agents And Realtors."
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/realtors-by-state`}
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
              columns={HEADER_COLUMNS_REALTORS}
              data={tableDataSet}
              isProductPage={false}
              type={DATABASE_MAIN_TYPES.REALTOR}
              attributesSet={REALTOR_SET_ATTRIBUTES}
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

export default RealtorsByStatePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let response = await instance.post(`/jobTitleProduct`);

  response =
    response.data?.length &&
    response.data.filter((element: any) => {
      return element.id !== "real-estate-agent-email-list";
    });

  return {
    props: {
      tableDataSet: response || null,
      databaseMainTypes: DATABASE_MAIN_TYPES.REALTOR,
    },
  };
}
