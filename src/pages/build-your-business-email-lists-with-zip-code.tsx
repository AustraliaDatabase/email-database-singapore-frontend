import React from "react";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import BuilB2bListWithZipMainView from "../mainViews/builB2bListWithZipMainView/BuilB2bListWithZipMainView";

const BuildBusinessListWithZipCode = () => {
  return (
    <PublicLayout>
      <NextSeo
        title="Email Datas - Build your business email lists with zip code"
        description=""
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/build-your-business-email-lists-with-zip-code`}
      />
      <BuilB2bListWithZipMainView />
    </PublicLayout>
  );
};

export default BuildBusinessListWithZipCode;
