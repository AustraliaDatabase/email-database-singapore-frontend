import { NextSeo } from "next-seo";
import React from "react";
import PublicLayout from "../layouts/public/PublicLayout";
import UsCompanyDataReview from "../mainViews/usCompanyDataReview/UsCompanyDataReview";

const USCompanyDataReview = () => {
  return (
    <PublicLayout>
      <NextSeo
        title="Email Datas Reviews"
        description="Email Datas has a consumer rating of 5 stars from 11 reviews indicating that most customers are generally satisfied with their purchases."
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/uscompanydata-reviews`}
      />
      <UsCompanyDataReview />
    </PublicLayout>
  );
};

export default USCompanyDataReview;
