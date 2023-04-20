import React from "react";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import AlternativeForOthers from "../mainViews/alternativeForOthers/AlternativeForOthers";
import { DATA_COM_ALTERNATES } from "../mainViews/alternativeForOthers/seeds";

const BetterThanOthers = () => {
  return (
    <PublicLayout>
      <NextSeo
        title={DATA_COM_ALTERNATES.seoTitle}
        description={DATA_COM_ALTERNATES?.seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/data-com`}
      />
      <AlternativeForOthers alternateObject={DATA_COM_ALTERNATES} />
    </PublicLayout>
  );
};

export default BetterThanOthers;
