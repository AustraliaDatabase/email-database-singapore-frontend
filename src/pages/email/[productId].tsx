import { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ProductJsonLd, BreadcrumbJsonLd } from "next-seo";

import PublicLayout from "../../layouts/public/PublicLayout";
import MainView404 from "../../mainViews/404MainView";
import MainProductMainView from "../../mainViews/mainProduct/MainProductView";
import instance from "../../services/baseServices";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import { ISeedObject } from "../../shared/interface";
import { routeToLowerCase } from "../../shared/InternalService";
import {
  DATA_TYPE_TO_BREADCRUMB_NAME,
  DATA_TYPE_TO_BREADCRUMB_URL,
} from "../../shared/constants";

interface ICompanyDatabaseByState {
  realtorObject: {
    currentObject: ISeedObject;
    databaseMainTypes: DATABASE_MAIN_TYPES;
  };
}

const CompanyDatabaseByState = (props: ICompanyDatabaseByState) => {
  const { realtorObject } = props;
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
    <>
      {/* <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "Home",
            item: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
          },
          {
            position: 2,
            name: DATA_TYPE_TO_BREADCRUMB_NAME[databaseMainType],
            item: `${process.env.NEXT_PUBLIC_BASE_URL}/${DATA_TYPE_TO_BREADCRUMB_URL[databaseMainType]}`,
          },
          {
            position: 3,
            name: currentObject?.name,
            item: `${process.env.NEXT_PUBLIC_BASE_URL}${currentObject?.url}`,
          },
        ]}
      /> */}
      <PublicLayout>
        <NextSeo
          title={currentObject?.meta?.metaTitle}
          description={currentObject?.meta?.metaDescription}
          canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/email/${currentObject.url
            ?.split("/")
            .join("")}`}
        />
        <MainProductMainView
          databaseMainType={DATABASE_MAIN_TYPES.COMPANY_DATABASE_OLD}
          currentObject={currentObject}
        />
      </PublicLayout>
    </>
  );
};

export default CompanyDatabaseByState;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;

  let finalResponse;
  // @ts-ignore
  if (params?.productId?.toLowerCase() !== "list-of-all-email-lists") {
    const productResponse = instance.post(
      // @ts-ignore
      `/companyProductOld/${params?.productId?.toLowerCase()}`
    );

    finalResponse = await Promise.all([productResponse]);
  }

  return {
    props: {
      realtorObject: {
        currentObject: finalResponse?.[0].data || null,
        databaseMainTypes: finalResponse?.[0].data?.type || null,
      },
    },
  };
}
