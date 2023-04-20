import React from "react";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import AlternativeForOthers from "../mainViews/alternativeForOthers/AlternativeForOthers";
import { EXACT_DATA_ALTERNATES } from "../mainViews/alternativeForOthers/seeds";

const BetterThanOthers = () => {
  return (
    <PublicLayout>
      <NextSeo
        title={EXACT_DATA_ALTERNATES.seoTitle}
        description={EXACT_DATA_ALTERNATES?.seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/exactdata-review`}
      />
      <AlternativeForOthers alternateObject={EXACT_DATA_ALTERNATES} />
    </PublicLayout>
  );
};

export default BetterThanOthers;
