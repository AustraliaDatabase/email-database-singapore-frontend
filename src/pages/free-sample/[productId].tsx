import React from "react";
import { NextSeo } from "next-seo";

import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import { useRouter } from "next/router";
import FreeSampleCategories from "../../mainViews/freeSampleCategories/FreeSampleCategories";

const ProductIdPage = () => {
  const router = useRouter();

  const productId = router?.query?.productId;

  return (
    <>
      <NextSeo title={`Free Sample - ${productId} - JozData`} description="" />
      <DashboardLayout>
        <FreeSampleCategories />
      </DashboardLayout>
    </>
  );
};

export default ProductIdPage;
