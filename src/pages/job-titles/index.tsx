import { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { Container } from "react-bootstrap";

import PublicLayout from "../../layouts/public/PublicLayout";
import instance from "../../services/baseServices";
import Table from "../../shared/components/table/Table";
import { COLUMNS_TABLE, TABLE_ATTRIBUTES } from "../../shared/constants";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import { IMainProductInfo } from "../../shared/interface";
// import Seeds from "../../shared/seeds/realtorBy";


interface IRealtorsByStatePage {
  tableDataSet: IMainProductInfo[];
}

const RealtorsByStatePage = (props: IRealtorsByStatePage) => {
  const { tableDataSet } = props;

  return (
    <>
      <NextSeo
        title="Reach a Wide Audience with Our Job Seekers Email Address List"
        description="Discover top talent effortlessly with Job Seekers Email Address List. Connect with qualified candidates and reach a wide audience for effective recruitment"
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/job-titles`}
      />
      <PublicLayout>
        <section className="sectiontopfix pb-3">
          <Container>
            {/* <div dangerouslySetInnerHTML={{ __html: Seeds.mainTitle }} />
            <div
              className="text-center"
              dangerouslySetInnerHTML={{
                __html: Seeds.mainDescription,
              }}
            /> */}
          </Container>
        </section>
        {/* <section className="py-0">
          <FloatingMenu menuList={Seeds.floatingMenu} />
        </section> */}
        <section>
          <Container>
            <Table
              columns={COLUMNS_TABLE}
              data={tableDataSet}
              isProductPage={false}
              type={DATABASE_MAIN_TYPES.JOB_TITLE}
              attributesSet={TABLE_ATTRIBUTES}
            />
          </Container>
        </section>
        {/* <section id="#why-us" className="ghost">
          <MainWhyDetailCard whyInfo={Seeds.why} />
        </section> */}
        {/* <section id="#review">
          <TrustPilot title={CURRENT_OBJECT_HOME.review.title} />
        </section> */}
      </PublicLayout>
    </>
  );
};

export default RealtorsByStatePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const response = await instance.post(`/jobTitleProduct`);

  return {
    props: {
      tableDataSet: response?.data || null,
      databaseMainTypes: DATABASE_MAIN_TYPES.JOB_TITLE,
    },
  };
}
