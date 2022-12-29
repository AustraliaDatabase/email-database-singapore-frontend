import { BreadcrumbJsonLd, NextSeo, ProductJsonLd } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { GetServerSidePropsContext } from "next";

import PublicLayout from "../../layouts/public/PublicLayout";
import { routeToLowerCase, trimAllSpaces } from "../../shared/InternalService";
import MainProductMainView from "../../mainViews/mainProduct/MainProductView";
import { DATABASE_MAIN_TYPES } from "../../shared/enums";
import instance from "../../services/baseServices";
import MainView404 from "../../mainViews/404MainView";
import {
  DATA_TYPE_TO_BREADCRUMB_URL,
  RELEASED_DATE,
} from "../../shared/constants";
import { calculateReviews } from "../../services/internalServices";
import { IReviewItem } from "../../shared/interface";

const AllRealtorsPage = (props: any) => {
  const { realtorObject, reviewObject } = props;
  const router = useRouter();

  const currentObject: any = realtorObject?.currentObject;

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

  const enabledReviews: any = reviewObject?.reviews?.filter((element: IReviewItem) => {
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
            name: "Real Estate Agent Email List",
            item: `${process.env.NEXT_PUBLIC_BASE_URL}/real-estate-agent-email-list`,
          },
        ]}
      />
      <ProductJsonLd
        {...extraObjectReview}
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
      <NextSeo
        title={currentObject?.meta?.metaTitle}
        description={currentObject?.meta?.metaDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/real-estate-agent-email-list`}
      />
      <PublicLayout>
        <MainProductMainView
          databaseMainType={DATABASE_MAIN_TYPES.REALTOR}
          currentObject={currentObject}
          reviewObject={reviewObject}
        />
      </PublicLayout>
    </>
  );
};

export default AllRealtorsPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const productResponse = await instance.post(
    `/realtorProduct/real-estate-agent-email-list`
  );

  const reviewResponse = instance.post(
    // @ts-ignore
    `/searchReview/real-estate-agent-email-list`
  );

  const finalResponse = await Promise.all([productResponse, reviewResponse]);

  return {
    props: {
      realtorObject: {
        currentObject: finalResponse?.[0].data || null,
        databaseMainTypes: DATABASE_MAIN_TYPES.REALTOR,
      },
      reviewObject: finalResponse?.[1].data || null,
    },
  };
}
