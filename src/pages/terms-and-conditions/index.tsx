import { NextSeo } from "next-seo";
import React from "react";
import PublicLayout from "../../layouts/public/PublicLayout";
import TermsMainView from "../../mainViews/terms/TermsMainView";

const index = () => {
  return (
    <>
      <NextSeo nofollow noindex />
      <PublicLayout>
        <TermsMainView />
      </PublicLayout>
    </>
  );
};

export default index;
