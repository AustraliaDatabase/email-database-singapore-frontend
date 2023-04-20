import React from "react";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import AlternativeForOthers from "../mainViews/alternativeForOthers/AlternativeForOthers";
import { DATABASE_USA_ALTERNATES } from "../mainViews/alternativeForOthers/seeds";

const BetterThanOthers = () => {
  return (
    <PublicLayout>
      <NextSeo
        title={DATABASE_USA_ALTERNATES.seoTitle}
        description={DATABASE_USA_ALTERNATES?.seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/databaseusa`}
      />
      <AlternativeForOthers alternateObject={DATABASE_USA_ALTERNATES} />
    </PublicLayout>
  );
};

export default BetterThanOthers;
