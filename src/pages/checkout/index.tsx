import { NextSeo } from "next-seo";
import React from "react";

import PublicLayout from "../../layouts/public/PublicLayout";
import CheckoutMainView from "../../mainViews/checkout/Checkout";

const CheckoutPage = () => {
  return (
    <>
      <NextSeo title="Checkout - Email Datas" />;
      <PublicLayout>
        <CheckoutMainView />
      </PublicLayout>
    </>
  );
};

export default CheckoutPage;
