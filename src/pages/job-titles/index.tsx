import { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { Col, Container } from "react-bootstrap";

import PublicLayout from "../../layouts/public/PublicLayout";
import { JOB_TITLE_CONTENT } from "../../mainViews/alternativeForOthers/seeds";
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
            <h1 style={{ fontSize: 31 }} className="text-center">
              Connect with Top Talent Using Job Seekers Email Address List
            </h1>
          </Container>
        </section>
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
        <section>
          <Container>
            <Col
              xs={12}
              lg={12}
              className="d-flex flex-column mb-5 mx-auto align-items-center justify-content-center"
            >
              <div
                style={{ maxWidth: "80%" }}
                className="d-flex text-center text-lg-start flex-column mt-4"
                dangerouslySetInnerHTML={{ __html: JOB_TITLE_CONTENT }}
              />
            </Col>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default RealtorsByStatePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const response = await instance.post(`/jobTitleProduct`);

  const filteredData = response?.data?.filter((element: IMainProductInfo) => {
    return element?.productInfo?.list?.length;
  });

  return {
    props: {
      tableDataSet: filteredData || null,
      databaseMainTypes: DATABASE_MAIN_TYPES.JOB_TITLE,
    },
  };
}
