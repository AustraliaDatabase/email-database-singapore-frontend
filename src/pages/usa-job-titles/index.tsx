import { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import PublicLayout from "../../layouts/public/PublicLayout";

import instance from "../../services/baseServices";
import Table from "../../shared/components/table/Table";
import { HEADER_COLUMNS_USA_JOB_TITLES_DATABASE } from "../../shared/constants";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import { IMainProductInfo } from "../../shared/interface";
import { routeToLowerCase } from "../../shared/InternalService";

const JOB_TITLE_SET_ATTRIBUTES = {
  uniqueDirectContacts: "uniqueDirectContacts",
};

interface IUsaJobTitlesPage {
  tableDataSet: IMainProductInfo[];
}

const UsaJobTitlesPage = (props: IUsaJobTitlesPage) => {
  const router = useRouter();

  const { tableDataSet } = props;

  useEffect(() => {
    routeToLowerCase(router);
  }, []);

  return (
    <>
      <NextSeo
        title="B2B Email DATABASE BY PROFESSIONS"
        description="Find the email addresses and contact details of individuals with particular job titles. 
      You can particularly target to doctors, CFOs, CEOs , Chairman , Office Manager and etc ."
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/usa-job-titles`}
      />
      <PublicLayout>
        <h1 className="text-center mb-5 sectiontopfix" style={{ fontSize: 31 }}>
          B2B Email List By Job Titles
        </h1>
        <section style={{ marginTop: -30 }}>
          <Container>
            <Table
              columns={HEADER_COLUMNS_USA_JOB_TITLES_DATABASE}
              data={tableDataSet}
              attributesSet={JOB_TITLE_SET_ATTRIBUTES}
              isProductPage={false}
              type={DATABASE_MAIN_TYPES.JOB_TITLE}
            />
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default UsaJobTitlesPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const response = await instance.post(`/jobTitleProduct`);

  return {
    props: {
      tableDataSet: response.data || null,
      databaseMainTypes: DATABASE_MAIN_TYPES.JOB_TITLE,
    },
  };
}
