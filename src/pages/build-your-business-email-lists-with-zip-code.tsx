import React from "react";
import { NextSeo } from "next-seo";

import PublicLayout from "../layouts/public/PublicLayout";
import BuilB2bListWithZipMainView from "../mainViews/builB2bListWithZipMainView/BuilB2bListWithZipMainView";

const BuildBusinessListWithZipCode = () => {
  return (
    <PublicLayout>
      <NextSeo
        title="Generate Targeted Business Email Lists by Zip Code | Email Datas"
        description="Email Datas provides a reliable solution to build your business email lists based on zip codes.Reach out to your potential customers"
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/build-your-business-email-lists-with-zip-code`}
      />
      <BuilB2bListWithZipMainView />
    </PublicLayout>
  );
};

export default BuildBusinessListWithZipCode;
