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
import { HEADER_COLUMNS_USA_CONSUMER_DATABASE } from "../../shared/constants";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import { IMainProductInfo } from "../../shared/interface";
import Seeds from "../../shared/seeds/consumer";

const CONSUMER_ATTRIBUTES = {
  uniqueDirectContacts: "uniqueDirectContacts",
};

interface IConsumerEmailsPage {
  tableDataSet: IMainProductInfo[];
}

const ConsumerEmailsPage = (props: IConsumerEmailsPage) => {
  const { tableDataSet } = props;

  return (
    <>
      <NextSeo
        title="Consumer Email List with Highest Email Deliverability"
        description="Buy Consumer Email Database with Highest Email Deliverability to market your products or services"
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/consumer-emails`}
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
              columns={HEADER_COLUMNS_USA_CONSUMER_DATABASE}
              data={tableDataSet}
              isProductPage={false}
              type={DATABASE_MAIN_TYPES.CONSUMER}
              attributesSet={CONSUMER_ATTRIBUTES}
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

export default ConsumerEmailsPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let response = await instance.post(`/consumerProduct`);

  return {
    props: {
      tableDataSet: response?.data || null,
      databaseMainTypes: DATABASE_MAIN_TYPES.CONSUMER,
    },
  };
}
