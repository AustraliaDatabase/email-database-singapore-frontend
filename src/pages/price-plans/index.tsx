import React from "react";
import { NextSeo } from "next-seo";

import PricePlanMainView from "../../mainViews/pricePlans/PricePlans";
import PublicLayout from "../../layouts/public/PublicLayout";

const PricePlans = () => (
  <>
    <NextSeo title="Pricing - EmailDatas" canonical="https://EmailDatas.com/price-plans"/>
    <PublicLayout>
      <PricePlanMainView />
    </PublicLayout>
  </>
);

export default PricePlans;
