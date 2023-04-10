import { NextSeo } from "next-seo";
import React from "react";

import PublicLayout from "../../layouts/public/PublicLayout";
import PreMadeListView from "../../mainViews/preMadeListView/PreMadeListView";

const index = () => {
  return (
    <>
      <NextSeo
        title="Browse Premade B2B email lists for effective marketing campaigns."
        description="Access premade B2B email lists with targeted sales leads and contact databases, optimizing your marketing efforts with reliable data."
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/pre-made-list`}
      />

      <PublicLayout>
        <PreMadeListView />
      </PublicLayout>
    </>
  );
};

export default index;
