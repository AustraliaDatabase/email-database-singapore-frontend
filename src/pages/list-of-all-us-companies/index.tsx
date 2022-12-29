import { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import PublicLayout from "../../layouts/public/PublicLayout";
import MainView404 from "../../mainViews/404MainView";
import MainProductViewListOfEmail from "../../mainViews/mainProduct/MainProductViewListOfEmail";
import instance from "../../services/baseServices";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import { ISeedObject } from "../../shared/interface";
import { routeToLowerCase } from "../../shared/InternalService";

interface ICompanyDatabaseByState {
  realtorObject: {
    currentObject: ISeedObject;
    databaseMainTypes: DATABASE_MAIN_TYPES;
  };
  tableDataSet: any;
}

const CompanyDatabaseByState = (props: ICompanyDatabaseByState) => {
  const { realtorObject, tableDataSet } = props;
  const router = useRouter();

  const currentObject: any = realtorObject?.currentObject;
  const databaseMainType = realtorObject?.databaseMainTypes;

  useEffect(() => {
    routeToLowerCase(router);
  }, []);

  if (!currentObject?.url) {
    return (
      <PublicLayout>
        <MainView404 />
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <NextSeo
        title={currentObject?.meta?.metaTitle}
        description={currentObject?.meta?.metaDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/${currentObject.url
          ?.split("/")
          .join("")}`}
      />
      <MainProductViewListOfEmail
        databaseMainType={databaseMainType}
        currentObject={currentObject}
        tableDataSet={tableDataSet}
      />
    </PublicLayout>
  );
};

export default CompanyDatabaseByState;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;

  let response = await instance.post(`/searchProduct/list-of-all-us-companies`);
  const response2 = await instance.post(`/companyProduct`);

  return {
    props: {
      tableDataSet: response2.data || null,
      realtorObject: {
        currentObject: response?.data || null,
        databaseMainTypes: response?.data?.type || null,
      },
    },
  };
}
