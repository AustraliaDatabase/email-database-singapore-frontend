import { NextSeo } from "next-seo";
import React from "react";

import PublicLayout from "../../layouts/public/PublicLayout";
import CCPAMainView from "../../mainViews/ccpa/CCPAMainView";

const index = () => {
  return (
    <>
      <NextSeo nofollow noindex />
      <PublicLayout>
        <CCPAMainView />
      </PublicLayout>
    </>
  );
};

export default index;
