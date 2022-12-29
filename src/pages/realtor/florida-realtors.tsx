import { GetServerSidePropsContext } from "next";
import { BreadcrumbJsonLd, NextSeo, ProductJsonLd } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import PublicLayout from "../../layouts/public/PublicLayout";
import MainView404 from "../../mainViews/404MainView";
import MainProductMainView from "../../mainViews/mainProduct/MainProductView";
import instance from "../../services/baseServices";
import { calculateReviews } from "../../services/internalServices";
import {
  DATA_TYPE_TO_BREADCRUMB_NAME,
  DATA_TYPE_TO_BREADCRUMB_URL,
  RELEASED_DATE,
} from "../../shared/constants";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import { IReviewItem, ISeedObject } from "../../shared/interface";
import { routeToLowerCase, trimAllSpaces } from "../../shared/InternalService";

interface ICompanyDatabaseByState {
  realtorObject: {
    currentObject: ISeedObject;
    databaseMainTypes: DATABASE_MAIN_TYPES;
  };
  reviewObject: any;
}

const CompanyDatabaseByState = (props: ICompanyDatabaseByState) => {
  const { realtorObject, reviewObject } = props;
  const router = useRouter();

  const currentObject: any = realtorObject?.currentObject;
  const databaseMainType = realtorObject?.databaseMainTypes;

  useEffect(() => {
    routeToLowerCase(router);
  }, []);

  const enabledReviews: any = reviewObject?.reviews?.filter(
    (element: IReviewItem) => {
      return element.enable;
    }
  );

  const extraObjectReview = enabledReviews?.length
    ? {
        aggregateRating: {
          ratingValue: calculateReviews(enabledReviews),
          reviewCount: enabledReviews?.length,
        },
      }
    : {};

  if (!currentObject?.url) {
    return (
      <PublicLayout>
        <MainView404 />
      </PublicLayout>
    );
  }

  return (
    <>
      <BreadcrumbJsonLd
        {...extraObjectReview}
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
      />
      <ProductJsonLd
        productName={currentObject?.banner?.plainTitle}
        images={[reviewObject?.product?.fileUrl]}
        description={trimAllSpaces(currentObject?.banner?.description)}
        releaseDate={RELEASED_DATE}
        // reviews={[
        //   {
        //     author: "Jim",
        //     datePublished: "2017-01-06T03:37:40Z",
        //     reviewBody:
        //       "This is my favorite product yet! Thanks Nate for the example products and reviews.",
        //     name: "So awesome!!!",
        //     reviewRating: {
        //       bestRating: "5",
        //       ratingValue: "5",
        //       worstRating: "1",
        //     },
        //     publisher: {
        //       type: "Organization",
        //       name: "TwoVit",
        //     },
        //   },
        // ]}
        // aggregateRating={{
        //   ratingValue: "4.4",
        //   reviewCount: "89",
        // }}
        offers={{
          lowPrice: currentObject?.price?.list[0]?.price,
          price: currentObject?.price?.list[0]?.price,
          priceCurrency: "USD",
          description: trimAllSpaces(currentObject?.price?.list[0]?.title),
          availability: "https://schema.org/InStock",
        }}
      />
      <PublicLayout>
        <NextSeo
          title={currentObject?.meta?.metaTitle}
          description={currentObject?.meta?.metaDescription}
          canonical={`${process.env.NEXT_PUBLIC_BASE_URL}${currentObject.url
            ?.split("+")
            .join("/")}`}
        />
        <MainProductMainView
          databaseMainType={databaseMainType}
          currentObject={currentObject}
          reviewObject={reviewObject}
        />
      </PublicLayout>
    </>
  );
};

export default CompanyDatabaseByState;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;

  const productResponse = await instance.post(
    `/searchProduct/realtor+florida-realtors`
  );

  const reviewResponse = instance.post(
    // @ts-ignore
    `/searchReview/realtor+florida-realtors`
  );

  const finalResponse = await Promise.all([productResponse, reviewResponse]);

  return {
    props: {
      realtorObject: {
        currentObject: finalResponse?.[0].data || null,
        databaseMainTypes: finalResponse?.[0].data?.type || null,
      },
      reviewObject: finalResponse?.[1].data || null,
    },
  };
}
