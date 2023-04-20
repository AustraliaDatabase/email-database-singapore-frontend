import React from "react";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import AlternativeForOthers from "../mainViews/alternativeForOthers/AlternativeForOthers";
import { ZOOM_INFO_ALTERNATES } from "../mainViews/alternativeForOthers/seeds";

const BetterThanOthers = () => {
  return (
    <PublicLayout>
      <NextSeo
        title={ZOOM_INFO_ALTERNATES.seoTitle}
        description={ZOOM_INFO_ALTERNATES?.seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/zoominfo-review`}
      />
      <AlternativeForOthers alternateObject={ZOOM_INFO_ALTERNATES} />
    </PublicLayout>
  );
};

export default BetterThanOthers;
