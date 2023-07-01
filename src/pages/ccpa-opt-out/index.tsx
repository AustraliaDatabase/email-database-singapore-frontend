import { NextSeo } from "next-seo";
import React from "react";

import PublicLayout from "../../layouts/public/PublicLayout";
import DoNotSellMyInfo from "../../mainViews/doNotSellMyInfo/DoNotSellMyInfo";

const index = () => {
  return (
    <>
      <NextSeo nofollow noindex />
      <PublicLayout>
        <DoNotSellMyInfo />
      </PublicLayout>
    </>
  );
};

export default index;
