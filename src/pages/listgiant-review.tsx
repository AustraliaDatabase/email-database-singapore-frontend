import React from "react";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import AlternativeForOthers from "../mainViews/alternativeForOthers/AlternativeForOthers";
import { LIST_GIANT_ALTERNATES } from "../mainViews/alternativeForOthers/seeds";

const BetterThanOthers = () => {
  return (
    <PublicLayout>
      <NextSeo
        title={LIST_GIANT_ALTERNATES.seoTitle}
        description={LIST_GIANT_ALTERNATES?.seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/listgiant-review`}
      />
      <AlternativeForOthers alternateObject={LIST_GIANT_ALTERNATES} />
    </PublicLayout>
  );
};

export default BetterThanOthers;
