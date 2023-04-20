import React from "react";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import AlternativeForOthers from "../mainViews/alternativeForOthers/AlternativeForOthers";
import { EXPERIAN_ALTERNATES } from "../mainViews/alternativeForOthers/seeds";

const BetterThanOthers = () => {
  return (
    <PublicLayout>
      <NextSeo
        title={EXPERIAN_ALTERNATES.seoTitle}
        description={EXPERIAN_ALTERNATES?.seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/emaildatas-vs-experian`}
      />
      <AlternativeForOthers alternateObject={EXPERIAN_ALTERNATES} />
    </PublicLayout>
  );
};

export default BetterThanOthers;
