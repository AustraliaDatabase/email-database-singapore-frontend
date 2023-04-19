import React from "react";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import AlternativeForOthers from "../mainViews/alternativeForOthers/AlternativeForOthers";
import { BOOK_YOUR_DATA_ALTERNATES } from "../mainViews/alternativeForOthers/seeds";

const BetterThanOthers = () => {
  return (
    <PublicLayout>
      <NextSeo
        title={BOOK_YOUR_DATA_ALTERNATES.seoTitle}
        description={BOOK_YOUR_DATA_ALTERNATES?.seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/alternative-for-bookyourdata`}
      />
      <AlternativeForOthers alternateObject={BOOK_YOUR_DATA_ALTERNATES} />
    </PublicLayout>
  );
};

export default BetterThanOthers;
