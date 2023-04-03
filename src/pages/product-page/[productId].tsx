import { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ProductJsonLd, BreadcrumbJsonLd } from "next-seo";

import PublicLayout from "../../layouts/public/PublicLayout";
import MainView404 from "../../mainViews/404MainView";
import ProductMainViewV2 from "../../mainViews/productMainViewV2/ProductMainViewV2";
import instance from "../../services/baseServices";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import {
  IReviewItem,
  IReviewObject,
  ISeedObject,
} from "../../shared/interface";
import { routeToLowerCase, trimAllSpaces } from "../../shared/InternalService";
import {
  DATA_TYPE_TO_BREADCRUMB_NAME,
  DATA_TYPE_TO_BREADCRUMB_URL,
  RELEASED_DATE,
} from "../../shared/constants";
import { calculateReviews } from "../../services/internalServices";

interface ICompanyDatabaseByState {
  realtorObject: {
    currentObject: ISeedObject;
    databaseMainTypes: DATABASE_MAIN_TYPES;
  };
  reviewObject: IReviewObject;
  isScrollToPrice?: boolean;
}

const CompanyDatabaseByState = (props: ICompanyDatabaseByState) => {
  const { realtorObject, reviewObject, isScrollToPrice } = props;
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

  const enabledReviews: any = reviewObject?.reviews?.filter((element) => {
    return element.enable;
  });

  const extraObjectReview = enabledReviews?.length
    ? {
        aggregateRating: {
          ratingValue: calculateReviews(enabledReviews),
          reviewCount: enabledReviews?.length,
        },
      }
    : {};

  return (
    <>
      <BreadcrumbJsonLd
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
        {...extraObjectReview}
        images={[reviewObject?.product?.fileUrl || ""]}
        productName={currentObject?.banner?.plainTitle}
        description={trimAllSpaces(currentObject?.banner?.description)}
        releaseDate={RELEASED_DATE}
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
          canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/${currentObject.url
            ?.split("/")
            .join("")}`}
        />
        <ProductMainViewV2
          databaseMainType={databaseMainType}
          currentObject={currentObject}
          reviewObject={reviewObject}
          isScrollToPrice={isScrollToPrice}
        />
      </PublicLayout>
    </>
  );
};

export default CompanyDatabaseByState;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;

  const referer = context.req.headers.referer;

  let finalResponse;
  // @ts-ignore
  if (params?.productId?.toLowerCase()) {
    const productResponse = instance.post(
      `/searchProduct/alaska-business-list`
    );

    const reviewResponse = instance.post(
      // @ts-ignore
      `/searchReview/${params?.productId?.toLowerCase()}`
    );

    finalResponse = await Promise.all([productResponse, reviewResponse]);
  }

  const isScrollToPrice = referer
    ? referer?.indexOf(`${process.env.NEXT_PUBLIC_BASE_URL}/email/`) !== -1 ||
      referer?.indexOf(`${process.env.NEXT_PUBLIC_BASE_URL}/realtor/`) !== -1
    : false;

  return {
    props: {
      realtorObject: {
        currentObject: finalResponse?.[0].data || null,
        databaseMainTypes: finalResponse?.[0].data?.type || null,
      },
      reviewObject: finalResponse?.[1].data || null,
      isScrollToPrice,
    },
  };
}
