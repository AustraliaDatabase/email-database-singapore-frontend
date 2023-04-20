import React from "react";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import AlternativeForOthers from "../mainViews/alternativeForOthers/AlternativeForOthers";
import { SALES_GENIE_ALTERNATES } from "../mainViews/alternativeForOthers/seeds";

const BetterThanOthers = () => {
  return (
    <PublicLayout>
      <NextSeo
        title={SALES_GENIE_ALTERNATES.seoTitle}
        description={SALES_GENIE_ALTERNATES?.seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/salesgenie-review`}
      />
      <AlternativeForOthers alternateObject={SALES_GENIE_ALTERNATES} />
    </PublicLayout>
  );
};

export default BetterThanOthers;
