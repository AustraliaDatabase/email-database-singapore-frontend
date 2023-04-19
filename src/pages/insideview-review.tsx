import React from "react";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import AlternativeForOthers from "../mainViews/alternativeForOthers/AlternativeForOthers";
import { INSIDE_VIEW_ALTERNATES } from "../mainViews/alternativeForOthers/seeds";

const BetterThanOthers = () => {
  return (
    <PublicLayout>
      <NextSeo
        title={INSIDE_VIEW_ALTERNATES.seoTitle}
        description={INSIDE_VIEW_ALTERNATES?.seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/insideview-review`}
      />
      <AlternativeForOthers alternateObject={INSIDE_VIEW_ALTERNATES} />
    </PublicLayout>
  );
};

export default BetterThanOthers;
