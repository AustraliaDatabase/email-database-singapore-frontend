import React from "react";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import AlternativeForOthers from "../mainViews/alternativeForOthers/AlternativeForOthers";
import { LEAD_GENIUS_ALTERNATES } from "../mainViews/alternativeForOthers/seeds";

const BetterThanOthers = () => {
  return (
    <PublicLayout>
      <NextSeo
        title={LEAD_GENIUS_ALTERNATES.seoTitle}
        description={LEAD_GENIUS_ALTERNATES?.seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/alternative-for-leadgenius-com`}
      />
      <AlternativeForOthers alternateObject={LEAD_GENIUS_ALTERNATES} />
    </PublicLayout>
  );
};

export default BetterThanOthers;
