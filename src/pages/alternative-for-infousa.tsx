import React from "react";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import AlternativeForOthers from "../mainViews/alternativeForOthers/AlternativeForOthers";
import { INFO_USA_ALTERNATES } from "../mainViews/alternativeForOthers/seeds";

const BetterThanOthers = () => {
  return (
    <PublicLayout>
      <NextSeo
        title={INFO_USA_ALTERNATES.seoTitle}
        description={INFO_USA_ALTERNATES?.seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/alternative-for-infousa`}
      />
      <AlternativeForOthers alternateObject={INFO_USA_ALTERNATES} />
    </PublicLayout>
  );
};

export default BetterThanOthers;
