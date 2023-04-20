import React from "react";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import AlternativeForOthers from "../mainViews/alternativeForOthers/AlternativeForOthers";
import { LEAD_11_ALTERNATES } from "../mainViews/alternativeForOthers/seeds";

const BetterThanOthers = () => {
  return (
    <PublicLayout>
      <NextSeo
        title={LEAD_11_ALTERNATES.seoTitle}
        description={LEAD_11_ALTERNATES?.seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/lead411-review`}
      />
      <AlternativeForOthers alternateObject={LEAD_11_ALTERNATES} />
    </PublicLayout>
  );
};

export default BetterThanOthers;
