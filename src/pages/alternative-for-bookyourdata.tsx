import React from "react";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import AlternativeForOthers from "../mainViews/alternativeForOthers/AlternativeForOthers";

const BetterThanOthers = () => {
  return (
    <PublicLayout>
      <NextSeo
        title="Email Datas - Build your business email lists with zip code"
        description=""
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/alternative-for-bookyourdata`}
      />
      <AlternativeForOthers />
    </PublicLayout>
  );
};

export default BetterThanOthers;
